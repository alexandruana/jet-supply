<template>
	<div>
		<button
			@click="updateIndex()"
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
			<span>{{ item.question }}</span>
			<svg
				class="w-3 transition-all duration-300 transform"
				:class="{
					'rotate-180': activeIndex == itemIndex,
					'rotate-0': !activeIndex == itemIndex
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
		<div
			v-show="activeIndex === itemIndex" :id="`collapse${_uid}`" 
			class="transition-all duration-200 transform py-5 text-gray-500"
			:class="{
				'bg-blue-400': activeIndex == itemIndex,
				'bg-red-400': !activeIndex == itemIndex 
			}"
		>
			<p>{{ item.answer }}</p>
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
	props: {
		item: {
			type: Object,
			default: () => {}
		},
		activeIndex: {
			type: Number,
			default: null
		},
		itemIndex: {
			type: Number,
			default: null
		},
	},
	methods: {
		toggleAccordion() {
			this.isOpen = !this.isOpen
		},
		updateIndex() {
			console.log('index updated:', this.itemIndex)
	      	this.$emit('update:itemIndex', this.itemIndex)
		}
	},
}
</script>
