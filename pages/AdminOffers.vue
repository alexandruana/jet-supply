<template>
	<main class="w-full px-20 py-20">
		<div class="grid grid-cols-3 md:gap-5">
			<div class="col-span-2">
				<div class="grid grid-cols-1 md:gap-10">
					<LegInput />
					<LegTable />
				</div>
			</div>
			<div class="col-span-1">
				<AircraftOptions />
			</div>
		</div>
	</main>
</template>

<script>
import LegTable from '~/components/LegTable.vue'
export default {
	components: { LegTable },
	name: 'AdminOffers',
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