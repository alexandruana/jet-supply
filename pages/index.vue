<template>
	<main>
		<HeroBanner />
		<AlternateFeature />
		<UniqueSellingPointsFeature />
		<div>
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
					hid: 'description',
					name: 'description',
					content: 'Home page'
				}
			]
		}
	},
	components: { ContactForm }
}
</script>
