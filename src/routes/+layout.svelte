<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import '@fontsource-variable/kode-mono';
	import '@fontsource-variable/noto-sans-display';
	import '@fontsource/roboto';
	import '@fontsource-variable/noto-sans-jp';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<!-- keep footer at bottom -->
<div class="flex flex-col min-h-screen">
	<slot />
	<Footer />
</div>
