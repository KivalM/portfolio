<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    let list: HTMLElement;

    export let links = [
        { name: "Home", href: "#greeter" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Blog", href: "#blog" },
    ];

    let navHeight = 0;
    let active = 0;
    let activeClass = "block py-2 px-3 rounded text-blue-500 md:p-0";
    let nonActiveClass = "block py-2 px-3 rounded hover:text-blue-500 md:p-0";

    function navigate(route: string) {
        if (route.startsWith("#")) {
            scrollToId(route);
        } else {
            goto(route);
            //
            links.forEach((link, i) => {
                if (link.href === route) {
                    active = i;
                }
            });
        }
    }

    function scrollToId(id: string) {
        const element = document.getElementById(id.slice(1))!;
        window.scrollTo({
            top: element.offsetTop - navHeight,
            behavior: "smooth",
        });
        active = links.findIndex((link) => link.href === id);
    }

    onMount(() => {
        if ($page.route.id === "/") {
            window.addEventListener("scroll", () => {
                const scrollPosition = window.scrollY;
                links.forEach((link, i) => {
                    const section = document.getElementById(
                        link.href.slice(1),
                    )!;
                    if (
                        section.offsetTop - navHeight <= scrollPosition &&
                        section.offsetTop + section.offsetHeight >
                            scrollPosition
                    ) {
                        active = i;
                    }
                });
                list.classList.add("hidden");
            });
        } else {
            links.forEach((link, i) => {
                if (link.href === $page.route.id) {
                    active = i;
                }
            });
        }
    });
</script>

<nav
    class="fixed w-full z-50 top-0 start-0 text-white font-kode bg-zinc-900"
    bind:clientHeight={navHeight}
    id="navbar"
>
    <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-around mx-auto p-4"
    >
        <a href="/" class="flex items-center space-x-3">
            <span
                class="self-center text-2xl font-semibold whitespace-nowrap text-blue-400"
                >KivalM</span
            >
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0">
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-800"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                on:click={() => list.classList.toggle("hidden")}
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
        <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
            bind:this={list}
        >
            <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0"
            >
                {#each links as link, i}
                    <li>
                        <button
                            class={active === i ? activeClass : nonActiveClass}
                            aria-current={active === i ? "page" : undefined}
                            aria-label={link.name}
                            on:click={() => navigate(link.href)}
                        >
                            {link.name}
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>
