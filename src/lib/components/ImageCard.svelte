<script lang="ts">
    import type { Link } from "$lib/data/links";
    import { Carousel } from "flowbite-svelte";
    import LinkBox from "./LinkBox.svelte";
    import Controls from "flowbite-svelte/Controls.svelte";
    import Slide from "flowbite-svelte/Slide.svelte";

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
    class="bg-zinc-800 shadow-lg rounded-xl grid grid-flow-row md:grid-flow-col md:grid-cols-2 {reverse
        ? 'lg:flex-row-reverse'
        : ''} {images.length > 0 ? 'md:grid-cols-2' : 'md:grid-cols-1'}"
>
    {#if images.length > 0}
        <div>
            <Carousel
                class=""
                images={new_images}
                duration={10000}
                slideDuration={1000}
                let:Controls
                let:Indicators
                imgClass="object-cover object-center"
            >
                <div slot="slide" let:Slide let:index class="">
                    <Slide image={new_images[index]} class="h-full" />
                </div>
                {#if new_images.length > 1}
                    <Controls />
                    <Indicators />
                {/if}
            </Carousel>
        </div>
    {/if}
    <div class="p-6 flex flex-col justify-between">
        <div>
            <h2 class="text-2xl font-bold text-white font-kode">{title}</h2>
            <hr class="border-2 border-blue-500 w-1/5 my-2" />
            <div class="flex flex-row gap-2">
                {#each tags as tag}
                    <span class="text-zinc-500 px-2 py-1 rounded-lg">
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
