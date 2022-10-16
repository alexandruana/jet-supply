<template>
	<main class="w-full px-20 pt-20">
		<h2 class="leading-8 font-extrabold tracking-tight text-jet-dark text-4xl md:text-2xl mb-8">Itinerary</h2>
		<div class="grid grid-cols-3">
			<div class="col-span-2">
				<LegInput />
			</div>
			<div class="col-span-1">
				<AircraftOptions />
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Offers',
	layout: 'dashboard',
	head() {
		return {
			title: 'Offers',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content:
						'Admin Dashboard'
				}
			]
		}
	},
	data() {
		return {
			show: true
		}
	}
}
</script>