<script lang="ts">
	import type { BlogPost } from '../Blog';
	import SvelteSeo from 'svelte-seo';
	export let post: BlogPost;
	console.log(post);
</script>

<SvelteSeo
	title={post.title}
	description={post.description}
	canonical={`https://kivalm.com/{post.url}`}
	keywords={post.tags.join(', ')}
	openGraph={{
		title: post.title,
		description: post.description,
		url: 'https://kivalm.com/{post.url}',
		type: 'website',
		site_name: 'Kival Mahadew'
	}}
/>

<div class="w-full rounded-xl prose">
	<h2 class="text-2xl font-bold text-primary font-kode">{post.title}</h2>
	<div class="flex flex-row gap-2">
		{#each post.tags as tag}
			<span class="text-primary px-2 py-1 rounded-lg">
				{tag}
			</span>
		{/each}
	</div>
	<p class="text-neutral my-2">
		{#if post.description}
			{post.description}
		{/if}
	</p>
	<hr class="border-2 border-primary my-2" />

	<svelte:component this={post.content}></svelte:component>
</div>
