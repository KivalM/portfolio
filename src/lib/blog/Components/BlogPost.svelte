<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
	import Icon from '@iconify/svelte';
	import type { BlogPost, BlogSeries } from '../Blog';
	import SvelteSeo from 'svelte-seo';
	import BlogPostPreview from './BlogPostPreview.svelte';
	interface Props {
		post: BlogPost | BlogSeries;
	}

	let { post }: Props = $props();
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

<div class="container mx-auto rounded-xl md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border border-base-300 p-8">
	<div class="mb-6">
		<h2 class="text-4xl font-bold text-primary font-kode mb-4 leading-tight">{post.title}</h2>

		{#if post.date}
			<div class="flex items-center gap-2 text-sm text-base-content/60 bg-base-200/50 rounded-lg px-4 py-2 border border-base-300/50 mb-4 w-fit ml-auto">
				<Icon icon="mdi:calendar" class="w-4 h-4" />
				<span class="font-kode">{post.date}</span>
			</div>
		{/if}

		<div class="flex flex-wrap gap-2 mb-6">
			{#each post.tags as tag}
				<span class="badge badge-primary badge-lg font-medium shadow-sm">
					{tag}
				</span>
			{/each}
		</div>

		{#if post.description}
			<div class="bg-base-200/30 rounded-lg p-4 border-l-4 border-primary mb-6">
				<p class="text-base-content/80 leading-relaxed">
					{post.description}
				</p>
			</div>
		{/if}

		{#if post.repo}
			<div class="mb-6">
				<a href={post.repo} target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform duration-200">
					<Pill name="Repository" icon="mdi:github"></Pill>
				</a>
			</div>
		{/if}
	</div>

	<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent my-8" />

	{#if 'posts' in post}
		<div class="bg-accent/10 rounded-lg p-4 border border-accent/20 mb-6">
			<div class="flex items-center gap-2 text-accent">
				<Icon icon="mdi:book-multiple" class="w-5 h-5" />
				<p class="font-kode font-semibold">
					{post.posts.length} posts in this series
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 mt-6">
			{#each Object.values(post.posts) as subpost}
				<BlogPostPreview post={subpost} />
			{/each}
		</div>
	{:else}
		<div class="prose prose-lg max-w-none bg-base-50/50 rounded-xl p-6 border border-base-300/30">
			<post.content></post.content>
		</div>
	{/if}
</div>

<div class="container mx-auto md:max-w-xl lg:max-w-2xl mt-8">
	{#if !('posts' in post)}
		{#if post.next || post.previous}
			<div class="bg-gradient-to-r from-base-100 to-base-200 rounded-xl p-6 border border-base-300 shadow-xl mb-6">
				<div class="flex flex-row gap-4 justify-between">
					{#if post.previous}
						<a href={post.previous} class="btn btn-secondary btn-lg gap-2 hover:scale-105 transition-transform duration-200">
							<Icon icon="mdi:arrow-left" class="w-6 h-6" />
							<div>Previous</div>
						</a>
					{:else}
						<div></div>
					{/if}
					
					{#if post.next}
						<a href={post.next} class="btn btn-secondary btn-lg gap-2 hover:scale-105 transition-transform duration-200">
							<div>Next</div>
							<Icon icon="mdi:arrow-right" class="w-6 h-6" />
						</a>
					{:else}
						<div></div>
					{/if}
				</div>
			</div>
		{/if}
	{/if}
	
	<div class="text-center">
		<a href="/blog" class="btn btn-primary btn-lg gap-3 hover:scale-105 transition-transform duration-200 shadow-lg">
			<Icon icon="mdi:arrow-left" class="w-6 h-6" />
			<div>Back to Blog</div>
		</a>
	</div>
</div>
