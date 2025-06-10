<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />
{@render children?.()}
