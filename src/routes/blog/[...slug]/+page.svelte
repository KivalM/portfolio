<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { BlogPost as B } from '$lib/blog/Blog';
	import BlogPost from '$lib/blog/Components/BlogPost.svelte';

	let { data } = $props();
	let post: B = $state(data as B);
	run(() => {
		post = data as B;
	});
</script>

<div class="flex flex-col gap-5 justify-center items-center p-2 lg:p-6">
	<BlogPost {post} />
</div>
