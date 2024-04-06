<script lang="ts">
    export let images: { src: string; alt: string; title: string }[] = [];
    import Img from "@zerodevx/svelte-img";
</script>

<div class="h-full w-full">
    <Img
        src={images[0].src}
        class=" h-full w-full object-cover object-center"
    />
</div>
