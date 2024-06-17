<script lang="ts">
    import NavbarPadding from "$lib/components/NavbarPadding.svelte";
</script>

<svelte:head>
    <title>Blog</title>
    <meta
        name="description"
        content="Blog page of my personal website: Kival Mahadew"
    />

    <meta property="og:title" content="Blog" />
    <meta
        property="og:description"
        content="Blog page of my personal website: Kival Mahadew"
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kivalm.com/blog" />
</svelte:head>

<NavbarPadding />

<slot />
