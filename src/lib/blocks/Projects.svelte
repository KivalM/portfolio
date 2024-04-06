<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Chevron from "$lib/components/Chevron.svelte";
    import ImageCard from "$lib/components/ImageCard.svelte";
    import { type Project } from "$lib/data/projects";

    export let projects: Project[] = [];
</script>

<section class="container mx-auto p-2 py-4 md:p-4" id="projects">
    <h2 class="text-6xl font-kode text-center">Projects</h2>
    <hr class="border-2 border-blue-500 w-1/5 mx-auto my-5" />
    <h3 class="text-3xl font-sans text-center">(・_・;)</h3>
    <Button href="/projects">
        <span class="text-sm">View All Projects</span>
    </Button>
    <div class="flex flex-col gap-5 justify-center items-center">
        {#each projects as project, i}
            <div class="py-4 lg:p-4 w-full lg:w-3/4">
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

    <Button href="/projects">See More Projects</Button>
</section>
