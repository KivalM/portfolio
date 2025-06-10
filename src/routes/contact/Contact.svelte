<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="max-w-4xl mx-auto">
	<div class="grid md:grid-cols-2 gap-8">
		<!-- Contact Information Card -->
		<div class="bg-gradient-to-br from-base-100 to-base-200 p-8 rounded-xl shadow-2xl border border-base-300 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300">
			<div class="text-center mb-8">
				<div class="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
					<Icon icon="mdi:account-circle" class="w-8 h-8 text-secondary" />
				</div>
				<h3 class="text-2xl font-bold text-secondary mb-4">Get In Touch</h3>
				<p class="text-base-content/70">Ready to start your next project? Let's discuss how we can work together.</p>
			</div>

			<div class="space-y-6">
				<!-- Contact Methods -->
				<div class="flex items-center gap-4 p-4 bg-base-200/50 rounded-lg border border-base-300/50 hover:bg-base-200/70 transition-colors duration-200">
					<div class="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:email" class="w-5 h-5 text-primary" />
					</div>
					<div>
						<div class="font-semibold text-base-content">Email</div>
						<div class="text-sm text-base-content/70">kmahadew21@gmail.com</div>
					</div>
				</div>

				<div class="flex items-center gap-4 p-4 bg-base-200/50 rounded-lg border border-base-300/50 hover:bg-base-200/70 transition-colors duration-200">
					<div class="bg-accent/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:linkedin" class="w-5 h-5 text-accent" />
					</div>
					<div>
						<div class="font-semibold text-base-content">LinkedIn</div>
						<div class="text-sm text-base-content/70">/in/kivalm</div>
					</div>
				</div>

				<div class="flex items-center gap-4 p-4 bg-base-200/50 rounded-lg border border-base-300/50 hover:bg-base-200/70 transition-colors duration-200">
					<div class="bg-secondary/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:github" class="w-5 h-5 text-secondary" />
					</div>
					<div>
						<div class="font-semibold text-base-content">GitHub</div>
						<div class="text-sm text-base-content/70">@KivalM</div>
					</div>
				</div>

				<!-- Response Time -->
				<div class="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
					<div class="flex items-center gap-2 mb-2">
						<Icon icon="mdi:clock-fast" class="w-5 h-5 text-accent" />
						<span class="font-semibold text-accent">Quick Response</span>
					</div>
					<p class="text-sm text-base-content/70">I typically respond within 24 hours during business days.</p>
				</div>
			</div>
		</div>

		<!-- Contact Form Card -->
		<div class="bg-gradient-to-br from-base-100 to-base-200 p-8 rounded-xl shadow-2xl border border-base-300 hover:shadow-secondary/20 hover:border-secondary/30 transition-all duration-300">
			<div class="text-center mb-8">
				<div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
					<Icon icon="mdi:message-text" class="w-8 h-8 text-primary" />
				</div>
				<h3 class="text-2xl font-bold text-primary mb-4">Send a Message</h3>
				<p class="text-base-content/70">Fill out the form below and I'll get back to you soon.</p>
			</div>

			<form class="space-y-6" name="contact" method="POST" data-netlify="true">
				<div class="space-y-2">
					<label for="name" class="text-sm font-semibold text-base-content flex items-center gap-2">
						<Icon icon="mdi:account" class="w-4 h-4" />
						Name
					</label>
					<input 
						type="text" 
						id="name" 
						name="name" 
						class="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary focus:ring-primary transition-colors duration-200"
						placeholder="Your full name"
						required
					/>
				</div>

				<div class="space-y-2">
					<label for="email" class="text-sm font-semibold text-base-content flex items-center gap-2">
						<Icon icon="mdi:email" class="w-4 h-4" />
						Email
					</label>
					<input 
						type="email" 
						id="email" 
						name="email" 
						class="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary focus:ring-primary transition-colors duration-200"
						placeholder="your.email@example.com"
						required
					/>
				</div>

				<div class="space-y-2">
					<label for="message" class="text-sm font-semibold text-base-content flex items-center gap-2">
						<Icon icon="mdi:message" class="w-4 h-4" />
						Message
					</label>
					<textarea 
						id="message" 
						name="message" 
						class="textarea textarea-bordered w-full h-32 bg-base-100 border-base-300 focus:border-primary focus:ring-primary transition-colors duration-200 resize-none"
						placeholder="Tell me about your project or idea..."
						required
					></textarea>
				</div>

				<button 
					class="btn btn-primary w-full gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30" 
					type="submit"
				>
					<Icon icon="mdi:send" class="w-5 h-5" />
					Send Message
				</button>
			</form>
		</div>
	</div>
</div>
