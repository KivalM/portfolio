<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import Langguin from '$lib/blocks/Langguin.svelte';
	import Projects from '$lib/blocks/Projects.svelte';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Kival Mahadew"
	description="Kival Mahadew — ML Engineer & Researcher"
	canonical="https://kivalm.com"
	keywords="kival mahadew, kivalm, machine learning, active inference"
	openGraph={{
		title: 'Kival Mahadew',
		description: "ML Engineer & Researcher",
		url: 'https://kivalm.com/',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<main class="overflow-hidden">
	<div class="h-screen flex flex-col relative">
		<div class="container mx-auto">
			<Navbar />
		</div>
		<Hero />
	</div>

	<!-- <Projects /> -->
	<Langguin />
</main>
