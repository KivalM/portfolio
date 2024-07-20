<script lang="ts">
	import Contact from './Contact.svelte';
	import Xp from './XP.svelte';
	// import cv pdf from static folder
</script>

<section>
	<h2 class="text-6xl font-kode text-center">Work</h2>
	<hr class="border-2 border-primary w-1/5 mx-auto my-5" />
	<h3 class="text-3xl font-sans text-center">(¬‿¬)</h3>

	<!-- download cv -->
</section>

<!-- my work experience and specialization -->
<section>
	<div class="w-full py-4 lg:p-4">
		<div class=" p-2 grid lg:grid-cols-2 gap-4">
			<div class="p-4 rounded-xl shadow-xl">
				<Xp />
			</div>
			<!-- keep contact centered in view while the screen is on the div -->
			<div class="h-full block">
				<div class="sticky top-1/4 flex justify-center flex-col">
					<Contact />
				</div>
			</div>
		</div>
	</div>
</section>
