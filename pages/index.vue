<template>
	<main>
		<HeroBanner />
		<div class="py-20 md:py-40">
			<AlternateFeature />
		</div>
		<div class="py-20 md:py-40 bg-slate-50">
			<UniqueSellingPointsFeature />
		</div>
		<div class="py-20 md:py-40">
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
		}
	},
	components: { ContactForm }
}
</script>
