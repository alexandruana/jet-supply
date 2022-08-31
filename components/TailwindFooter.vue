<template>
	<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
		<div class="max-w-7xl mx-auto">
			<div class="sm:flex sm:items-center sm:justify-between">
				<a href="/" class="flex items-center mb-4 sm:mb-0">
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JetSupply</span>
				</a>

				<div class="mb-8 md:mb-0">
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<NuxtLink to="/" class="hover:underline">Home</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/privacypolicy" class="hover:underline">Privacy policy</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="mb-8 md:mb-0">
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="mailto:sales@jet-supply.com" class="hover:underline">sales@jet-supply.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr class=" my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
			© 2022 <NuxtLink to="/">JetSupply</NuxtLink>. All Rights Reserved.
		</span>
	</footer>
</template>

<script>
export default {
	name: 'TailwindFooter'
}
</script>
