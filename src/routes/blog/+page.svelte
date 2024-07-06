<script lang="ts">
	import type { BlogPost } from '$lib/blog/Blog';
	import BlogPostPreview from '$lib/blog/Components/BlogPostPreview.svelte';

	export let data;
	let { posts } = data as { posts: BlogPost[] };
</script>

<section class="container mx-auto">
	<h2 class="text-6xl font-kode text-center">Blog</h2>
	<hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
	<h3 class="text-3xl font-sans text-center">ಠ ''ಠ</h3>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3"></div>

	<div class="flex flex-col gap-5 justify-center items-center p-2 lg:p-6">
		{#each posts as post}
			<BlogPostPreview {post} />
		{/each}
	</div>
</section>
