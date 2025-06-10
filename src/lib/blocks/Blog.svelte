<script lang="ts">
	// posts is map
	import { posts } from '$lib/blog/Blog';
	import BlogPostPreview from '$lib/blog/Components/BlogPostPreview.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class="container mx-auto p-2 md:p-4" id="blog">
	<div class="text-center mb-12">
		<h2 class="text-6xl font-kode font-bold text-primary mb-6">Blog</h2>
		<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 mx-auto my-6" />
		<h3 class="text-3xl text-center font-jp text-accent">ಠ ''ಠ</h3>
	</div>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
		{#each Object.values(posts) as post}
			<BlogPostPreview {post} />
		{/each}

		<!-- Enhanced "See All" card -->
		<div class="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl shadow-2xl border border-secondary/30 hover:shadow-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
			<a href="/blog" class="flex flex-col justify-center items-center h-full p-8 text-center group">
				<div class="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
					<Icon icon="mdi:book-multiple" class="w-8 h-8 text-secondary" />
				</div>
				<h3 class="text-xl font-bold text-secondary mb-2">Explore All Posts</h3>
				<p class="text-base-content/70 text-sm mb-4">Discover more insights and articles</p>
				<div class="flex items-center gap-2 text-secondary font-medium">
					<span>See All</span>
					<Icon icon="bi:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
				</div>
			</a>
		</div>
	</div>
</section>
