<script lang="ts">
    import { onMount } from "svelte";

    import github from "$lib/images/github.svg";
    import linkedin from "$lib/images/linkedin.svg";

    let bgElement: HTMLElement;

    onMount(() => {
        // set height to available height - navbar height
        let navbarHeight = document.querySelector("nav")!.clientHeight;
        bgElement.style.height = `calc(100vh - ${navbarHeight}px)`;
    });
</script>

<div
    class="w-full h-full landing-bg bg-cover bg-center bg-no-repeat comfortaa"
    bind:this={bgElement}
>
    <div
        class="flex flex-col items-center justify-center h-full bg-[rgba(0,0,0,0.55)] dark:bg-[rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out"
    >
        <h1 class="text-5xl font-bold text-white">Kival Mahadew</h1>
        <h2 class="text-2xl font-bold text-white">Software Engineer</h2>
        <h2 class="text-2xl font-bold text-white">Computer Science at UKZN</h2>
        <div class="p-4 flex flex-row gap-6">
            <!-- github -->
            <a href="https://www.github.com/kival-m" target="_blank">
                <img
                    src={github}
                    alt="github"
                    class="w-10 h-10 invert hover:scale-110 transition-all duration-300 ease-in-out"
                />
            </a>

            <!-- linkedin -->
            <a href="https://www.linkedin.com/in/kival-m/" target="_blank">
                <img
                    src={linkedin}
                    alt="linkedin"
                    class="w-10 h-10 invert hover:scale-110 transition-all duration-300 ease-in-out"
                />
            </a>
        </div>
    </div>
</div>

<!-- image attribution -->
<!-- Photo by Karsten Würth on Unsplash -->

<style>
    .landing-bg {
        background-image: url("https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=karsten-wurth-7BjhtdogU3A-unsplash.jpg&w=2400");
    }
</style>
