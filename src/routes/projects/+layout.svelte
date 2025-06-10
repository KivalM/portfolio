<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import SvelteSeo from 'svelte-seo';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<SvelteSeo
	title="Projects"
	description="A collection of projects I've worked on."
	canonical="https://kivalm.com/projects"
	keywords="projects, portfolio, work, kival mahadew"
	openGraph={{
		title: 'Projects',
		description: "A collection of projects I've worked on.",
		url: 'https://kivalm.com/projects',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<Navbar />
{@render children?.()}
