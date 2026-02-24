<script lang="ts">
	import Pill from '$lib/components/button/Pill.svelte';
</script>

<section class="hero bg-gradient-to-br from-base-100 via-base-200 to-base-100 text-base-content h-full w-full relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
	<div class="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
	<div class="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
	
	<div class="hero-content text-center relative z-10">
		<div class="max-w-4xl">
			<div class="flex flex-col gap-6 mb-8">
				<div class="text-5xl font-jp text-accent animate-pulse">¯\_(ツ)_/¯</div>
				<div class="space-y-2">
					<h1 class="text-6xl lg:text-7xl font-bold leading-tight">
						Hello. I'm
					</h1>
					<div class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						<span class="text-5xl lg:text-6xl font-kode font-bold">Kival Mahadew</span>
					</div>
				</div>

				<div class="flex flex-col gap-2 mt-2 max-w-2xl mx-auto">
					<p class="text-lg text-base-content/70 leading-relaxed">
						Improving small language models with reinforcement learning
						<a href="https://quickai.app" target="_blank" class="text-primary font-semibold hover:underline">@QuickAI</a>
					</p>
					<p class="text-lg text-base-content/70 leading-relaxed">
						Researching Active Inference and Multi-Agent Systems
						<a href="https://shocklab.net" target="_blank" class="text-secondary font-semibold hover:underline">@Shocklab</a>
					</p>
				</div>
			</div>
			
			<div class="divider opacity-50"></div>
			
			<div class="flex flex-row gap-4 justify-center flex-wrap mt-8">
				<a href="https://www.linkedin.com/in/kivalm/" target="_blank" class="hover:scale-105 transition-transform duration-200">
					<Pill name="LinkedIn" icon="mdi:linkedin" />
				</a>
				<a href="https://github.com/KivalM/" target="_blank" class="hover:scale-105 transition-transform duration-200">
					<Pill name="GitHub" icon="mdi:github" />
				</a>
				<a href="mailto:kivalm@protonmail.com" class="hover:scale-105 transition-transform duration-200">
					<Pill name="Email" icon="mdi:email" />
				</a>
			</div>

			<!-- Affiliations -->
			<div class="flex items-center justify-center gap-6 mt-10 opacity-60 hover:opacity-100 transition-opacity duration-300">
				<a href="https://quickai.app" target="_blank" class="hover:scale-110 transition-transform duration-200" title="QuickAI">
					<img src="/quickai-logo-black.webp" alt="QuickAI" class="h-8 w-8 object-contain rounded-full bg-white p-0.5" />
				</a>
				<a href="https://shocklab.net" target="_blank" class="hover:scale-110 transition-transform duration-200" title="Shocklab">
					<img src="/Untitled_Artwork-300x300.png" alt="Shocklab" class="h-8 w-8 object-contain rounded-full" />
				</a>
				<a href="https://www.uct.ac.za" target="_blank" class="hover:scale-110 transition-transform duration-200" title="UCT">
					<img src="/UCT-logo-circular-blue-large-295x300.png" alt="UCT" class="h-8 w-8 object-contain rounded-full" />
				</a>
			</div>
		</div>
	</div>

	<!-- Enhanced scroll indicator -->
	<button class="absolute bottom-8 left-1/2 transform -translate-x-1/2 group hover:scale-110 transition-all duration-300">
		<div class="text-center flex flex-col items-center gap-3 font-kode">
			<div class="bg-base-200/80 backdrop-blur-sm rounded-full px-4 py-2 border border-base-300/50 group-hover:border-primary/50 transition-colors duration-300">
				<p class="text-sm text-base-content/70 group-hover:text-primary transition-colors duration-300">Scroll for more</p>
			</div>
			<div class="animate-bounce group-hover:animate-pulse">
				<div class="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-primary"
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
		</div>
	</button>
</section>
