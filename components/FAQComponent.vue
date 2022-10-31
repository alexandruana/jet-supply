<template>
	<div class="accordion__item mb-3 py-4 border-b border-slate-200">
		<div
			class="accordion__trigger text-lg font-medium flex justify-between cursor-pointer mb-2"
			:class="{ accordion__trigger_active: visible }"
			@click="open()"
		>
			<slot name="title"></slot>
			<svg
				class="w-3 transition-all duration-300 transform text-jet-light"
				:class="{
					'rotate-180': visible,
					'rotate-0': !visible
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
		</div>
		
		<transition
			name="accordion"
			@enter="start"
			@after-enter="end"
			@before-leave="start"
			@after-leave="end"
		>
			>
			<div
				v-show="visible"
				class="accordion__content text-gray-500"
			>
				<slot name="content"></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'FAQComponent',
	inject: ["Accordion"],
	data() {
		return {
			index: null
		}
	},
	computed: {
		visible() {
			return this.index === this.Accordion.active
		}
	},
	created() {
		this.index = this.Accordion.count++
	},
	methods: {
		open() {
			if (this.visible) {
				this.Accordion.active = null
			} else {
				this.Accordion.active = this.index
			}
		},
		start(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		end(el) {
			el.style.height = ''
		}
	},
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
</style>