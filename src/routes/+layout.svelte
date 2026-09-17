<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import '../app.css';
	import '@fontsource-variable/kode-mono';
	import '@fontsource-variable/noto-sans-display';
	import '@fontsource-variable/noto-sans-jp';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<!-- keep footer at bottom -->
<div class="relative isolate bg-fixed bg-gradient-to-br from-base-100 via-base-200 to-base-100">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
	></div>

	<div class="relative z-10 flex min-h-screen flex-col">
		<Navbar />
		{@render children?.()}
		<Footer />
	</div>
</div>
