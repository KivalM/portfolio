<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import Icon from '@iconify/svelte';

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
		data: {
			projects: SerializedProject[];
		};
	}
	
	let { data }: Props = $props();
	
	// group projects by category
	const groupedProjects = data.projects.reduce(
		(
			acc: {
				[key: string]: SerializedProject[];
			},
			project: SerializedProject
		) => {
			if (!acc[project.category]) {
				acc[project.category] = [];
			}
			acc[project.category].push(project);
			return acc;
		},
		{}
	);

	// Calculate statistics
	const totalStars = data.projects.reduce((sum, project) => sum + project.githubData.stars, 0);
	const languages = new Set(data.projects.map(p => p.githubData.language).filter(l => l !== null));
	const categories = Object.keys(groupedProjects);
</script>

<section class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
	<div class="container mx-auto px-4 py-12">
		<!-- Modern Header -->
		<div class="text-center mb-16">
			<div class="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
				<Icon icon="mdi:rocket-launch" class="w-10 h-10 text-primary" />
			</div>
			<h1 class="text-6xl lg:text-7xl font-kode font-bold text-primary mb-6">Projects</h1>
			<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 mx-auto my-6" />
			<h3 class="text-3xl font-jp text-accent mb-4">(・_・;)</h3>
			<p class="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
				A showcase of my development work by category
			</p>
		</div>

		<!-- Stats Section -->
		<div class="flex justify-center mb-16">
			<div class="bg-gradient-to-br from-base-100 to-base-200 rounded-xl shadow-lg border border-base-300 px-8 py-6">
				<div class="flex flex-wrap items-center justify-center gap-8 text-center">
					<div>
						<div class="text-3xl font-bold text-primary">{data.projects.length}</div>
						<div class="text-sm text-base-content/60">Projects</div>
					</div>
					<div class="w-px h-10 bg-base-300 hidden sm:block"></div>
					<div>
						<div class="text-3xl font-bold text-secondary">{totalStars}</div>
						<div class="text-sm text-base-content/60">GitHub Stars</div>
					</div>
					<div class="w-px h-10 bg-base-300 hidden sm:block"></div>
					<div>
						<div class="text-3xl font-bold text-accent">{languages.size}</div>
						<div class="text-sm text-base-content/60">Languages</div>
					</div>
					<div class="w-px h-10 bg-base-300 hidden sm:block"></div>
					<div>
						<div class="text-3xl font-bold text-warning">{categories.length}</div>
						<div class="text-sm text-base-content/60">Categories</div>
					</div>
					<div class="w-px h-10 bg-base-300 hidden sm:block"></div>
				</div>
			</div>
		</div>

		<!-- Projects by Category -->
		<div class="max-w-7xl mx-auto">
			{#if data.projects.length > 0}
				{#each Object.keys(groupedProjects) as category}
					<!-- Category Header -->
					<div class="mb-12">
						<div class="flex items-center justify-center mb-8">
							<div class="bg-gradient-to-r from-transparent via-base-300 to-transparent h-px flex-1"></div>
							<div class="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl shadow-lg border border-secondary/30 px-6 py-3 mx-4">
								<div class="flex items-center gap-3">
									<div class="bg-secondary/20 w-8 h-8 rounded-full flex items-center justify-center">
										<Icon icon="mdi:folder-multiple" class="w-4 h-4 text-secondary" />
									</div>
									<h2 class="text-2xl font-kode font-bold text-secondary">{category}</h2>
									<div class="bg-secondary/20 rounded-full px-3 py-1">
										<span class="text-sm font-semibold text-secondary">{groupedProjects[category].length}</span>
									</div>
								</div>
							</div>
							<div class="bg-gradient-to-r from-transparent via-base-300 to-transparent h-px flex-1"></div>
						</div>
						
						<!-- Projects Grid -->
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{#each groupedProjects[category] as project}
								<ProjectCard {project} />
							{/each}
						</div>
					</div>
				{/each}
			{:else}
				<!-- Empty State -->
				<div class="text-center py-20">
					<div class="bg-base-200/50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
						<Icon icon="mdi:rocket-launch-outline" class="w-12 h-12 text-base-content/30" />
					</div>
					<h3 class="text-2xl font-bold text-base-content/70 mb-4">No projects found</h3>
					<p class="text-base-content/50">Projects will appear here once they're synced from GitHub!</p>
				</div>
			{/if}
		</div>

		<!-- GitHub Integration Footer -->
		<div class="mt-20 text-center">
			<div class="bg-gradient-to-br from-base-100 to-base-200 rounded-xl shadow-lg border border-base-300 p-8 max-w-2xl mx-auto">
				<div class="flex items-center justify-center gap-3 mb-4">
					<Icon icon="mdi:github" class="w-8 h-8 text-primary" />
					<h3 class="text-xl font-bold text-primary">Powered by GitHub</h3>
				</div>
				<p class="text-base-content/70 mb-4">
					All projects are automatically synced from my GitHub repositories, ensuring you always see the latest work.
				</p>
				<div class="flex items-center justify-center gap-2 text-sm text-base-content/60">
					<Icon icon="mdi:clock-fast" class="w-4 h-4" />
					<span>Last updated: {new Date().toLocaleDateString()}</span>
				</div>
			</div>
		</div>
	</div>
</section>
