<script lang="ts">
	import type { BlogPost as B } from '$lib/blog/Blog';
	import BlogPost from '$lib/blog/Components/BlogPost.svelte';

	export let data;
	let post: B = data as B;
	$: post = data as B;
</script>

<div class="flex flex-col gap-5 justify-center items-center p-2 lg:p-6">
	<BlogPost {post} />
</div>
