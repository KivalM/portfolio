<script lang="ts">
    import About from "$lib/blocks/About.svelte";
    import Blog from "$lib/blocks/Blog.svelte";
    import Jumbotron from "$lib/blocks/Jumbotron.svelte";
    import Projects from "$lib/blocks/Projects.svelte";

    export let data;
    let { projects, links, blog } = data;
</script>

<div>
    <Jumbotron {links} />
    <About />
    <Projects {projects} />
    <Blog {blog} />
</div>
