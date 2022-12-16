<template>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative bg-white">
		<div class="container px-4 md:px-6">
			<div
				class="
					flex
					items-center
					justify-between
					border-b-2 border-gray-100
					py-5
					md:justify-start md:space-x-10
				"
			>
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<NuxtLink to="/" class="text-2xl font-semibold">
						Jet<span class="text-jet-light">Supply</span>
					</NuxtLink>
				</div>
				<div class="-my-2 -mr-2 md:hidden">
					<button
						type="button"
						class="
							inline-flex
							items-center
							justify-center
							rounded-md
							bg-white
							p-2
							text-gray-400
							hover:bg-gray-100 hover:text-gray-500
							focus:outline-none
							focus:ring-2
							focus:ring-inset
							focus:ring-indigo-500
						"
						aria-expanded="false"
						@click="toggle"
					>
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/bars-3 -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
				<nav class="hidden space-x-10 md:flex">
					<NuxtLink
						to="/"
						class="
							text-base
							font-medium
							text-gray-500
							hover:text-gray-900
						"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/services"
						class="
							text-base
							font-medium
							text-gray-500
							hover:text-gray-900
						"
					>
						Services
					</NuxtLink>
					<NuxtLink
						to="/about"
						class="
							text-base
							font-medium
							text-gray-500
							hover:text-gray-900
						"
					>
						About
					</NuxtLink>
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
		<transition
			name="accordion"
			@enter="start"
			@after-enter="end"
			@before-leave="start"
			@after-leave="end"
		>
			<div
				v-show="isOpen"
				class="
					absolute
					z-50
					inset-x-0
					top-0
					z-100
					origin-top-right
					transform
					transition
					md:hidden
				"
			>
				<div
					class="
						rounded-lg
						bg-white
						shadow-lg
						ring-1 ring-black ring-opacity-5
					"
				>
					<div class="px-4 pt-5 pb-6">
						<div class="flex items-center justify-between">
							<NuxtLink to="/" class="text-2xl font-semibold">
								Jet<span class="text-jet-light">Supply</span>
							</NuxtLink>
							<div class="-my-2 -mr-2">
								<button
									type="button"
									class="
										inline-flex
										items-center
										justify-center
										rounded-md
										bg-white
										p-2
										text-gray-400
										hover:bg-gray-100 hover:text-gray-500
										focus:outline-none
										focus:ring-2
										focus:ring-inset
										focus:ring-indigo-500
									"
									@click="toggle"
								>
									<span class="sr-only">Close menu</span>
									<!-- Heroicon name: outline/x-mark -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="mt-6">
							<nav class="grid gap-y-8">
								<NuxtLink
									to="/"
									@click.native="toggle"
									class="
										-m-3
										flex
										items-center
										rounded-md
										p-3
										hover:bg-gray-50
									"
								>
									<!-- Heroicon name: outline/chart-bar -->
									<svg
										class="
											h-6
											w-6
											flex-shrink-0
											text-jet-light
										"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
									<span
										class="
											ml-3
											text-base
											font-medium
											text-gray-900
										"
									>
										Home
									</span>
								</NuxtLink>
								<NuxtLink
									to="/services"
									@click.native="toggle"
									class="
										-m-3
										flex
										items-center
										rounded-md
										p-3
										hover:bg-gray-50
									"
								>
									<!-- Heroicon name: outline/chart-bar -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6 text-jet-light"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
										/>
									</svg>

									<span
										class="
											ml-3
											text-base
											font-medium
											text-gray-900
										"
									>
										Services
									</span>
								</NuxtLink>
								<NuxtLink
									to="/about"
									@click.native="toggle"
									class="
										-m-3
										flex
										items-center
										rounded-md
										p-3
										hover:bg-gray-50
									"
								>
									<!-- Heroicon name: outline/chart-bar -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6 text-jet-light"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
										/>
									</svg>

									<span
										class="
											ml-3
											text-base
											font-medium
											text-gray-900
										"
									>
										About
									</span>
								</NuxtLink>
								<NuxtLink
									to="/privacypolicy"
									@click.native="toggle"
									class="
										-m-3
										flex
										items-center
										rounded-md
										p-3
										hover:bg-gray-50
									"
								>
									<svg
										class="
											h-6
											w-6
											flex-shrink-0
											text-jet-light
										"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
										/>
									</svg>

									<span
										class="
											ml-3
											text-base
											font-medium
											text-gray-900
										"
									>
										Privacy policy
									</span>
								</NuxtLink>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			isOpen: false
		}
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen
		},
		start(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		end(el) {
			el.style.height = ''
		}
	}
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
	will-change: height, opacity;
	transition: height 0.3s ease, opacity 0.3s ease;
	overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
	height: 0 !important;
	opacity: 0;
}
</style>>
