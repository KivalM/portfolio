<script lang="ts">
    import type { BlogPost } from "$lib/blog/posts";
    export let post: BlogPost = {} as BlogPost;
</script>

<a class="w-full bg-zinc-800 p-6 rounded-xl prose" href={post.url}>
    <h2 class="text-2xl font-bold text-white font-kode">{post.title}</h2>
    <hr class="border-2 border-blue-500 w-1/5 my-2" />
    <div class="flex flex-row gap-2">
        <!-- {#each post.tags as tag}
            <span class="text-zinc-300 px-2 py-1 rounded-lg">
                {tag}
            </span>
        {/each} -->
    </div>
    <p class="text-gray-200 my-2">
        {#if post.description}
            {post.description?.substring(0, 250)}{post.description?.length > 250
                ? "..."
                : ""}
        {/if}
    </p>
    <div class="flex flex-row gap-4">
        <!-- {#each blog.links as link}
            <a
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
                class="text-xl flex flex-row items-center justify-center bg-blue-600 rounded shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
                <div class="p-2 flex items-center justify-center">
                    <i class={link.icon}></i>
                </div>
                <div class="bg-white p-2 rounded-r text-black">
                    {link.name}
                </div>
            </a>
        {/each} -->
    </div>
</a>
