<script lang="ts">
    import ImageCard from "$lib/components/ImageCard.svelte";

    export let data;
    let { work, university, personal } = data;

    let projects = [
        { title: "Work", projects: work },
        { title: "Personal", projects: personal },
        { title: "University", projects: university },
    ];
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

{#each projects as project}
    {#if personal.length > 0}
        <h2 class="text-3xl font-bold text-center mt-10 font-kode">
            {project.title}
        </h2>
        <div
            class="grid gap-5 grid-cols-1 lg:grid-cols-2 container mx-auto p-4"
        >
            {#each project.projects as p}
                <ImageCard
                    description={p.description}
                    images={p.images}
                    links={p.links}
                    title={p.title}
                    tags={p.tags}
                    team={p.team}
                />
            {/each}
        </div>
    {/if}
{/each}

{#if university.length === 0 && work.length === 0 && personal.length === 0}
    <h2 class="text-3xl font-bold text-center mt-10">No projects found</h2>
{/if}
