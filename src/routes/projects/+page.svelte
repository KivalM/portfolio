<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/projects/Projects';

	// group projects by category
	const groupedProjects = projects.reduce((acc, project) => {
		if (!acc[project.category]) {
			acc[project.category] = [];
		}

		acc[project.category].push(project);

		return acc;
	}, {});

	console.log(groupedProjects);
</script>

<section class="container mx-auto">
	<h1 class="text-6xl font-kode text-center">Projects</h1>
	<hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
	<h3 class="text-3xl font-jp text-center">(・_・;)</h3>

	{#each Object.keys(groupedProjects) as category}
		<h2 class="text-4xl font-kode text-center divider m-8">{category}</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-8">
			{#each groupedProjects[category] as project}
				<ProjectCard {project} />
			{/each}
		</div>
		<!-- divider -->
	{/each}
</section>
