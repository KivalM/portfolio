<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import '@fontsource-variable/kode-mono';
	import '@fontsource-variable/noto-sans-display';
	import '@fontsource/roboto';
	import '@fontsource-variable/noto-sans-jp';
</script>

<!-- keep footer at bottom -->
<div class="flex flex-col min-h-screen">
	<slot />
	<Footer />
</div>
