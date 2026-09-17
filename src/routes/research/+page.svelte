<script lang="ts">
	import Research from '$lib/blocks/Research.svelte';
	import Navbar from '$lib/components/navigation/navbar.svelte';
</script>

<svelte:head>
	<title>Research | Kival Mahadew</title>
	<meta
		name="description"
		content="Research interests in active inference, multi-agent systems, and reinforcement learning for small language models."
	/>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
	<div class="container mx-auto">
		<Navbar />
	</div>
	<Research />
</main>
