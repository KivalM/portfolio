<section class="container mx-auto max-w-lg">
	<form class="flex flex-col gap-2 p-4" name="contact" method="POST" data-netlify="true">
		<div class="flex flex-col gap-4">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" class="input input-bordered w-full" />
		</div>
		<div class="flex flex-col gap-4">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" class="input input-bordered w-full" />
		</div>
		<div class="flex flex-col gap-4">
			<label for="message">Message</label>
			<textarea id="message" name="message" class="textarea textarea-bordered"></textarea>
		</div>
		<button class="btn btn-secondary" type="submit">Submit</button>
	</form>
</section>
