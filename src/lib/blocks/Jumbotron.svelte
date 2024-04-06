<script lang="ts">
    import Chevron from "$lib/components/Chevron.svelte";
    import LinkBox from "$lib/components/LinkBox.svelte";
    import type { Link } from "$lib/data/links";

    function scrollIntoView() {
        const nav = document.getElementById("about")!;
        nav.scrollIntoView({ behavior: "smooth" });
    }

    export let links: Link[] = [];
</script>

<section class="h-screen flex items-center justify-center font-sans" id="hero">
    <canvas class="h-full w-full absolute z-1" id="canvas"></canvas>

    <div
        class="flex flex-col items-center justify-center text-center relative z-10 gap-5"
    >
        <div class="text-white text-4xl">¯\_(ツ)_/¯</div>
        <h1 class="text-4xl text-white" id="greeter">
            Hello. I'm
            <span class="text-blue-500 font-kode block md:inline"
                >Kival Mahadew
            </span>
        </h1>

        <div class="flex flex-col md:flex-row gap-4">
            {#each links as link}
                <LinkBox {link} />
            {/each}
        </div>
    </div>

    <div
        class="absolute bottom-3 w-full flex flex-col items-center gap-2 justify-center"
    >
        <span class="text-neutral-300 font-kode">Scroll for more</span>
        <button class="animate-bounce" on:click={scrollIntoView}>
            <Chevron direction="down" color="white" size="8" />
        </button>
    </div>
</section>
