<script lang="ts">
    export let images: { src: string; alt: string; title: string }[] = [];
    import Img from "@zerodevx/svelte-img";
</script>

<div>
    <Img src={images[0].src} alt={images[0].alt} title={images[0].title} />
</div>
