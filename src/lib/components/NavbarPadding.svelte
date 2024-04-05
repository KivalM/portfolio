<script lang="ts">
    import { getNavbarHeight } from "$lib/utils/utils";
    import { onMount } from "svelte";
    let divPadding: HTMLDivElement;

    onMount(() => {
        divPadding.style.height = `${getNavbarHeight()}px`;
    });
</script>

<div bind:this={divPadding}></div>
