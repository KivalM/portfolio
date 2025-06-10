import { GITHUB_TOKEN } from '$env/static/private';
export const GITHUB_CONFIG = {
	username: 'KivalM',
	// Include repos with these topics in portfolio
	includeTopics: ['portfolio', 'project', 'demo', 'showcase'] as string[],
	// Exclude specific repos
	excludeRepos: [
		'KivalM', // Profile README repo
		'config', // Dotfiles
		'learning', // Learning repositories
	] as string[],
	// Minimum requirements
	minStars: 0,
	includeForks: false,
	includeArchived: false,
	maxRepos: 20,
	
	// Content parsing configuration
	imageExtensions: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'avif'] as string[],
	imageFolders: ['screenshots', 'docs', 'assets', 'images', '.github'] as string[],
	commonImageNames: [
		'demo.gif', 'demo.png', 'screenshot.png', 'preview.png', 
		'banner.png', 'cover.png', 'thumbnail.png', 'image.png'
	] as string[],
	
	// Caching strategy (for development)
	cacheTimeout: 3600000, // 1 hour in milliseconds
	cacheFile: '.github-projects-cache.json',
	
	// Rate limiting
	requestDelay: 100, // ms between requests to avoid rate limiting
};

export const GITHUB_API_BASE = 'https://api.github.com';

// Environment variables - these will be used server-side only
export const getGitHubToken = () => {
	// This will only work in server-side context (load functions)
    console.log('GITHUB_TOKEN', GITHUB_TOKEN);
	return GITHUB_TOKEN;
};

export const shouldForceRefresh = () => {
	// This will only work in server-side context (load functions)
	return process?.env?.FORCE_GITHUB_REFRESH === 'true';
}; 