<script lang="ts">
	import About from '$lib/blocks/About.svelte';
	import Blog from '$lib/blocks/Blog.svelte';
	import Hero from '$lib/blocks/Hero.svelte';
	import Projects from '$lib/blocks/Projects.svelte';
	import Timeline from '$lib/blocks/Timeline.svelte';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Kival Mahadew"
	description="Kival Mahadew's personal website."
	canonical="https://kivalm.com"
	keywords="kival mahadew, kivalm, kival, mahadew, personal website"
	openGraph={{
		title: 'Kival Mahadew',
		description: "Kival Mahadew's personal website.",
		url: 'https://kivalm.com/',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<main class="overflow-hidden">
	<div class="h-screen flex flex-col container mx-auto">
		<Navbar />
		<Hero />
	</div>

	<About />
	<Timeline />
	<Projects />
	<Blog />
</main>
