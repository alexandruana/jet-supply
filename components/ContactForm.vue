<template>
	<form name="Contact" data-netlify="true" method="POST" class="mx-auto max-w-lg">
		<p class="font-medium mb-6">Send us a message</p>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="grid-first-name">
					First Name
				</label>
				<input
					class="appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="grid-first-name"
					type="text"
					name="first_name"
					placeholder="Jane">
			</div>
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="grid-first-name">
					Last Name
				</label>
				<input
					class="appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="grid-first-name"
					type="text"
					name="last_name"
					placeholder="Doe">
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="grid-password">
					E-mail
				</label>
				<input
					class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="email"
					type="email"
					name="email"
					placeholder="jane@doe.com">
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2" for="grid-password">
					Message
				</label>
				<textarea
					name="message"
					class=" no-resize appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
					id="message">
				</textarea>
				<p>By submitting this form you agree to our <NuxtLink to="/privacypolicy" class="text-jet-light hover:text-jet-dark">privacy policy</NuxtLink> which explains how we may collect, use and disclose your personal information including to third parties.</p>
			</div>
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3">
				<button
					class="shadow bg-jet-light hover:bg-jet-dark focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded"
					type="submit">
					Send
				</button>
			</div>
			<div class="md:w-2/3"></div>
		</div>
	</form>
</template>

<style>
.nuxt-logo {
	height: 180px;
}
</style>
