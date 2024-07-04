<script lang="ts">
	import { projects } from '$lib/projects/Projects';
	import Icon from '@iconify/svelte';
</script>

<section class="container mx-auto p-2 md:p-4" id="projects">
	<h2 class="text-6xl font-kode text-center">Projects</h2>
	<hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
	<h3 class="text-3xl font-sans text-center">(・_・;)</h3>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
		{#each projects.slice(0, 4) as project, i}
			<enhanced:img src={project.images[0]} class="aspect-video rounded-box w-full" />
		{/each}
		<!-- see all card -->
		<button class="btn btn-accent h-full">
			<a href="/projects" class="flex justify-center items-center">
				<span>See All</span>
				<Icon icon="bi:arrow-right" class="w-6 h-6 ml-2" />
			</a>
		</button>
	</div>
</section>
