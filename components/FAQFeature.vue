<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			<div class="col-span-1">
				<h2
					class="
						text-base text-jet-light
						font-semibold
						tracking-wide
						uppercase
					"
				>
					FAQ
				</h2>
				<p
					class="
						mt-2
						text-3xl
						leading-8
						font-extrabold
						tracking-tight
						text-gray-900
						sm:text-4xl
					"
				>
					Frequently asked questions
				</p>
				<p class="mt-4 max-w-2xl text-lg text-gray-500">
					Got questions? Let us clear the air by addressing some of the most popular questions and concerns when it comes to chartering a private aircraft.
				</p>
			</div>
			<div class="col-span-1">
				<FAQComponent
					v-for="(item, index) in faqs"
					:key="item.id"
					:item="item"
					:active-index=" currentlyActiveIndex === index ? (index = null) : currentlyActiveIndex "
					:item-index="index"
					@update:itemIndex="currentlyActiveIndex = $event"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FAQFeature',
	data() {
		return {
			faqs: [
				{ 
					id: 'faq1', 
					question: 'Why charter a private jet?', 
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq2',
					question: 'How to charter an aircraft?', 
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq3',
					question: 'What payment methods are accepted?',
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq4',
					question: 'Where can I fly?',
					answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
			],
			currentlyActiveIndex: null,
			isActive: null
		}
	}
}
</script>