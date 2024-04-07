<script lang="ts">
    import About from "$lib/blocks/About.svelte";
    import Blog from "$lib/blocks/Blog.svelte";
    import Jumbotron from "$lib/blocks/Jumbotron.svelte";
    import Projects from "$lib/blocks/Projects.svelte";

    export let data;
    let { projects, links, blog } = data;
</script>

<svelte:head>
    <title>Home</title>
    <meta
        name="description"
        content="Home page of my personal website: Kival Mahadew"
    />
    <meta
        name="keywords"
        content="Kival M, Kival Mahadew, personal website, blog"
    />

    <meta property="og:title" content="Home - Kival Mahadew" />
    <meta
        property="og:description"
        content="Home page of my personal website: Kival Mahadew"
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kivalm.com" />
</svelte:head>

<div>
    <Jumbotron {links} />
    <About />
    <Projects {projects} />
    <Blog {blog} />
</div>
