<script lang="ts">
	import Icon from '@iconify/svelte';

	export let { name, icon } = { name: 'LinkedIn', icon: 'mdi-light:home' };
</script>

<button class="btn btn-primary p-0 border-0 flex flex-row join hover:scale-105">
	<span class="join-item flex items-center pl-2 text-2xl"> <Icon {icon} /></span>
	<span class="join-item bg-base-content text-base-100 p-2 text-xl">{name}</span>
</button>
