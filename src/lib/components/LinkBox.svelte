<script lang="ts">
    import { type Link } from "$lib/data/links";
    export let link: Link;

    import Icon from "@iconify/svelte";
</script>

<a
    href={link.url}
    rel="noopener noreferrer"
    target="_blank"
    class="text-xl flex flex-row items-center justify-center bg-blue-600 rounded shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
>
    <div class="p-2 flex items-center justify-center text-2xl">
        <Icon icon={link.icon} class="text-white" />
    </div>
    <div class="bg-white p-2 rounded-r text-black flex-grow">
        {link.name}
    </div>
</a>
