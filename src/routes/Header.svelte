<script lang="ts">
    import {
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
        Navbar,
    } from "flowbite-svelte";

    import { DarkMode } from "flowbite-svelte";
    let btnClass =
        "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl";
</script>

<Navbar let:hidden let:toggle navClass="px-2 sm:px-4 py-2.5 w-full comfortaa">
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-bold">
            Kival M
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/projects">Projects</NavLi>
        <NavLi href="/blog">Blog</NavLi>
        <NavLi href="/contact">Contact</NavLi>
        <NavLi><DarkMode {btnClass} /></NavLi>
    </NavUl>
</Navbar>
