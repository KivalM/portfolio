<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/projects/Projects';
</script>

<section class="container mx-auto">
	<h1 class="text-6xl font-kode text-center">Projects</h1>
	<hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
	<h3 class="text-3xl font-jp text-center">(・_・;)</h3>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
