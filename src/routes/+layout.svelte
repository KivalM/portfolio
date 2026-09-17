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
<div
	class="flex min-h-screen flex-col bg-fixed bg-gradient-to-br from-base-100 via-base-200 to-base-100"
>
	<Navbar />
	{@render children?.()}
	<Footer />
</div>
