<script lang="ts">
	import type { BlogPost } from '../Blog';
	export let post: BlogPost;
</script>

<div class="w-full rounded-xl prose prose-invert">
	<h2 class="text-2xl font-bold text-white font-kode">{post.title}</h2>
	<div class="flex flex-row gap-2">
		{#each post.tags as tag}
			<span class="text-zinc-300 px-2 py-1 rounded-lg">
				{tag}
			</span>
		{/each}
	</div>
	<p class="text-gray-200 my-2">
		{#if post.description}
			{post.description}
		{/if}
	</p>
	<hr class="border-2 border-blue-500 my-2" />

	<svelte:component this={post.content}></svelte:component>
</div>
