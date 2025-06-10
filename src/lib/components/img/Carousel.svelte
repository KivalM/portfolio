<script lang="ts">
	let index = $state(0);
	import { onMount } from 'svelte';
	interface Props {
		images?: string[];
		duration?: number;
	}

	let { images = [], duration = 50200 }: Props = $props();

	const next = () => {
		index = index === images.length - 1 ? 0 : index + 1;
	};

	const prev = () => {
		index = index === 0 ? images.length - 1 : index - 1;
	};

	onMount(() => {
		const interval = setInterval(() => {
			next();
		}, duration);

		return () => clearInterval(interval);
	});
</script>

<div class="carousel w-full">
	<div class="carousel-item relative w-full">
		<enhanced:img src={images[index]} class="w-full aspect-video object-cover" alt="carousel" />
	</div>

	<!-- preload other images -->
	{#each images as image, i}
		<enhanced:img src={image} class="hidden" alt="carousel" />
	{/each}

	{#if images.length > 1}
		<div class="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between">
			<button class="btn btn-circle" onclick={next}>❮</button>
			<button class="btn btn-circle" onclick={prev}>❯</button>
		</div>
	{/if}
</div>
