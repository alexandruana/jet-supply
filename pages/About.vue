<template>
	<div class="container mx-auto">
		<div class="relative mx-auto pt-20 text-center pb-24">
			<h1
				class="
					text-4xl
					font-extrabold
					tracking-tight
					text-jet-light
					sm:text-5xl
				"
			>
				{{ title }}
			</h1>
			<p
				v-if="description"
				class="mt-4 text-base leading-7 text-slate-600"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			title: 'About',
			description: ''
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: 'Find out more about our company and the way we can get you anywhere, anytime, with our range of services.'
				}
			]
		}
	}
}
</script>

<style lang="scss">

</style>