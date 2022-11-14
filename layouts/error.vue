<template>
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1
				v-if="error.statusCode === 404"
				class="
					mb-4
					text-7xl
					tracking-tight
					font-extrabold
					lg:text-9xl
					text-jet-light
					dark:text-jet-light
				"
			>
				404
			</h1>
			<h1
				v-else
				class="
					mb-4
					text-7xl
					tracking-tight
					font-extrabold
					lg:text-9xl
					text-jet-light
					dark:text-jet-light"
			>
				An error occurred
			</h1>
			<p
				class="
					mb-4
					text-3xl
					tracking-tight
					font-bold
					text-gray-900
					md:text-4xl
					dark:text-white
				"
			>
				Something's missing.
			</p>
			<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
				Sorry, we can't find that page. You'll find lots to explore on
				the home page.
			</p>
			<NuxtLink
				to="/"
				class="
					inline-flex
					text-white
					bg-jet-dark
					hover:bg-jet-light
					focus:ring-4 focus:outline-none focus:ring-primary-300
					font-medium
					rounded-lg
					text-sm
					px-5
					py-2.5
					text-center
					dark:focus:ring-primary-900
					transition-all duration-200
					my-4
				"
			>
				Back to Homepage
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'error',
	props: ['error']
}
</script>