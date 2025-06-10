export interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	topics: string[];
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	archived: boolean;
	fork: boolean;
	created_at: string;
	updated_at: string;
	pushed_at: string;
}

export interface GitHubReadme {
	content: string;
	encoding: 'base64';
	download_url: string;
}

export interface GitHubContent {
	name: string;
	path: string;
	type: 'file' | 'dir';
	download_url: string | null;
	html_url: string;
}

export interface ParsedProjectData {
	title: string;
	description: string;
	tags: string[];
	images: string[];
	demoUrl?: string;
	features?: string[];
}

export interface GitHubProjectMetadata {
	stars: number;
	language: string | null;
	lastUpdated: Date;
	topics: string[];
	repoUrl: string;
	createdAt: Date;
} 