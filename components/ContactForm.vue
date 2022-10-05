<template>
	<div class="max-w-7xl mx-auto grid gap-y-5 md:gap-y-0 grid-cols-1 md:grid-cols-3 px-4 lg:px-8">
		<div class="p-8 md:p-12 border md:border-r-0 rounded-md md:rounded-tr-none md:rounded-br-none bg-gradient-tui">
			<form
				data-netlify="true"
				name="contact"
				method="POST"
				class="mx-auto"
				action="/"
			>
				<input type="hidden" name="contact" value="contact">
				<div class="flex flex-wrap -mx-3">
					<div class="w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="first_name">
							First Name
						</label>
						<input
							id="first_name"
							class="appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							type="text"
							name="first_name"
							placeholder="Jane"
							required
						>
					</div>
					<div class="w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="last_name">
							Last Name
						</label>
						<input
							id="last_name"
							class="appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							type="text"
							name="last_name"
							placeholder="Doe"
							required
						>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-3 md:mb-6">
					<div class="w-full px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="email">
							E-mail
						</label>
						<input
							id="grid_email"
							class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							type="email"
							name="email"
							placeholder="jane@doe.com"
							required
						>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-3 md:mb-6">
					<div class="w-full px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="message">
							Message
						</label>
						<textarea
							id="message"
							class=" no-resize appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
							name="message"
							required
						/>
						<p class="text-sm text-slate-400">
							By submitting this form you agree to our
							<NuxtLink to="/privacypolicy" class="text-jet-light hover:text-jet-dark">
								privacy policy
							</NuxtLink> which explains how we may collect, use and disclose your personal information including to third parties.
						</p>
					</div>
				</div>
				<div class="md:flex md:items-center">
					<div class="md:w-1/3">
						<button
							class="shadow bg-jet-light hover:bg-jet-dark focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded"
							type="submit"
						>
							Send
						</button>
					</div>
					<div class="md:w-2/3" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactForm'
}
</script>

<style>
.nuxt-logo {
	height: 180px;
}
</style>
