<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Theme from './Theme.svelte';

	let open = $state(false);
	const links = [
		{ label: 'Home', path: '/' },
		{ label: 'Stuff', path: '/#stuff' },
		{ label: 'Research', path: '/research' }
	] as const;

	type NavigationPath = (typeof links)[number]['path'];

	function isActive(path: NavigationPath) {
		const link = new URL(resolve(path), page.url.origin);
		return page.url.pathname === link.pathname && page.url.hash === link.hash;
	}

	function closeOnOutsideClick({ target }: MouseEvent) {
		if (open && target instanceof Element && !target.closest('#main-navigation')) {
			open = false;
		}
	}
</script>

<svelte:document onclick={closeOnOutsideClick} />

<nav id="main-navigation" class="container mx-auto font-kode" aria-label="Main navigation">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<a class="text-2xl text-primary" href={resolve('/')}>KivalM</a>
		</div>

		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 text-lg">
				{#each links as link (link.path)}
					<li>
						<a href={resolve(link.path)} class={{ 'text-primary': isActive(link.path) }}
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="navbar-end gap-4">
			<Theme />
			<button
				type="button"
				class={[
					'btn btn-circle bg-transparent swap swap-rotate lg:hidden',
					{ 'swap-active': open }
				]}
				onclick={() => (open = !open)}
				aria-label="Toggle navigation"
				aria-expanded={open}
				aria-controls="mobile-navigation"
			>
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
			</button>
		</div>
	</div>

	{#if open}
		<ul id="mobile-navigation" class="menu menu-vertical px-1 text-2xl">
			{#each links as link (link.path)}
				<li>
					<a
						href={resolve(link.path)}
						class={{ 'text-primary': isActive(link.path) }}
						onclick={() => (open = false)}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
