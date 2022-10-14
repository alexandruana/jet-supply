<template>
	<main class="max-w-7xl mx-auto">
		<FAQComponent></FAQComponent>
	</main>
</template>

<script>
import FAQComponent from '~/components/FAQComponent.vue'
export default {
	components: { FAQComponent },
	name: 'TestArea',
	head () {
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
	data () {
		return {
			show: true
		}
	}
}
</script>
