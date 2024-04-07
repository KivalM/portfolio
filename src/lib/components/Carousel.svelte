<script lang="ts">
    export let images: { src: string; alt: string; title: string }[] = [];
    export let duration: number = 5000;

    import Img from "@zerodevx/svelte-img";
    import Chevron from "./Chevron.svelte";
    import { onMount } from "svelte";

    let carouselImages = images.map((img) => {
        return {
            src: img.src,
            alt: img.alt,
            title: img.title,
            index: 0,
        };
    });

    onMount(() => {
        const interval = setInterval(() => {
            carouselImages = carouselImages.map((img) => {
                return {
                    ...img,
                    index:
                        img.index === carouselImages.length - 1
                            ? 0
                            : img.index + 1,
                };
            });
        }, duration);

        return () => clearInterval(interval);
    });
</script>

<div class="h-full w-full relative">
    {#each carouselImages as image, i}
        {#if image.index === i}
            <Img
                src={image.src}
                class=" h-full w-full object-cover object-center"
                alt={image.alt}
                title={image.title}
            />
        {/if}
    {/each}

    {#if images.length > 1}
        <div class="absolute left-0 top-0 h-full p-2 z-50 min-w-6">
            <button
                aria-label="previous image"
                class="h-full"
                on:click={() => {
                    carouselImages = carouselImages.map((img) => {
                        return {
                            ...img,
                            index:
                                img.index === 0
                                    ? carouselImages.length - 1
                                    : img.index - 1,
                        };
                    });
                }}
            >
                <Chevron direction="left" />
            </button>
        </div>
        <div class="absolute right-0 h-full top-0 p-2 z-50 min-w-6">
            <button
                aria-label="next image"
                class="h-full"
                on:click={() => {
                    carouselImages = carouselImages.map((img) => {
                        return {
                            ...img,
                            index:
                                img.index === carouselImages.length - 1
                                    ? 0
                                    : img.index + 1,
                        };
                    });
                }}
            >
                <Chevron direction="right" />
            </button>
        </div>
        <div
            class="absolute bottom-0 w-full flex justify-center gap-2 p-2 z-50"
        >
            {#each carouselImages as image, i}
                <button
                    aria-label="carousel indicator"
                    class="w-2 h-2 rounded-full bg-white"
                    class:opacity-50={image.index !== i}
                    on:click={() => {
                        carouselImages = carouselImages.map((img) => {
                            return {
                                ...img,
                                index: i,
                            };
                        });
                    }}
                ></button>
            {/each}
        </div>
    {/if}
</div>
