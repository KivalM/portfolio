<script lang="ts">
    import "./styles.css";
    import Footer from "$lib/blocks/Footer.svelte";
    import Header from "$lib/blocks/Header.svelte";
    import Jumbotron from "$lib/blocks/Jumbotron.svelte";
</script>

<div class="bg-zinc-900 text-white">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>
