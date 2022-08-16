<template>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			Here comes the policy.
		</div>
	</main>
</template>

<script>
export default {
	name: 'PrivacyPolicy',
	head () {
		return {
			title: 'Privacy Policy',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: 'Privacy policy'
				}
			]
		}
	}
}
</script>
