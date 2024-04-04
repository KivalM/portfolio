<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
</script>

<Navbar
    class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 bg-zinc-900 flex items-center justify-center "
    let:NavContainer
>
    <NavContainer class="flex justify-center">
        <NavHamburger />
        <NavUl
            activeClass="text-blue-500 font-kode font-bold"
            nonActiveClass="text-blue-500 font-kode"
        >
            <NavLi href="/" active={true}>Home</NavLi>
            <NavLi href="#about">About</NavLi>
            <NavLi href="#projects">Projects</NavLi>
            <NavLi href="#blog">Blog</NavLi>
        </NavUl>
    </NavContainer>
</Navbar>
<!-- <nav class="fixed w-full z-20 top-0 start-0 font-kode bg-zinc-900">
    <div
        class="flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center"
    >
        <div class="flex md:order-2 space-x-3 md:space-x-0">
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded="false"
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
            class="items-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
        >
            <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0"
            >
                <li>
                    <a
                        href="/"
                        class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0"
                        >Home</a
                    >
                </li>
                <li>
                    <a
                        href="#about"
                        class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                        >About</a
                    >
                </li>
                <li>
                    <a
                        href="#projects"
                        class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                        >Projects</a
                    >
                </li>
                <li>
                    <a
                        href="#blog"
                        class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                        >Blog</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav> -->
