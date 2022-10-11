<template>
	<main class="max-w-7xl">
		<button v-on:click="show = !show">
			Toggle
		</button>
		<transition name="fade">
			<LazyTestComponent v-show="show" />
		</transition>
	</main>
</template>

<script>
export default {
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
