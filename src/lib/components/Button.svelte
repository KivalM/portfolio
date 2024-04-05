<script>
    import Chevron from "./Chevron.svelte";

    export let href = "/";
</script>

<div class="flex justify-center font-kode">
    <a class="border-blue-600 border-b-2 text-white p-3 animate-pulse" {href}>
        <slot />
        <Chevron direction="right" color="white" />
    </a>
</div>
