<script lang="ts">
    import Chevron from "$lib/components/Chevron.svelte";
    import ImageCard from "$lib/components/ImageCard.svelte";
    import { projects } from "$lib/data/projects";
</script>

<section class="container mx-auto p-4" id="projects">
    <h2 class="text-6xl font-kode text-center">Projects</h2>
    <hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
    <h3 class="text-3xl font-sans text-center">(・_・;)</h3>

    <div class="flex flex-col gap-5 justify-center items-center">
        {#each projects as project, i}
            <div class="p-4 w-full md:w-3/4">
                <ImageCard
                    images={project.images}
                    title={project.title}
                    description={project.description}
                    links={project.links}
                    reverse={i % 2 === 0}
                    tags={project.tags}
                />
            </div>
        {/each}
    </div>

    <!-- see more -->
    <div class="flex justify-center font-kode">
        <a class=" text-white p-3 animate-pulse" href="/projects">
            See More <Chevron direction="right" color="white" />
            <hr class="border border-blue-500 mt-1" />
        </a>
    </div>
</section>
