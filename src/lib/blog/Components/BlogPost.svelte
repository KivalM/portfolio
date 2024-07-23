<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
	import Icon from '@iconify/svelte';
	import type { BlogPost } from '../Blog';
	import SvelteSeo from 'svelte-seo';
	export let post: BlogPost;
	console.log(post);
</script>

<SvelteSeo
	title={post.title}
	description={post.description}
	canonical={`https://kivalm.com/` + post.url}
	keywords={post.tags.join(', ')}
	openGraph={{
		title: post.title,
		description: post.description,
		url: 'https://kivalm.com/{post.url}',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<div class="w-full rounded-xl prose">
	<h2 class="text-2xl font-bold text-primary font-kode">{post.title}</h2>
	{#if post.date}
		<p class="my-2">
			{post.date}
		</p>
	{/if}
	<div class="flex flex-row gap-2">
		{#each post.tags as tag}
			<span class="text-primary px-2 py-1 rounded-lg">
				{tag}
			</span>
		{/each}
	</div>
	<p class="my-2">
		{#if post.description}
			{post.description}
		{/if}
	</p>

	{#if post.repo}
		<a href={post.repo} target="_blank" rel="noopener noreferrer">
			<Pill name="Repository" icon="mdi:github"></Pill>
		</a>
	{/if}
	<hr class="border-2 border-primary my-4" />

	<svelte:component this={post.content}></svelte:component>

	<!-- back to /blog -->
	<a href="/blog" class="btn btn-secondary gap-2">
		<Icon icon="mdi:arrow-left" class="w-6 h-6" />
		<div>Back to Blog</div></a
	>
</div>
