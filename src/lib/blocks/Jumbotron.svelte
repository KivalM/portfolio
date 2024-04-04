<script lang="ts">
    import { onMount } from "svelte";
    import Chevron from "$lib/components/Chevron.svelte";
    import { links } from "$lib/data/links";
    import LinkBox from "$lib/components/LinkBox.svelte";

    function scrollIntoView() {
        const nav = document.getElementById("about")!;
        nav.scrollIntoView({ behavior: "smooth" });
    }

    onMount(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    });
</script>

<div class="h-screen flex items-center justify-center font-sans">
    <canvas class="h-full w-full absolute z-1" id="canvas"></canvas>

    <div
        class="flex flex-col items-center justify-center text-center relative z-10 gap-5"
    >
        <div class="text-white text-4xl">¯\_(ツ)_/¯</div>
        <h1 class="text-4xl text-white">
            Hello. I'm
            <span class="text-blue-500 font-kode">Kival Mahadew </span>
        </h1>

        <div class="flex flex-row gap-4">
            {#each links as link}
                <LinkBox {link} />
            {/each}
        </div>
    </div>
    <button class="absolute bottom-5 animate-bounce" on:click={scrollIntoView}>
        <Chevron direction="down" color="white" />
    </button>
</div>
