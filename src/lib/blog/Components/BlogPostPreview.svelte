<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type BlogPost, type BlogSeries } from '../Blog';
	interface Props {
		post: BlogPost | BlogSeries;
	}

	let { post }: Props = $props();
	
	const cardClasses = post.pin 
		? "card w-full bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl prose shadow-2xl h-full border border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-primary/20 hover:border-primary/30"
		: "card w-full bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl prose shadow-2xl h-full border border-base-300 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-primary/20 hover:border-primary/30";
</script>

<div class="stack w-full">
	<a
		class={cardClasses}
		href={post.url}
	>
		<div class="flex items-start justify-between gap-3 mb-4">
			<h2 class="text-2xl font-bold font-kode text-primary leading-tight flex items-center gap-2 flex-1">
				{#if post.pin}
					<div class="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
						<Icon icon="mdi:pin" class="w-4 h-4" />
						<span class="text-xs font-semibold">Pinned</span>
					</div>
				{/if}
				<span class="flex-1">{post.title}</span>
			</h2>
		</div>

		{#if post.date}
			<div class="flex items-center gap-2 text-sm text-base-content/60 bg-base-200/50 rounded-lg px-3 py-2 border border-base-300/50 mb-4">
				<Icon icon="mdi:calendar" class="w-4 h-4" />
				<span>{post.date}</span>
			</div>
		{/if}

		<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 my-4" />
		
		<div class="flex flex-wrap gap-2 mb-4">
			{#each post.tags as tag}
				<span class="badge badge-outline badge-sm hover:badge-secondary hover:text-secondary-content transition-colors duration-200 cursor-default font-medium">
					{tag}
				</span>
			{/each}
		</div>
		
		<p class="text-base-content/80 leading-relaxed mb-4">
			{#if post.description}
				{post.description?.substring(0, 250)}{post.description?.length > 250 ? '...' : ''}
			{/if}
		</p>
		
		{#if 'posts' in post}
			<div class="flex items-center gap-2 bg-accent/10 text-accent px-3 py-2 rounded-lg border border-accent/20">
				<Icon icon="mdi:book-multiple" class="w-4 h-4" />
				<span class="text-sm font-semibold">{post.posts.length} posts in series</span>
			</div>
		{/if}
	</a>

	{#if 'posts' in post}
		<!-- Series stack effect with improved gradients -->
		<div class="card h-full bg-gradient-to-br from-base-200/80 to-base-300/60 prose mb-7 ml-9 rounded-lg border border-base-300/30 shadow-lg"></div>
		<div class="card h-full bg-gradient-to-br from-base-200/60 to-base-300/40 prose mb-7 ml-9 rounded-lg border border-base-300/20 shadow-md"></div>
		<div class="card h-full bg-gradient-to-br from-base-200/40 to-base-300/20 prose mb-7 ml-9 rounded-lg border border-base-300/10 shadow-sm"></div>
		<div class="card h-full bg-gradient-to-br from-base-200/20 to-base-300/10 prose mb-7 ml-9 rounded-lg border border-base-300/5"></div>
	{/if}
</div>
