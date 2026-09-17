<script lang="ts">
	import Icon from '@iconify/svelte';
	import { publications, scholarProfileUrl } from '$lib/data/publications';
</script>

<section id="research" class="container mx-auto p-2 md:p-4 py-16">
	<div class="mb-12 text-center">
		<h2 class="mb-6 font-kode text-6xl font-bold text-primary">Research</h2>
		<hr class="mx-auto my-6 w-1/4 border-2 border-gradient-to-r from-primary via-primary/50 to-transparent" />
		<h3 class="text-center font-jp text-3xl text-accent">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</h3>
	</div>

	<div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
		{#each publications as publication (publication.id)}
			<article class="rounded-xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/20">
				<div class="flex items-center gap-2 font-kode text-xs">
					<span class="rounded-full bg-primary/10 px-3 py-1 text-primary">{publication.type}</span>
					<span class="text-base-content/60">{publication.year}</span>
				</div>
				<h3 class="mt-4 text-xl font-bold leading-snug text-base-content">{publication.title}</h3>
				<p class="mt-3 text-sm leading-relaxed text-base-content/70">{publication.authors.join(', ')}</p>
				<p class="mt-2 font-kode text-sm text-base-content/60">{publication.venue}</p>

				{#if publication.url}
					<a
						href={publication.url}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline btn-sm mt-5 gap-2 font-kode"
					>
						{publication.urlLabel}
						<Icon icon="mdi:open-in-new" class="h-4 w-4" />
					</a>
				{/if}
			</article>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<a
			href={scholarProfileUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-primary gap-2 font-kode"
		>
			<Icon icon="mdi:google-scholar" class="h-5 w-5" />
			Google Scholar
			<Icon icon="mdi:open-in-new" class="h-4 w-4" />
		</a>
	</div>
</section>
