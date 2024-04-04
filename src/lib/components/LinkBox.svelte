<script lang="ts">
    import { type Link, links } from "$lib/data/links";
    export let link: Link;
</script>

<a
    href={link.url}
    rel="noopener noreferrer"
    target="_blank"
    class="text-xl flex flex-row items-center justify-center bg-blue-600 rounded shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
>
    <div class="p-2 flex items-center justify-center">
        <i class={link.icon}></i>
    </div>
    <div class="bg-white p-2 rounded-r text-black">
        {link.name}
    </div>
</a>
