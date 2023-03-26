<template>
	<main>
		<HeroBanner />
		<div class="py-10 md:py-20">
			<AlternateFeature />
		</div>
		<div class="py-10 md:py-20 bg-slate-50 bg-pattern">
			<UniqueSellingPointsFeature />
		</div>
		<div class="py-10 md:py-20">
			<StepFeature />
		</div>
		<div class="py-10 md:py-20 bg-slate-50 bg-pattern">
			<FAQFeature />
		</div>
		<div class="py-10 md:py-20 pb-10">
			<ContactFeature />
		</div>
	</main>
</template>

<script>
export default {
	name: 'IndexPage',
	head () {
		return {
			title: 'Private Jet Charter',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'home-description',
					name: 'description',
					content: 'On-demand private jet charter flights. Fly on a global network of 2,500 aircraft and take advantage of full flexibility, privacy and a wide array of payment methods'
				}
			]
		}
	},
}
</script>
