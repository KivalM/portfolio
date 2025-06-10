<script>
	import Icon from '@iconify/svelte';
	import CV from '$lib/assets/cv.pdf';

	// function to download the CV
	const downloadCV = () => {
		window.open(CV, '_blank');
	};
</script>

<div class="max-w-6xl mx-auto">
	<!-- Header Card with CV Download -->
	<div class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-2xl border border-primary/30 p-8 mb-12 text-center">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6">
			<div class="text-left md:text-left">
				<h1 class="text-4xl lg:text-5xl font-bold text-primary font-kode mb-2">
					Kival Mahadew
				</h1>
				<h2 class="text-2xl font-semibold text-secondary mb-4">Full Stack Developer</h2>
				<p class="text-base-content/70 max-w-md">
					Passionate about building innovative solutions with modern technologies
				</p>
			</div>
			
			<button 
				onclick={downloadCV} 
				class="btn btn-primary btn-lg gap-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
			>
				<Icon icon="mdi:download" class="w-6 h-6" />
				Download CV
			</button>
		</div>
	</div>

	<!-- Main Content Grid -->
	<div class="grid lg:grid-cols-2 gap-8">
		<!-- Left Column -->
		<div class="space-y-8">
			<!-- Overview Card -->
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-secondary/20 transition-all duration-300">
				<div class="flex items-center gap-3 mb-4">
					<div class="bg-secondary/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:star" class="w-5 h-5 text-secondary" />
					</div>
					<h3 class="text-xl font-bold text-secondary">Professional Overview</h3>
				</div>
				<p class="text-base-content/80 leading-relaxed">
					🌟 Full Stack Developer | AI Enthusiast | DevOps Specialist
				</p>
				<p class="text-base-content/70 mt-4 leading-relaxed">
					With a strong foundation in full stack development and cloud technologies, I have successfully
					delivered numerous projects, demonstrating proficiency in both frontend and backend
					development. My experience spans diverse industries, ensuring robust, scalable, and
					efficient solutions.
				</p>
			</div>

			<!-- Skills Card -->
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-accent/20 transition-all duration-300">
				<div class="flex items-center gap-3 mb-6">
					<div class="bg-accent/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:code-tags" class="w-5 h-5 text-accent" />
					</div>
					<h3 class="text-xl font-bold text-accent">Skills & Expertise</h3>
				</div>
				
				<div class="space-y-4">
					<div class="bg-base-200/50 rounded-lg p-4 border border-base-300/50">
						<div class="flex items-center gap-2 mb-2">
							<Icon icon="mdi:language-rust" class="w-5 h-5 text-orange-500" />
							<strong class="text-base-content">Languages & Frameworks:</strong>
						</div>
						<p class="text-base-content/70">Rust, SvelteKit, React, Python, C++, Java</p>
					</div>
					
					<div class="bg-base-200/50 rounded-lg p-4 border border-base-300/50">
						<div class="flex items-center gap-2 mb-2">
							<Icon icon="mdi:cloud" class="w-5 h-5 text-blue-500" />
							<strong class="text-base-content">Cloud Platforms:</strong>
						</div>
						<p class="text-base-content/70">AWS, Google Cloud</p>
					</div>
					
					<div class="bg-base-200/50 rounded-lg p-4 border border-base-300/50">
						<div class="flex items-center gap-2 mb-2">
							<Icon icon="mdi:tools" class="w-5 h-5 text-green-500" />
							<strong class="text-base-content">Tools & Technologies:</strong>
						</div>
						<p class="text-base-content/70">Docker, DevOps, SEO</p>
					</div>
					
					<div class="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
						<div class="flex items-center gap-2 mb-2">
							<Icon icon="mdi:heart" class="w-5 h-5 text-primary" />
							<strong class="text-primary">Primary Tools:</strong>
						</div>
						<p class="text-base-content/70">Rust, SvelteKit</p>
					</div>
				</div>
			</div>

			<!-- Academic Achievements Card -->
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-primary/20 transition-all duration-300">
				<div class="flex items-center gap-3 mb-4">
					<div class="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:school" class="w-5 h-5 text-primary" />
					</div>
					<h3 class="text-xl font-bold text-primary">Academic Achievements</h3>
				</div>
				
				<div class="space-y-3">
					<div class="flex items-start gap-3">
						<Icon icon="mdi:trophy" class="w-5 h-5 text-yellow-500 mt-0.5" />
						<p class="text-base-content/80">Graduated at the top of my class in Computer Science</p>
					</div>
					<div class="flex items-start gap-3">
						<Icon icon="mdi:brain" class="w-5 h-5 text-purple-500 mt-0.5" />
						<p class="text-base-content/80">
							Currently pursuing postgraduate studies with a focus on Reinforcement Learning and
							AI, specializing in human-AI cooperation
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Right Column -->
		<div class="space-y-8">
			<!-- DevOps & SEO Card -->
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-secondary/20 transition-all duration-300">
				<div class="flex items-center gap-3 mb-4">
					<div class="bg-secondary/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:rocket-launch" class="w-5 h-5 text-secondary" />
					</div>
					<h3 class="text-xl font-bold text-secondary">DevOps & SEO</h3>
				</div>
				
				<div class="space-y-3">
					<div class="flex items-start gap-3">
						<Icon icon="mdi:pipe" class="w-5 h-5 text-blue-500 mt-0.5" />
						<p class="text-base-content/80">Expert in implementing continuous integration/continuous deployment (CI/CD) pipelines</p>
					</div>
					<div class="flex items-start gap-3">
						<Icon icon="mdi:search-web" class="w-5 h-5 text-green-500 mt-0.5" />
						<p class="text-base-content/80">
							Skilled in optimizing web applications for search engines, ensuring high visibility and
							performance
						</p>
					</div>
				</div>
			</div>

			<!-- Personal Projects Card -->
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-accent/20 transition-all duration-300">
				<div class="flex items-center gap-3 mb-4">
					<div class="bg-accent/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:hammer-wrench" class="w-5 h-5 text-accent" />
					</div>
					<h3 class="text-xl font-bold text-accent">Personal Projects</h3>
				</div>
				
				<p class="text-base-content/80 leading-relaxed">
					I primarily utilize Rust and SvelteKit for my personal projects, leveraging their capabilities
					to build high-performance, user-friendly applications. These projects highlight my passion for
					exploring innovative solutions and pushing the boundaries of technology.
				</p>
			</div>

			<!-- AI & Research Card -->
			<div class="bg-gradient-to-br from-base-100 to-base-200 p-6 rounded-xl shadow-2xl border border-base-300 hover:shadow-primary/20 transition-all duration-300">
				<div class="flex items-center gap-3 mb-4">
					<div class="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center">
						<Icon icon="mdi:robot" class="w-5 h-5 text-primary" />
					</div>
					<h3 class="text-xl font-bold text-primary">AI & Reinforcement Learning</h3>
				</div>
				
				<p class="text-base-content/80 leading-relaxed">
					My academic research is focused on advancing the field of AI, particularly in developing
					systems that enhance human-AI cooperation. This involves creating intelligent agents that can
					learn and adapt to complex environments, driving the future of AI technologies.
				</p>
			</div>

			<!-- Call to Action Card -->
			<div class="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-xl shadow-2xl border border-secondary/30 hover:shadow-secondary/20 transition-all duration-300">
				<div class="text-center">
					<div class="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<Icon icon="mdi:handshake" class="w-6 h-6 text-secondary" />
					</div>
					<h3 class="text-lg font-bold text-secondary mb-2">Let's Collaborate!</h3>
					<p class="text-base-content/70 text-sm">
						Feel free to reach out for collaborations, consultations, or any exciting projects in the
						realm of full stack development, DevOps, or AI!
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
