<script lang="ts">
    import "@fontsource-variable/kode-mono";
    import "@fontsource-variable/noto-sans-display";

    import "./styles.css";
    import Footer from "$lib/blocks/Footer.svelte";
    import Header from "$lib/blocks/Header.svelte";

    import { page } from "$app/stores";

    let links: {
        name: string;
        href: string;
    }[] = [];
    $: if ($page.route.id !== "/") {
        links = [
            { name: "/Home", href: "/" },
            { name: "/About", href: "/#about" },
            { name: "/Projects", href: "/projects" },
            { name: "/Blog", href: "/blog" },
        ];
    } else {
        links = [
            { name: "/Home", href: "#greeter" },
            { name: "/About", href: "#about" },
            { name: "/Projects", href: "#projects" },
            { name: "/Blog", href: "#blog" },
        ];
    }
</script>

<div class="bg-zinc-900 text-white min-h-screen flex flex-col justify-between">
    <Header {links} />
    <main>
        <slot />
    </main>
    <Footer />
</div>
