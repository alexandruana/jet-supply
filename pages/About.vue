<template>
	<div class="container mx-auto"></div>
</template>

<script>
export default {
	name: 'About',
	head () {
		return {
			title: 'About',
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