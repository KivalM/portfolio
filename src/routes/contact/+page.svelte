<script lang="ts">
	import Contact from './Contact.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
	<div class="container mx-auto px-4 py-12">
		<!-- Modern Header -->
		<div class="text-center mb-16">
			<div class="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
				<Icon icon="mdi:email" class="w-10 h-10 text-primary" />
			</div>
			<h2 class="text-6xl lg:text-7xl font-kode font-bold text-primary mb-6">Contact Me</h2>
			<hr class="border-2 border-gradient-to-r from-primary via-primary/50 to-transparent w-1/4 mx-auto my-6" />
			<h3 class="text-3xl font-jp text-accent mb-4">(ง •̀_•́)ง</h3>
			<p class="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
				Let's connect! Whether you have a project in mind, want to collaborate, or just want to chat about technology
			</p>
		</div>

		<!-- Contact Form Section -->
		<Contact />
	</div>
</section>
