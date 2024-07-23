<script>
	import Pill from '$lib/components/button/Pill.svelte';
	import Navbar from '$lib/components/navigation/navbar.svelte';
</script>

<Navbar />
<div class="container mx-auto flex flex-col flex-grow items-center justify-center gap-4">
	<h1 class="text-4xl font-bold text-base-content font-kode">404</h1>
	<p>Page not found</p>
	<a href="/">
		<Pill name="Go Home" icon="mdi:home" />
	</a>
</div>
