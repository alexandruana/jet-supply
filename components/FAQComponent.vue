<template>
	<div>
		<button
			@click="toggleAccordion()"
			class="
				flex
				items-center
				justify-between
				w-full
				py-5
				font-medium
				text-left text-gray-500
				border-b border-gray-200
				dark:border-gray-700 dark:text-gray-400
			"
			:aria-expanded="isOpen"
			:aria-controls="`collapse${_uid}`"
		>
			<span>{{ question }}</span>
			<svg
				class="w-3 transition-all duration-200 transform"
				:class="{
					'rotate-180': isOpen,
					'rotate-0': !isOpen
				}"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 10"
				aria-hidden="true"
			>
				<path
					d="M15 1.2l-7 7-7-7"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<div v-show="isOpen" :id="`collapse${_uid}`" class="py-5 text-gray-500">
			<p>{{ answer }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FAQComponent',
	data() {
		return {
			isOpen: false
		}
	},
	methods: {
		toggleAccordion() {
			this.isOpen = !this.isOpen
		}
	},
	props: ['question', 'answer']
}
</script>
