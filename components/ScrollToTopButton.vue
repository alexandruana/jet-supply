<template>
	<div
		ref="scrollTopButton"
		class="
			invisible
			sticky
			w-full
			flex
			justify-end
			bottom-0
			pb-3
			pr-5
			lg:pr-16
			transition
		"
	>
		<div class="text-gray-400 hover:text-blue-400 transition">
			<button @click="scrollToTop">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10 text-jet-light"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ScrollToTopButton',
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},

	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	},

	methods: {
		handleScroll() {
			const scrollBtn = this.$refs.scrollTopButton

			if (window.scrollY > 0) {
				scrollBtn.classList.remove('invisible')
			} else {
				scrollBtn.classList.add('invisible')
			}
		},
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
}
</script>