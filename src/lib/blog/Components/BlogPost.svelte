<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
	import Icon from '@iconify/svelte';
	import type { BlogPost, BlogSeries } from '../Blog';
	import SvelteSeo from 'svelte-seo';
	import BlogPostPreview from './BlogPostPreview.svelte';
	export let post: BlogPost | BlogSeries;
</script>

<SvelteSeo
	title={post.title}
	description={post.description}
	canonical={`https://kivalm.com` + post.url}
	keywords={post.tags.join(', ')}
	openGraph={{
		title: post.title,
		description: post.description,
		url: 'https://kivalm.com{post.url}',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<div class="container mx-auto rounded-xl md:max-w-xl lg:max-w-2xl">
	<h2 class="text-2xl font-bold text-primary font-kode">{post.title}</h2>

	{#if post.date}
		<p class="my-2 font-kode text-right">
			{post.date}
		</p>
	{/if}

	<div class="flex flex-row gap-2">
		{#each post.tags as tag}
			<span class="text-secondary px-2 py-1 rounded-lg">
				{tag}
			</span>
		{/each}
	</div>

	{#if post.description}
		<p class="my-2">
			{post.description}
		</p>
	{/if}

	{#if post.repo}
		<a href={post.repo} target="_blank" rel="noopener noreferrer">
			<Pill name="Repository" icon="mdi:github"></Pill>
		</a>
	{/if}

	<hr class="border-2 border-primary my-4" />

	{#if 'posts' in post}
		<p class="my-2 font-kode text-right text-accent">
			{post.posts.length} posts
		</p>

		<div class="grid grid-cols-1 gap-4 mt-3">
			{#each Object.values(post.posts) as subpost}
				<BlogPostPreview post={subpost} />
			{/each}
		</div>
	{:else}
		<div class="prose rounded-xl md:max-w-xl lg:max-w-2xl">
			<svelte:component this={post.content}></svelte:component>
		</div>
	{/if}

	<!-- back to /blog -->
</div>
<div class="container mx-auto md:max-w-xl lg:max-w-2xl">
	{#if !('posts' in post)}
		{#if post.next || post.previous}
			<div class="flex flex-row gap-2 justify-between my-4">
				{#if post.previous}
					<a href={post.previous} class="btn btn-secondary">
						<Icon icon="mdi:arrow-left" class="w-6 h-6" />
						<div>Previous</div>
					</a>
				{/if}
				<div></div>
				{#if post.next}
					<a href={post.next} class="btn btn-secondary">
						<div>Next</div>
						<Icon icon="mdi:arrow-right" class="w-6 h-6" />
					</a>
				{/if}
			</div>
		{/if}
	{/if}
	<a href="/blog" class="btn btn-secondary gap-2">
		<Icon icon="mdi:arrow-left" class="w-6 h-6" />
		<div>Back to Blog</div>
	</a>
</div>
