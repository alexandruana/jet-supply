<template>
	<main class="max-w-7xl mx-auto">
		<FAQComponent
			v-for="(item, index) in faqs"
			:key="item.id"
			:item="item"
			:active-index=" currentlyActiveIndex === index ? (index = null) : currentlyActiveIndex "
			:item-index="index"
			@update:itemIndex="currentlyActiveIndex = $event"
		/>
	</main>
</template>

<script>
export default {
	name: 'TestArea',
	layout: 'blank',
	head() {
		return {
			title: 'TestArea',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content:
						'Test page'
				}
			]
		}
	},
	data() {
		return {
			faqs: [
				{ 
					id: 'faq1', 
					question: 'Lorem ipsum dolor sit amet?', 
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq2',
					question: 'Lorem ipsum dolor sit amet?', 
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq3',
					question: 'Lorem ipsum dolor sit amet?',
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq4',
					question: 'Lorem ipsum dolor sit amet?',
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
			],
			currentlyActiveIndex: null,
			isActive: null
		}
	}
}
</script>