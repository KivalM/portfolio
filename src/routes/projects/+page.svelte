<script lang="ts">
    import { projects } from "$lib/models/project";
    import github from "$lib/images/github.svg";
</script>

<div class="flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl font-bold">Projects</h1>
</div>

<div>
    <p class="text-center">
        Here are some of the external projects I've helped with.
    </p>
</div>

<div
    class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 container mx-auto"
>
    <div
        class="flex flex-col gap-4 border-l-2 border-b-2 border-black p-5 m-2 shadow-lg rounded-lg
                    bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100
                    dark:hover:bg-gray-700 transition duration-300 ease-in-out"
    >
        <h1 class="text-2xl font-bold">QuickAI</h1>
        <p>
            QuickAI is a visual data science tool with an extreme focus on
            simplicity and ease of use.
        </p>
        <div class="flex flex-row gap-2">
            <a
                href="https://quickai.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Link
            </a>
        </div>

        <!-- tags -->
        <div class="flex flex-row gap-2">
            <div
                class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg p-1"
            >
                WebAssembly
            </div>
            <div
                class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg p-1"
            >
                Data Science
            </div>
            <div
                class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg p-1"
            >
                Rust
            </div>
        </div>
    </div>
</div>

<!-- projects -->

<div>
    <p class="text-center">
        Here are some of the personal projects I've worked on. I'm always
        working on something new, so check back often!
    </p>
</div>
<div
    class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 container mx-auto"
>
    {#each projects as project}
        <div
            class="flex flex-col gap-4 border-l-2 border-b-2 border-black p-5 m-2 shadow-lg rounded-lg
                    bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100
                    dark:hover:bg-gray-700 transition duration-300 ease-in-out"
        >
            <h1 class="text-2xl font-bold">{project.name}</h1>
            <p>{project.description}</p>
            <div class="flex flex-row gap-4">
                {#if project.github}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={github}
                            alt="github"
                            class="w-6 h-6 dark:invert"
                        />
                    </a>
                {/if}
                {#if project.url}
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link
                    </a>
                {/if}
            </div>
            <!-- tags -->
            <div class="flex flex-row gap-2">
                {#each project.tags as tag}
                    <div
                        class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg p-1"
                    >
                        {tag}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
