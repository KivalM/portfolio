<script lang="ts">
    import ImageCard from "$lib/components/ImageCard.svelte";

    export let data;
    let { work, university, personal } = data;
</script>

<svelte:head>
    <title>Projects</title>
    <meta
        name="description"
        content="Projects page of my personal website: Kival Mahadew"
    />

    <meta property="og:title" content="Projects" />
    <meta
        property="og:description"
        content="Projects page of my personal website: Kival Mahadew"
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kivalm.com/projects" />
</svelte:head>

{#if work.length > 0}
    <h2 class="text-3xl font-bold text-center mt-10 font-kode">Work</h2>
    <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 container mx-auto p-4">
        {#each data.work as project}
            <ImageCard
                description={project.description}
                images={project.images}
                links={project.links}
                title={project.title}
                tags={project.tags}
                team={project.team}
            />
        {/each}
    </div>
{/if}
{#if personal.length > 0}
    <h2 class="text-3xl font-bold text-center mt-10 font-kode">Personal</h2>
    <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 container mx-auto p-4">
        {#each data.personal as project}
            <ImageCard
                description={project.description}
                images={project.images}
                links={project.links}
                title={project.title}
                tags={project.tags}
                team={project.team}
            />
        {/each}
    </div>
{/if}

{#if university.length > 0}
    <h2 class="text-3xl font-bold text-center mt-10 font-kode">University</h2>
    <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 container mx-auto p-4">
        {#each data.university as project}
            <ImageCard
                description={project.description}
                images={project.images}
                links={project.links}
                title={project.title}
                tags={project.tags}
                team={project.team}
            />
        {/each}
    </div>
{/if}

{#if university.length === 0 && work.length === 0 && personal.length === 0}
    <h2 class="text-3xl font-bold text-center mt-10">No projects found</h2>
{/if}
