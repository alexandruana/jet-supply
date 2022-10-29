<template>
	<div class="max-w-7xl mx-auto">
		<div accordion>
			<div accordion-section class="mb-4 rounded-t-1">
				<h5 class="mb-0">
					<button
						section-trigger
						class="
							relative
							flex
							items-center
							w-full
							p-4
							font-semibold
							text-left
							transition-all
							border-b border-solid
							cursor-pointer
							border-slate-100
							ease-soft-in
							text-slate-700
							rounded-t-1
						"
						aria-expanded="true"
					>
						How do I order?
						<i
							section-open-icon
							class="
								absolute
								right-0
								hidden
								pt-1
								mr-4
								leading-tight
								fa fa-plus
								text-xs
							"
						></i>
						<i
							section-close-icon
							class="
								absolute
								right-0
								pt-1
								mr-4
								leading-tight
								fa fa-minus
								text-xs
							"
						></i>
					</button>
				</h5>
				<div
					section-content
					class="
						overflow-hidden
						transition-all
						ease-soft-in-out
						duration-350
					"
				>
					<div class="p-4 leading-normal text-sm opacity-80">
						We’re not always in the position that we want to be at.
						We’re constantly growing. We’re constantly making
						mistakes. We’re constantly trying to express ourselves
						and actualize our dreams. If you have the opportunity to
						play this game of life you need to appreciate every
						moment. A lot of people don’t appreciate the moment
						until it’s passed.
					</div>
				</div>
			</div>
		</div>
	</div>
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
					content: 'Test page'
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
					answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq2',
					question: 'Lorem ipsum dolor sit amet?',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq3',
					question: 'Lorem ipsum dolor sit amet?',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				},
				{
					id: 'faq4',
					question: 'Lorem ipsum dolor sit amet?',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur dignissim odio ut congue. Mauris justo mauris, molestie sed pellentesque in, pretium eget est. Nulla eros elit, mattis vitae neque sit amet, vehicula tincidunt arcu. Sed sit amet consectetur lacus. Vestibulum condimentum metus sed dui cursus blandit.'
				}
			],
			currentlyActiveIndex: null,
			isActive: null
		}
	}
}
</script>