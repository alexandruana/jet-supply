<template>
	<div class="max-w-7xl mx-auto">
		<p>Test</p>
	</div>
</template>

<script>
export default {
	name: 'TestArea',
	data() {
		return {}
	},
	head() {
		return {
			title: 'TestArea',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: 'Test page'
				}
			]
		}
	},
}
</script>