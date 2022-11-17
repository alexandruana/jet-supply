<template>
	<main>
		<HeroBanner />
		<div class="py-10 md:py-20">
			<AlternateFeature />
		</div>
		<div class="py-10 md:py-20 bg-slate-50">
			<UniqueSellingPointsFeature />
		</div>
		<div class="py-10 md:py-20">
			<FAQFeature />
		</div>
		<div class="py-10 md:py-20 pb-10">
			<ContactForm />
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
					content: ''
				}
			]
		}
	},
}
</script>
