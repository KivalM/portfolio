<script>
	import { onMount } from 'svelte';
	import Theme from './Theme.svelte';

	let open = false;

	// set the open state to false when the user clicks outside the menu
	// @ts-ignore
	const handleClick = ({ target }) => {
		if (!target.closest('.navbar')) {
			open = false;
		}
	};

	// add the event listener when the component is mounted
	onMount(() => {
		document.addEventListener('click', handleClick);

		// highlight the current page in the navbar
		const links = document.querySelectorAll('.menu a');

		links.forEach((link) => {
			// @ts-ignore
			if (location.pathname.includes(link.getAttribute('href'))) {
				links.forEach((link) => link.classList.remove('text-primary'));
				link.classList.add('text-primary');
			}
		});
	});
</script>

<div class=" navbar bg-base-100 container mx-auto font-kode">
	<div class="navbar-start">
		<a class="text-2xl text-primary" href="/">KivalM</a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 text-lg">
			<li><a href="/">/Home</a></li>
			<li><a href="/#about">/About</a></li>
			<li><a href="/projects">/Projects</a></li>
			<li><a href="/blog">/Blog</a></li>
			<li><a href="/work">/Work</a></li>
			<li><a href="/contact">/Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end gap-4">
		<Theme />
		<label class="btn btn-circle bg-transparent swap swap-rotate lg:hidden">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" bind:checked={open} />

			<!-- hamburger icon -->
			<svg
				class="swap-off fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
			>
				<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
			</svg>

			<!-- close icon -->
			<svg
				class="swap-on fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
			>
				<polygon
					points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
				/>
			</svg>
		</label>
	</div>
</div>

<!-- mobile menu -->
{#if open}
	<ul class="menu menu-vertical px-1 text-2xl font-kode">
		<li><a href="/">/Home</a></li>
		<li><a href="/#about">/About</a></li>
		<li><a href="/projects">/Projects</a></li>
		<li><a href="/blog">/Blog</a></li>
		<li><a href="/work">/Work</a></li>
		<li><a href="/contact">/Contact</a></li>
	</ul>
{/if}
