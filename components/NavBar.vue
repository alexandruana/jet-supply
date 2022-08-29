<template>
	<div class="relative bg-transparent">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div
				class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<a href="#"
						class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">JetSupply</a>
				</div>
				<div class="-mr-2 -my-2 md:hidden">
					<button type="button"
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						aria-expanded="false">
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/menu -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
				<nav class="hidden md:flex space-x-10">
					<a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
					<a href="/privacypolicy" class="text-base font-medium text-gray-500 hover:text-gray-900"> Privacy
						policy </a>
				</nav>
			</div>
		</div>

		<!--
			Mobile menu, show/hide based on mobile menu state.

			Entering: "duration-200 ease-out"
			From: "opacity-0 scale-95"
			To: "opacity-100 scale-100"
			Leaving: "duration-100 ease-in"
			From: "opacity-100 scale-100"
			To: "opacity-0 scale-95"
		-->
		<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
			<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<a href="/" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">JetSupply</a>
						</div>
						<div class="-mr-2">
							<button type="button"
								@click="toggle"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x-mark -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>

					<transition>
						<div class="mt-6">
							<nav class="grid gap-y-8">
								<a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
									<!-- Heroicon name: outline/chart-bar -->
									<svg
										class="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true">
										<path stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
									</svg>
									<span class="ml-3 text-base font-medium text-gray-900"> Home </span>
								</a>

								<a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
									<!-- Heroicon name: outline/cursor-arrow-rays -->
									<svg
										class="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true">
										<path stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
									</svg>
									<span class="ml-3 text-base font-medium text-gray-900"> Privacy Policy </span>
								</a>
							</nav>
						</div>
					</transition>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	data () {
		return {
			isOpen: false
		}
	},
	methods: {
		toggle () {
			this.isOpen = !this.isOpen
		}
	}
}
</script>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
