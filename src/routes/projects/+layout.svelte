<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import SvelteSeo from 'svelte-seo';
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
<slot></slot>
