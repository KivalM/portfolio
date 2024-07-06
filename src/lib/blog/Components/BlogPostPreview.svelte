<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
	import { links } from '$lib/data/Link';
	import type { BlogPost } from '../Blog';
	export let post: BlogPost = {} as BlogPost;
</script>

<a class="w-full bg-base-100 p-6 rounded-xl prose shadow-lg" href={post.url}>
	<h2 class="text-2xl font-bold font-kode">{post.title}</h2>
	{#if post.date}
		<p class=" my-2">
			{post.date}
		</p>
	{/if}

	<hr class="border-2 border-primary w-1/5 my-2" />
	<div class="flex flex-row gap-2">
		{#each post.tags as tag}
			<span class="px-2 py-1 rounded-lg">
				{tag}
			</span>
		{/each}
	</div>
	<p class="my-2">
		{#if post.description}
			{post.description?.substring(0, 250)}{post.description?.length > 250 ? '...' : ''}
		{/if}
	</p>
</a>
