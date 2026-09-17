<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import Langguin from '$lib/blocks/Langguin.svelte';
	import Research from '$lib/blocks/Research.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Kival Mahadew"
	description="Kival Mahadew — ML Engineer & Researcher"
	canonical="https://kivalm.com"
	keywords="kival mahadew, kivalm, machine learning, active inference"
	openGraph={{
		title: 'Kival Mahadew',
		description: 'ML Engineer & Researcher',
		url: 'https://kivalm.com/',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<main class="overflow-hidden">
	<div class="relative flex min-h-[calc(100svh-4rem)] flex-col">
		<Hero />
	</div>

	<Research />
	<Langguin />
</main>
