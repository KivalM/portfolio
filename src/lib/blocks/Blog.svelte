<script lang="ts">
    import BlogSnippet from "$lib/components/BlogSnippet.svelte";
    import Chevron from "$lib/components/Chevron.svelte";
    import { blog } from "$lib/data/blogs";
</script>

<section class="container mx-auto" id="blog">
    <h2 class="text-6xl font-kode text-center">Blog</h2>
    <hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
    <h3 class="text-3xl font-sans text-center">ಠ ''ಠ</h3>

    <div class="flex flex-col gap-5 justify-center items-center p-6flowb">
        {#each blog as blog}
            <BlogSnippet {blog} />
        {/each}
    </div>

    <!-- see more -->
    <div class="flex justify-center font-kode">
        <a
            class="border-blue-600 border-b-2 text-white p-3 animate-pulse"
            href="/projects"
        >
            See More <Chevron direction="right" color="white" />
        </a>
    </div>
</section>
