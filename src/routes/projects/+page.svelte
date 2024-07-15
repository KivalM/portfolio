<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import SvelteSeo from 'svelte-seo';
	import { projects } from '$lib/projects/Projects';
</script>

<SvelteSeo
	title="Projects"
	description="A collection of projects I've worked on."
	canonical="https://www.kivalm.com/projects"
	keywords="projects, portfolio, work, kival mahadew"
	openGraph={{
		title: 'Projects',
		description: "A collection of projects I've worked on.",
		url: 'https://www.kivalm.com/projects',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<Navbar />
<section class="container mx-auto">
	<h2 class="text-6xl font-kode text-center">Projects</h2>
	<hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
	<h3 class="text-3xl font-sans text-center">(・_・;)</h3>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
