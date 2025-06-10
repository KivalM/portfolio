import type { Link } from '$lib/data/Link';

export class Project {
    constructor(
        public title: string,
        public description: string,
        public tags: string[],
        public images: string[],
        public links: Link[],
        public team: string[] = [],
        public category: string = "Personal",
        public githubData: {
            stars: number;
            language: string | null;
            lastUpdated: Date;
            topics: string[];
            repoUrl: string;
            createdAt: Date;
        }
    ) {
        // Images are already URLs from the GitHub API
    }
}

