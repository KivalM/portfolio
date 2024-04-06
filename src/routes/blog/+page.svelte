<script lang="ts">
    import Button from "$lib/components/Button.svelte";
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
<section class="bg-zinc-900 min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1
                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500"
            >
                Coming Soon
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-white">
                This page is under construction
            </p>
            <Button href="/">Go back home</Button>
        </div>
    </div>
</section>
