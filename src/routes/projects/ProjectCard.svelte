<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
	import Carousel from '$lib/components/img/Carousel.svelte';
	import type { Project } from '$lib/projects/Projects';

	export let project: Project;
</script>

<div class="card card-compact bg-base-200 shadow-xl">
	<figure>
		{#if project.images.length > 0}
			<Carousel images={project.images} />
		{/if}
	</figure>
	<div class="card-body">
		<h2 class="card-title">{project.title}</h2>
		<div class="badge badge-primary">{project.category}</div>
		<!-- tags -->
		<div class="flex flex-wrap gap-1">
			{#each project.tags as tag}
				<div class="badge badge-primary">{tag}</div>
			{/each}
		</div>
		<p>{project.description}</p>
		<div class="card-actions justify-end">
			{#each project.links as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer">
					<Pill name={link.name} icon={link.icon} />
				</a>
			{/each}
		</div>
	</div>
</div>
