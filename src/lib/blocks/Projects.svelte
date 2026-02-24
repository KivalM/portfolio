<script lang="ts">
	import Icon from '@iconify/svelte';

	const projects = [
		{
			title: 'pymdp',
			description: 'A Python library for active inference in discrete state spaces.',
			tags: ['Python', 'Active Inference', 'JAX'],
			url: 'https://github.com/infer-actively/pymdp',
			icon: 'mdi:brain'
		},
		{
			title: 'RustSBI',
			description: 'RISC-V Supervisor Binary Interface implementation in Rust.',
			tags: ['Rust', 'RISC-V', 'Systems'],
			url: 'https://github.com/nickel-org/nickel.rs',
			icon: 'mdi:chip'
		},
		{
			title: 'Active Inference Multi-Agent',
			description: 'Multi-agent coordination using Active Inference for emergent behaviour.',
			tags: ['Python', 'Multi-Agent', 'Research'],
			url: '#',
			icon: 'mdi:account-group'
		},
		{
			title: 'SLM Reward Modelling',
			description: 'Reward modelling pipelines for improving small language models.',
			tags: ['Python', 'RL', 'LLMs'],
			url: '#',
			icon: 'mdi:robot'
		}
	];
</script>

<section class="container mx-auto p-2 md:p-4 py-16" id="projects">
	<div class="text-center mb-12">
		<h2 class="text-6xl font-kode font-bold text-primary mb-6">Projects</h2>
		<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 mx-auto my-6" />
		<h3 class="text-3xl font-jp text-center text-accent">(・_・;)</h3>
	</div>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
		{#each projects as project}
			<a href={project.url} target="_blank" rel="noopener noreferrer" class="group">
				<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
					<div class="flex items-start gap-4">
						<div class="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
							<Icon icon={project.icon} class="w-6 h-6 text-primary" />
						</div>
						<div class="flex flex-col gap-2">
							<h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300 font-kode">
								{project.title}
							</h3>
							<p class="text-sm text-base-content/70 leading-relaxed">{project.description}</p>
							<div class="flex flex-wrap gap-2 mt-1">
								{#each project.tags as tag}
									<span class="bg-base-200/80 text-base-content/60 text-xs px-2 py-1 rounded-md border border-base-300/50 font-kode">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
