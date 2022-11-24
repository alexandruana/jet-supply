<template>
	<footer
		class="p-4 mt-20 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900"
	>
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-wrap justify-between items-start">
				<NuxtLink
					to="/"
					class="
						flex
						items-center
						mb-4
						sm:mb-0
						text-2xl
						font-semibold
						w-full
						md:max-w-min
					"
				>
					Jet<span class="text-jet-light">Supply</span>
				</NuxtLink>

				<div class="mb-8 md:mb-0">
					<h2
						class="
							mb-6
							text-sm
							font-semibold
							text-gray-900
							uppercase
							dark:text-white
						"
					>
						Navigation
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<NuxtLink to="/" class="hover:text-gray-900">
								Home
							</NuxtLink
							>
						</li>
						<li class="mb-4">
							<NuxtLink to="/about" class="hover:text-gray-900">
								About
							</NuxtLink
							>
						</li>
						<li class="mb-4">
							<NuxtLink
								to="/privacypolicy"
								class="hover:text-gray-900"
							>
								Privacy policy
							</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/faq"
								class="hover:text-gray-900"
							>
								FAQ
							</NuxtLink
							>
						</li>
					</ul>
				</div>
				<div class="mb-8 md:mb-0">
					<h2
						class="
							mb-6
							text-sm
							font-semibold
							text-gray-900
							uppercase
							dark:text-white
						"
					>
						Contact
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="mailto:sales@jet-supply.com">
								sales@jet-supply.com
							</a>
						</li>
						<li class="mb-4">
							<p>+48 603 951 000</p>
						</li>
						<li>
							Henryka Sienkiewicza 85/87, <br />lok.8, 95-057 Łódź
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr
			class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
		/>
		<span
			class="
				block
				text-sm text-gray-500
				sm:text-center
				dark:text-gray-400
			"
		>
			© 2022
			<NuxtLink to="/">JetSupply</NuxtLink>. All Rights Reserved.
		</span>
	</footer>
</template>

<script>
export default {
	name: 'TailwindFooter'
}
</script>
