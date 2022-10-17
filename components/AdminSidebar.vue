<template>
	<aside
		class="w-64 bg-gray-50"
		aria-label="Sidebar"
	>
		<div
			class="
				overflow-y-auto
				py-4
				px-3
				rounded
			"
		>
			<NuxtLink
				to="/"
				class="block text-center text-2xl font-semibold py-10"
			>
				Jet<span class="text-jet-light">Supply</span
				>
			</NuxtLink>
			<ul
				class="
					space-y-2
				"
			>
				<li>
					<NuxtLink
						to="/adminoffers"
						class="
							flex
							items-center
							p-2
							text-base
							font-normal
							text-gray-900
							rounded-lg
							dark:text-white
							hover:bg-gray-100
							dark:hover:bg-gray-700
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none" viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
						<span class="ml-3">
							Offers
						</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'AdminSidebar'
}
</script>

<style scoped>
a.nuxt-link-active {
	font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
 	color: #00A9E2;
	background: #f3f4f6;
}
</style>