<script lang="ts">
    import type { BlogPost } from "$lib/blog/posts";
    import BlogSnippet from "$lib/components/BlogSnippet.svelte";

    export let data;
    let { posts } = data as { posts: BlogPost[] };
    console.log(data);
</script>

<h3 class="text-3xl font-sans text-center flex justify-center">ಠ ''ಠ</h3>

<!-- center -->

<div class="flex flex-col gap-5 justify-center items-center p-2 lg:p-6">
    {#each posts as post}
        <BlogSnippet {post} />
    {/each}
</div>
