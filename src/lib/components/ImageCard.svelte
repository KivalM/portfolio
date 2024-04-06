<script lang="ts">
    import type { Link } from "$lib/data/links";
    import Carousel from "./Carousel.svelte";
    import LinkBox from "./LinkBox.svelte";

    export let images: string[];
    export let title: string;
    export let description: string;
    export let links: Link[];
    export let reverse: boolean = false;
    export let tags: string[] = [];
    export let team: string[] = [];

    const new_images: {
        src: string;
        alt: string;
        title: string;
    }[] = [];
    images.forEach((img) => {
        new_images.push({
            src: img,
            alt: title,
            title: title,
        });
    });
</script>

<div
    class="bg-zinc-800 shadow-lg rounded-xl grid-rows-1 grid grid-flow-row xl:grid-flow-col
    {reverse ? 'md:flex-row-reverse' : ''} 
    {images.length > 0 ? 'xl:grid-cols-2' : 'xl:grid-cols-1'}
    
    "
>
    {#if images.length > 0}
        <div>
            <Carousel images={new_images}></Carousel>
        </div>
    {/if}
    <div class="p-6 flex flex-col justify-between">
        <div>
            <h2 class="text-2xl font-bold text-white font-kode">{title}</h2>
            <hr class="border-2 border-blue-500 w-1/5 my-2" />
            <div class="flex flex-row gap-2">
                {#each tags as tag}
                    <span class="text-zinc-300 px-2 py-1">
                        {tag}
                    </span>
                {/each}
            </div>

            <p class="text-gray-200 my-2">{description}</p>
        </div>
        <div>
            {#if team.length > 0}
                <hr class="border-2 border-blue-500 w-1/5 my-2" />

                <div class="flex flex-row gap-2 flex-wrap">
                    <span class="text-zinc-400 px-2 py-1 rounded-lg">Team:</span
                    >
                    {#each team as member}
                        <span class="text-zinc-400 px-2 py-1 rounded-lg">
                            {member}
                        </span>
                    {/each}
                </div>
            {/if}
            <div
                class="flex flex-row gap-4 justify-end lg:justify-normal {!reverse
                    ? 'lg:justify-end'
                    : ''}"
            >
                {#each links as link}
                    <LinkBox {link} />
                {/each}
            </div>
        </div>
    </div>
</div>
