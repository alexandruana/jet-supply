<template>
	<main>
		<HeroBanner />
		<div class="py-14">
			<AlternateFeature />
		</div>
		<div class="py-14 bg-slate-50">
			<UniqueSellingPointsFeature />
		</div>
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
					content: 'Home page'
				}
			]
		}
	}
}
</script>
