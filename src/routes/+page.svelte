<script lang="ts">
	import About from '$lib/blocks/About.svelte';
	import Blog from '$lib/blocks/Blog.svelte';
	import Hero from '$lib/blocks/Hero.svelte';
	import Projects from '$lib/blocks/Projects.svelte';
	import Timeline from '$lib/blocks/Timeline.svelte';
	import Navbar from '$lib/components/navigation/navbar.svelte';
</script>

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
