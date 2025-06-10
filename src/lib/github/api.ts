import { GITHUB_API_BASE, GITHUB_CONFIG, getGitHubToken } from './config.js';
import type { GitHubRepo, GitHubReadme, GitHubContent } from './types.js';

// Rate limiting helper
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Create headers with optional auth token
const getHeaders = () => {
	const headers: Record<string, string> = {
		'Accept': 'application/vnd.github.v3+json',
		'User-Agent': 'Portfolio-GitHub-Integration'
	};
	
	const token = getGitHubToken();
	if (token) {
		headers['Authorization'] = `token ${token}`;
	}
	
	return headers;
};

// Fetch with error handling and rate limiting
async function fetchGitHub<T>(url: string): Promise<T | null> {
	try {
		await delay(GITHUB_CONFIG.requestDelay);
		
		const response = await fetch(url, { headers: getHeaders() });
		
		if (!response.ok) {
			console.warn(`GitHub API request failed: ${response.status} ${response.statusText} for ${url}`);
			return null;
		}
		
		return await response.json();
	} catch (error) {
		console.error('GitHub API fetch error:', error);
		return null;
	}
}

// Get all public repositories for a user
export async function fetchUserRepositories(username: string = GITHUB_CONFIG.username): Promise<GitHubRepo[]> {
	const repos = await fetchGitHub<GitHubRepo[]>(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`);
	
	if (!repos) {
		console.warn('Failed to fetch repositories');
		return [];
	}
	
	// Filter repositories based on configuration
	return repos.filter(repo => {
		// Skip archived repos if configured
		if (!GITHUB_CONFIG.includeArchived && repo.archived) return false;
		
		// Skip forks if configured
		if (!GITHUB_CONFIG.includeForks && repo.fork) return false;
		
		// Skip repos that don't meet minimum stars
		if (repo.stargazers_count < GITHUB_CONFIG.minStars) return false;
		
		// Skip excluded repos
		if (GITHUB_CONFIG.excludeRepos.includes(repo.name)) return false;
		
		return true;
	}).slice(0, GITHUB_CONFIG.maxRepos);
}

// Get README content for a repository
export async function fetchRepositoryReadme(owner: string, repo: string): Promise<GitHubReadme | null> {
	const readme = await fetchGitHub<GitHubReadme>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`);
	return readme;
}

// Get repository contents (for finding images)
export async function fetchRepositoryContents(owner: string, repo: string, path: string = ''): Promise<GitHubContent[]> {
	const contents = await fetchGitHub<GitHubContent[]>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${path}`);
	return contents || [];
}

// Find images in repository
export async function findRepositoryImages(owner: string, repo: string): Promise<string[]> {
	const images: string[] = [];
	
	// Check root directory first
	const rootContents = await fetchRepositoryContents(owner, repo);
	
	// Look for common image files in root
	for (const item of rootContents) {
		if (item.type === 'file' && isImageFile(item.name)) {
			if (item.download_url) {
				images.push(item.download_url);
			}
		}
	}
	
	// Check common image folders
	for (const folder of GITHUB_CONFIG.imageFolders) {
		const folderContents = await fetchRepositoryContents(owner, repo, folder);
		for (const item of folderContents) {
			if (item.type === 'file' && isImageFile(item.name)) {
				if (item.download_url) {
					images.push(item.download_url);
				}
			}
		}
	}
	
	// Prioritize common image names
	const sortedImages = images.sort((a, b) => {
		const aName = a.split('/').pop() || '';
		const bName = b.split('/').pop() || '';
		
		const aPriority = GITHUB_CONFIG.commonImageNames.indexOf(aName);
		const bPriority = GITHUB_CONFIG.commonImageNames.indexOf(bName);
		
		// Higher priority (lower index) comes first
		if (aPriority !== -1 && bPriority !== -1) {
			return aPriority - bPriority;
		}
		if (aPriority !== -1) return -1;
		if (bPriority !== -1) return 1;
		
		return 0;
	});
	
	// Return first 3 images to avoid overwhelming the UI
	return sortedImages.slice(0, 3);
}

// Helper function to check if file is an image
function isImageFile(filename: string): boolean {
	const extension = filename.split('.').pop()?.toLowerCase();
	return extension ? GITHUB_CONFIG.imageExtensions.includes(extension) : false;
}

// Get repository topics (for tags)
export async function fetchRepositoryTopics(owner: string, repo: string): Promise<string[]> {
	const repoData = await fetchGitHub<GitHubRepo>(`${GITHUB_API_BASE}/repos/${owner}/${repo}`);
	return repoData?.topics || [];
} 