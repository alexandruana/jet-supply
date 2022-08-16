<template>
	<main>
		<HeroBanner />
		<AlternateFeature />
		<UniqueSellingPointsFeature />
	</main>
</template>

<script>
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
					content: 'Home page.'
				}
			]
		}
	}
}
</script>
