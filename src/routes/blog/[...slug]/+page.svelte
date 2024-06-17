<script lang="ts">
    import type { BlogPost } from "$lib/blog/posts";
    import Post from "$lib/components/Post.svelte";

    export let data;
    let post: BlogPost = data as BlogPost;
</script>

<div class="flex flex-col gap-5 justify-center items-center p-2 lg:p-6">
    <Post {post} />
</div>
