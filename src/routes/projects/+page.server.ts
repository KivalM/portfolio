import { fetchGitHubProjects } from '$lib/github/github-projects.js';

export const load = async () => {
    console.log('Loading GitHub projects...');
    
    try {
        // Fetch GitHub projects
        const githubProjects = await fetchGitHubProjects();
        
        // Sort projects by stars descending, then by last updated
        githubProjects.sort((a, b) => {
            const starsA = a.githubData.stars;
            const starsB = b.githubData.stars;
            
            if (starsA !== starsB) {
                return starsB - starsA;
            }
            
            const updatedA = a.githubData.lastUpdated.getTime();
            const updatedB = b.githubData.lastUpdated.getTime();
            
            return updatedB - updatedA;
        });
        
        console.log(`Loaded ${githubProjects.length} GitHub projects`);
        
        // Convert projects to plain objects for serialization
        const serializedProjects = githubProjects.map(project => ({
            title: project.title,
            description: project.description,
            tags: project.tags,
            images: project.images,
            links: project.links.map(link => ({
                name: link.name,
                url: link.url,
                icon: link.icon
            })),
            team: project.team,
            category: project.category,
            githubData: {
                stars: project.githubData.stars,
                language: project.githubData.language,
                lastUpdated: project.githubData.lastUpdated.toISOString(),
                topics: project.githubData.topics,
                repoUrl: project.githubData.repoUrl,
                createdAt: project.githubData.createdAt.toISOString()
            }
        }));

        return {
            projects: serializedProjects
        };
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        
        // Return empty array if GitHub fails
        return {
            projects: []
        };
    }
}; 