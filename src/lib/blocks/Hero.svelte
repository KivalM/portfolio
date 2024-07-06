<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
</script>

<section class="hero bg-base-100 text-base-content h-full">
	<div class="hero-content text-center">
		<div>
			<div class="flex flex-col gap-4">
				<div class="text-4xl font-jp">¯\_(ツ)_/¯</div>
				<h1 class="text-5xl">
					Hello. I'm
					<span class="text-primary font-kode font-bold">Kival</span>
					<span class="text-primary font-kode font-bold">Mahadew</span>
				</h1>
			</div>
			<div class="divider"></div>
			<div class="flex flex-row gap-2 justify-center flex-wrap">
				<Pill name="LinkedIn" icon="mdi:linkedin" />
				<Pill name="GitHub" icon="mdi:github" />
				<Pill name="Twitter" icon="mdi:twitter" />
				<Pill name="Email" icon="mdi:email" />
			</div>
		</div>
	</div>

	<!-- scroll for more -->
	<button class="absolute bottom-5">
		<div class="text-center flex flex-col items-center gap-2 font-kode">
			<p>Scroll for more</p>
			<div class="animate-bounce">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	</button>
</section>
