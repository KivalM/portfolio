<script lang="ts">
	import type { BlogPost } from '$lib/blog/Blog';
	import BlogPostPreview from '$lib/blog/Components/BlogPostPreview.svelte';
	import SvelteSeo from 'svelte-seo';
	import Icon from '@iconify/svelte';

	let { data } = $props();
</script>

<SvelteSeo
	title="Blog - Kival Mahadew"
	description="Kival Mahadew's personal blog."
	canonical="https://kivalm.com/blog"
	keywords="kival mahadew, kivalm, kival, mahadew, personal website, blog"
	openGraph={{
		title: 'Blog - Kival Mahadew',
		description: "Kival Mahadew's personal blog.",
		url: 'https://kivalm.com/blog',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<section class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
	<div class="container mx-auto px-4 py-12">
		<!-- Modern Header -->
		<div class="text-center mb-16">
			<div class="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
				<Icon icon="mdi:book-multiple" class="w-10 h-10 text-primary" />
			</div>
			<h1 class="text-6xl lg:text-7xl font-kode font-bold text-primary mb-6">Blog</h1>
			<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 mx-auto my-6" />
			<h3 class="text-3xl font-jp text-accent mb-4">ಠ ''ಠ</h3>
			<p class="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
				Insights, thoughts, and discoveries from my journey in software development, AI, and technology
			</p>
		</div>

		<!-- Stats Section -->
		<div class="flex justify-center mb-12">
			<div class="bg-gradient-to-br from-base-100 to-base-200 rounded-xl shadow-lg border border-base-300 px-6 py-4">
				<div class="flex items-center gap-6 text-center">
					<div>
						<div class="text-2xl font-bold text-primary">{Object.keys(data.posts).length}</div>
						<div class="text-sm text-base-content/60">Articles</div>
					</div>
					<div class="w-px h-8 bg-base-300"></div>
					<div>
						<div class="text-2xl font-bold text-secondary">Latest</div>
						<div class="text-sm text-base-content/60">Updated</div>
					</div>
					<div class="w-px h-8 bg-base-300"></div>
					<div class="flex items-center gap-2">
						<div class="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
						<div class="text-sm text-base-content/60">Live</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Blog Posts Grid -->
		<div class="max-w-6xl mx-auto">
			{#if Object.keys(data.posts).length > 0}
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{#each Object.values(data.posts) as post}
						<BlogPostPreview {post} />
					{/each}
				</div>
			{:else}
				<div class="text-center py-20">
					<div class="bg-base-200/50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
						<Icon icon="mdi:pencil-plus" class="w-12 h-12 text-base-content/30" />
					</div>
					<h3 class="text-2xl font-bold text-base-content/70 mb-4">No posts yet</h3>
					<p class="text-base-content/50">Check back soon for new content!</p>
				</div>
			{/if}
		</div>
	</div>
</section>
