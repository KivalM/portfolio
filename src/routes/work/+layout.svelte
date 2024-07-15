<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Work - Kival Mahadew"
	description="Work I've done and my specializations."
	canonical="https://www.kivalm.com/projects"
	keywords="projects, portfolio, work, kival mahadew"
	openGraph={{
		title: 'Work - Kival Mahadew',
		description: "A collection of projects I've worked on.",
		url: 'https://www.kivalm.com/projects',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<Navbar />
<div class="flex-grow container mx-auto">
	<slot></slot>
</div>
