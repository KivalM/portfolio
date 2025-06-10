<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';

	interface SerializedProject {
		title: string;
		description: string;
		tags: string[];
		images: string[];
		links: Array<{
			name: string;
			url: string;
			icon: string;
		}>;
		team: string[];
		category: string;
		githubData: {
			stars: number;
			language: string | null;
			lastUpdated: string;
			topics: string[];
			repoUrl: string;
			createdAt: string;
		};
	}

	interface Props {
		project: SerializedProject;
	}

	let { project }: Props = $props();
</script>

<div class="card bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border border-base-300 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
	<figure class="relative overflow-hidden">
		{#if project.images.length > 0}
			<!-- All projects now have image URLs from GitHub -->
			<div class="carousel w-full h-48 relative">
				{#each project.images as image, i}
					<div id="slide{i}" class="carousel-item w-full">
						<img src={image} class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" alt="Project preview" />
					</div>
				{/each}
				<!-- Subtle gradient overlay for better text readability -->
				<div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
			</div>
		{:else}
			<!-- Fallback for projects without images -->
			<div class="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
				<div class="text-6xl opacity-20">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
				</div>
			</div>
		{/if}
	</figure>
	
	<div class="card-body bg-gradient-to-b from-base-100 to-base-50">
		<div class="flex items-start justify-between gap-3">
			<h2 class="card-title text-primary font-bold text-lg leading-tight flex-1">{project.title}</h2>
			<div class="flex items-center gap-2 bg-base-200/80 backdrop-blur-sm rounded-full px-3 py-1 border border-base-300">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neutral" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
				<span class="text-xs font-medium text-neutral">GitHub</span>
				{#if project.githubData.stars > 0}
					<div class="flex items-center gap-1 bg-warning/10 text-warning px-2 py-0.5 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
						</svg>
						<span class="text-xs font-semibold">{project.githubData.stars}</span>
					</div>
				{/if}
			</div>
		</div>
		
		<div class="flex items-center gap-2 my-2">
			<div class="badge badge-primary badge-lg font-semibold shadow-md">{project.category}</div>
			{#if project.githubData.language}
				<div class="badge badge-secondary badge-lg font-medium shadow-sm">{project.githubData.language}</div>
			{/if}
		</div>
		
		<!-- tags -->
		<div class="flex flex-wrap gap-1.5 my-3">
			{#each project.tags.slice(0, 6) as tag}
				<div class="badge badge-outline badge-sm hover:badge-accent hover:text-accent-content transition-colors duration-200 cursor-default font-medium">{tag}</div>
			{/each}
		</div>
		
		<p class="text-sm text-base-content/80 leading-relaxed mb-3">{project.description}</p>
		
		<div class="flex items-center gap-2 text-xs text-base-content/60 bg-base-200/50 rounded-lg px-3 py-2 border border-base-300/50">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Last updated: {new Date(project.githubData.lastUpdated).toLocaleDateString()}</span>
		</div>
		
		<div class="card-actions justify-end mt-4 gap-2">
			{#each project.links as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform duration-200">
					<Pill name={link.name} icon={link.icon} />
				</a>
			{/each}
		</div>
	</div>
</div>
