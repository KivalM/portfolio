<script lang="ts">
	import a2svGroup from '$lib/assets/A2SV/A2SV Group.jpg';
	import a2svFlag from '$lib/assets/A2SV/A2SV Group Flag.jpg';
	import a2svSpeaking from '$lib/assets/A2SV/A2SV Me speaking.jpg';

	const achievements = [
		{
			title: 'Langguin @ A2SV Grand Finals Ethiopia',
			year: '2024',
			description: '',
			images: [
				{ src: a2svSpeaking, alt: 'Speaking at A2SV Grand Finals' },
				{ src: a2svGroup, alt: 'A2SV Grand Finals Group' },
				{ src: a2svFlag, alt: 'A2SV Grand Finals with Flag' }
			]
		},
		{
			title: 'EvolutionChess',
			year: '2022',
			description: '2nd Place — BBD Software Hackathon',
			url: 'https://github.com/KivalM/EvolutionChess',
			images: []
		}
	];
</script>

<section class="container mx-auto p-2 md:p-4 py-16" id="achievements">
	<div class="text-center mb-12">
		<h2 class="text-6xl font-kode font-bold text-primary mb-6">Stuff</h2>
		<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 mx-auto my-6" />
		<h3 class="text-3xl font-jp text-center text-accent">( •̀ᴗ•́)و</h3>
	</div>

	<div class="flex flex-col gap-12 max-w-5xl mx-auto">
		{#each achievements as achievement}
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 md:p-8 rounded-xl shadow-2xl border border-base-300 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300">
				<div class="flex items-center gap-3 mb-2 flex-wrap">
					{#if achievement.url}
						<a href={achievement.url} target="_blank" rel="noopener noreferrer" class="text-2xl font-bold font-kode text-base-content hover:text-primary transition-colors">{achievement.title}</a>
					{:else}
						<h3 class="text-2xl font-bold font-kode text-base-content">{achievement.title}</h3>
					{/if}
					{#if achievement.year}
						<span class="bg-primary/20 text-primary text-xs font-kode font-bold px-3 py-1 rounded-full border border-primary/30">{achievement.year}</span>
					{/if}
				</div>
				{#if achievement.description}
					<p class="text-base-content/60 text-sm mb-6">{achievement.description}</p>
				{/if}
				{#if achievement.images && achievement.images.length > 0}
					<div class="flex gap-4 justify-center flex-wrap">
						{#each achievement.images as image}
							<div class="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border border-base-300/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-lg">
								<img src={image.src} alt={image.alt} class="w-full h-full object-cover" />
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
