<template>
	<main>
		<HeroBanner />
		<div class="py-20">
			<AlternateFeature />
		</div>
		<div class="py-20 bg-slate-50">
			<UniqueSellingPointsFeature />
		</div>
		<div class="py-20 pb-10">
			<ContactForm />
		</div>
	</main>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
export default {
	name: 'IndexPage',
	head () {
		return {
			title: 'Home',
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
	components: { ContactForm }
}
</script>
