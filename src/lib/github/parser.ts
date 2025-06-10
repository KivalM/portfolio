import type { GitHubRepo, GitHubReadme, ParsedProjectData } from './types.js';
import { GITHUB_CONFIG } from './config.js';

// Decode base64 README content
function decodeReadmeContent(readme: GitHubReadme): string {
	try {
		return atob(readme.content.replace(/\s/g, ''));
	} catch (error) {
		console.warn('Failed to decode README content:', error);
		return '';
	}
}

// Extract title from README or repo name
function extractTitle(readmeContent: string, repo: GitHubRepo): string {
	// Look for first H1 heading
	const h1Match = readmeContent.match(/^#\s+(.+)$/m);
	if (h1Match) {
		return h1Match[1].trim();
	}
	
	// Look for title in different formats
	const titleMatch = readmeContent.match(/(?:^|\n)(?:title|name):\s*(.+)$/mi);
	if (titleMatch) {
		return titleMatch[1].trim();
	}
	
	// Use repo name as fallback, formatted nicely
	return repo.name
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

// Extract description from README or repo description
function extractDescription(readmeContent: string, repo: GitHubRepo): string {
	// Use repo description if available
	if (repo.description) {
		return repo.description;
	}
	
	// Look for description after title
	const lines = readmeContent.split('\n');
	let foundTitle = false;
	
	for (const line of lines) {
		// Skip title line
		if (line.startsWith('#') && !foundTitle) {
			foundTitle = true;
			continue;
		}
		
		// Skip empty lines and badges
		if (!line.trim() || line.includes('![') || line.includes('[![')) {
			continue;
		}
		
		// Return first meaningful paragraph
		if (line.trim() && foundTitle) {
			return line.trim();
		}
	}
	
	// Fallback to first non-empty line
	for (const line of lines) {
		if (line.trim() && !line.startsWith('#') && !line.includes('![')) {
			return line.trim();
		}
	}
	
	return 'A project by KivalM';
}

// Extract technology tags from various sources
function extractTags(readmeContent: string, repo: GitHubRepo): string[] {
	const tags = new Set<string>();
	
	// Add primary language if available
	if (repo.language) {
		tags.add(repo.language);
	}
	
	// Add repository topics
	repo.topics?.forEach(topic => tags.add(topic));
	
	// Look for technology mentions in README
	const techKeywords = [
		'rust', 'javascript', 'typescript', 'python', 'svelte', 'react', 'vue',
		'node', 'express', 'fastapi', 'django', 'flask', 'nextjs', 'nuxt',
		'tailwind', 'css', 'html', 'docker', 'kubernetes', 'aws', 'gcp',
		'postgresql', 'mysql', 'mongodb', 'redis', 'graphql', 'rest',
		'webassembly', 'wasm', 'api', 'cli', 'gui', 'web', 'mobile',
		'unity', 'game', 'ai', 'ml', 'machine learning', 'deep learning'
	];
	
	const lowerContent = readmeContent.toLowerCase();
	techKeywords.forEach(tech => {
		if (lowerContent.includes(tech)) {
			// Capitalize properly
			tags.add(tech.split(' ').map(word => 
				word.charAt(0).toUpperCase() + word.slice(1)
			).join(' '));
		}
	});
	
	// Look for badges (common format: ![Badge](url))
	const badgeMatches = readmeContent.match(/!\[([^\]]+)\]/g);
	if (badgeMatches) {
		badgeMatches.forEach(badge => {
			const text = badge.match(/!\[([^\]]+)\]/)?.[1];
			if (text && text.length < 20) { // Avoid long alt texts
				tags.add(text);
			}
		});
	}
	
	return Array.from(tags).slice(0, 8); // Limit to 8 tags
}

// Extract demo/live site URL
function extractDemoUrl(readmeContent: string, repo: GitHubRepo): string | undefined {
	// Check repo homepage first
	if (repo.homepage && repo.homepage.startsWith('http')) {
		return repo.homepage;
	}
	
	// Look for demo links in README
	const demoPatterns = [
		/(?:demo|live|site|website|preview):\s*(https?:\/\/[^\s)]+)/i,
		/\[(?:demo|live|site|website|preview)\]\((https?:\/\/[^)]+)\)/i,
		/(?:demo|live|site|website|preview)\s*[-:]\s*(https?:\/\/[^\s)]+)/i
	];
	
	for (const pattern of demoPatterns) {
		const match = readmeContent.match(pattern);
		if (match?.[1]) {
			return match[1];
		}
	}
	
	// Look for GitHub Pages URL pattern
	const pagesPattern = new RegExp(`https?://${GITHUB_CONFIG.username.toLowerCase()}\\.github\\.io/${repo.name.toLowerCase()}`);
	const pagesMatch = readmeContent.match(pagesPattern);
	if (pagesMatch) {
		return pagesMatch[0];
	}
	
	return undefined;
}

// Extract features list (optional)
function extractFeatures(readmeContent: string): string[] {
	const features: string[] = [];
	
	// Look for features section
	const featuresMatch = readmeContent.match(/(?:^|\n)#+\s*(?:features|what it does|functionality)\s*\n([\s\S]*?)(?=\n#+|\n\n|$)/mi);
	
	if (featuresMatch) {
		const featuresSection = featuresMatch[1];
		const lines = featuresSection.split('\n');
		
		for (const line of lines) {
			// Look for bullet points or numbered lists
			const listMatch = line.match(/^[-*+•]\s*(.+)$|^\d+\.\s*(.+)$/);
			if (listMatch) {
				const feature = (listMatch[1] || listMatch[2]).trim();
				if (feature.length > 10 && feature.length < 100) {
					features.push(feature);
				}
			}
		}
	}
	
	return features.slice(0, 5); // Limit to 5 features
}

// Main parsing function
export function parseProjectData(readme: GitHubReadme | null, repo: GitHubRepo): ParsedProjectData {
	const readmeContent = readme ? decodeReadmeContent(readme) : '';
	
	return {
		title: extractTitle(readmeContent, repo),
		description: extractDescription(readmeContent, repo),
		tags: extractTags(readmeContent, repo),
		images: [], // Will be populated by the image finder
		demoUrl: extractDemoUrl(readmeContent, repo),
		features: extractFeatures(readmeContent)
	};
} 