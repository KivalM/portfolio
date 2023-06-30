<script lang="ts">
</script>

<section>
    <!-- personal contact form -->
    <div class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-4xl font-bold">Contact Me</h1>
        <p class="text-center">
            I'm always open to new opportunities and collaborations.
        </p>
        <p class="text-center">Feel free to reach out to me via email.</p>
        <div class="flex flex-row items-center justify-center">
            <a
                href="mailto:kivalm@protonmail.com"
                class="text-2xl font-bold text-center"
            >
                <span class="text-blue-500">kivalm@</span>protonmail.com
            </a>
        </div>

        <!-- or leave a message in the form below and ill get back to you whenever -->
        <p class="text-center">
            Or leave a message in the form below and I'll get back to you
            whenever.
        </p>

        <!-- form -->
        <form
            action="https://formspree.io/f/mjvqbjlv"
            method="POST"
            class="flex flex-col gap-4"
        >
            <!-- name -->
            <div class="flex flex-col gap-1">
                <label for="name" class="text-xl font-bold">
                    Name <span class="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    class="p-2 border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    required
                />
            </div>

            <!-- email -->
            <div class="flex flex-col gap-1">
                <label for="email" class="text-xl font-bold">
                    Email <span class="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    class="p-2 border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    required
                />
            </div>

            <!-- message -->
            <div class="flex flex-col gap-1">
                <label for="message" class="text-xl font-bold">
                    Message <span class="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder=""
                    class="p-2 border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    required
                />
            </div>

            <!-- submit -->
            <button
                type="submit"
                class="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
                Submit
            </button>
        </form>
    </div>
</section>
