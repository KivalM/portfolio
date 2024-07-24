<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type BlogPost, type BlogSeries } from '../Blog';
	export let post: BlogPost | BlogSeries;
</script>

<div class="stack w-full">
	<a
		class="card w-full bg-base-100 p-6 rounded-xl prose shadow-lg h-full"
		class:bg-base-200={post.pin}
		href={post.url}
	>
		<h2 class="text-2xl font-bold font-kode flex items-center gap-2">
			{#if post.pin}
				<div class="flex flex-row gap-2">
					<Icon icon="mdi:pin" class="w-6 h-6 text-accent" />
				</div>
			{/if}{post.title}
		</h2>

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
		{#if 'posts' in post}
			<p class="my-2 font-kode text-right text-accent">
				{post.posts.length} posts
			</p>
		{/if}
	</a>

	{#if 'posts' in post}
		<div class="card h-full bg-accent prose mb-7 ml-9 rounded-lg"></div>
	{/if}
</div>
