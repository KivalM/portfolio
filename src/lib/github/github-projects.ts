import { Project } from '../projects/Projects.js';
import { GitHub, Website } from '../data/Link.js';
import { GITHUB_CONFIG } from './config.js';
import { fetchUserRepositories, fetchRepositoryReadme, findRepositoryImages } from './api.js';
import { parseProjectData } from './parser.js';
import type { GitHubRepo } from './types.js';

// Convert GitHub repository to Project instance
async function convertRepoToProject(repo: GitHubRepo): Promise<Project | null> {
    try {
        console.log(`Processing repository: ${repo.name}`);
        
        // Fetch README content
        const readme = await fetchRepositoryReadme(GITHUB_CONFIG.username, repo.name);
        
        // Parse project data from README and repo metadata
        const projectData = parseProjectData(readme, repo);
        
        // Find images in repository
        const images = await findRepositoryImages(GITHUB_CONFIG.username, repo.name);
        projectData.images = images;
        
        // Create links
        const links = [
            new GitHub(repo.full_name, "GitHub Repository")
        ];
        
        // Add live demo link if found
        if (projectData.demoUrl) {
            links.push(new Website(projectData.demoUrl, "Live Demo"));
        }
        
        // Determine category based on topics or language
        let category = "Personal";
        if (repo.topics?.includes('university') || repo.topics?.includes('academic')) {
            category = "University";
        } else if (repo.topics?.includes('work') || repo.topics?.includes('professional')) {
            category = "Professional";
        }
        
        // Create GitHub metadata
        const githubData = {
            stars: repo.stargazers_count,
            language: repo.language,
            lastUpdated: new Date(repo.updated_at),
            topics: repo.topics || [],
            repoUrl: repo.html_url,
            createdAt: new Date(repo.created_at)
        };
        
        // Create Project instance
        const project = new Project(
            projectData.title,
            projectData.description,
            projectData.tags,
            projectData.images,
            links,
            [], // team - could be extracted from contributors in the future
            category,
            githubData
        );
        
        return project;
    } catch (error) {
        console.error(`Failed to process repository ${repo.name}:`, error);
        return null;
    }
}

// Filter repositories that should be included in portfolio
function filterPortfolioRepos(repos: GitHubRepo[]): GitHubRepo[] {
    return repos.filter(repo => {
        // Include if repo has portfolio-related topics
        const hasPortfolioTopics = repo.topics?.some(topic => 
            GITHUB_CONFIG.includeTopics.includes(topic)
        );
        
        // Include if repo name suggests it's a portfolio project
        const portfolioNamePatterns = [
            /portfolio/i,
            /project/i,
            /demo/i,
            /app$/i,
            /tool$/i,
            /game$/i
        ];
        
        const hasPortfolioName = portfolioNamePatterns.some(pattern => 
            pattern.test(repo.name)
        );
        
        // Include repos with decent activity (more than 1 commit)
        const hasActivity = repo.stargazers_count > 0 || 
                           new Date(repo.pushed_at) > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000); // Updated in last year
        
        return (hasPortfolioTopics || hasPortfolioName) && hasActivity;
    });
}

// Main function to fetch all GitHub projects
export async function fetchGitHubProjects(): Promise<Project[]> {
    try {
        console.log('Fetching GitHub repositories...');
        
        // Fetch all repositories
        const allRepos = await fetchUserRepositories();
        
        if (allRepos.length === 0) {
            console.warn('No repositories found');
            return [];
        }
        
        console.log(`Found ${allRepos.length} repositories`);
        
        // Filter for portfolio-worthy projects
        const portfolioRepos = filterPortfolioRepos(allRepos);
        
        console.log(`Filtered to ${portfolioRepos.length} portfolio repositories`);
        
        // Convert repositories to projects
        const projects: Project[] = [];
        for (const repo of portfolioRepos) {
            const project = await convertRepoToProject(repo);
            if (project) {
                projects.push(project);
            }
        }
        
        // Sort by stars descending, then by last updated
        projects.sort((a, b) => {
            const starsA = a.githubData?.stars || 0;
            const starsB = b.githubData?.stars || 0;
            
            if (starsA !== starsB) {
                return starsB - starsA;
            }
            
            const updatedA = a.githubData?.lastUpdated.getTime() || 0;
            const updatedB = b.githubData?.lastUpdated.getTime() || 0;
            
            return updatedB - updatedA;
        });
        
        console.log(`Successfully processed ${projects.length} GitHub projects`);
        return projects;
        
    } catch (error) {
        console.error('Failed to fetch GitHub projects:', error);
        return [];
    }
} 