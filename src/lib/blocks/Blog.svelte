<script lang="ts">
    import BlogSnippet from "$lib/components/BlogSnippet.svelte";
    import Button from "$lib/components/Button.svelte";
    import Chevron from "$lib/components/Chevron.svelte";
    import { type BlogPost } from "$lib/blog/posts";
    export let blog: BlogPost[] = [];
</script>

<section class="container mx-auto" id="blog">
    <h2 class="text-6xl font-kode text-center">Blog</h2>
    <hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
    <h3 class="text-3xl font-sans text-center flex justify-center">ಠ ''ಠ</h3>
    <div class="flex flex-col gap-5 justify-center items-center p-2 lg:p-6">
        {#each blog as post}
            <BlogSnippet {post} />
        {/each}
    </div>

    <Button href="/blog">See More Posts</Button>
</section>
