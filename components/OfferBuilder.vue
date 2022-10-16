<template>
	<div
		class="
			new__offer my-20
		"
	>
		<h2 class="leading-8 font-extrabold tracking-tight text-jet-dark sm:text-4xl mb-8">Itinerary</h2>
		<div
			class="flex flex-wrap flex-row justify-between"
		>
			<div class="px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
					for="departure_airport"
				>
					Departure
				</label>
				<input
					id="departure_airport"
					v-model="departureAirport"
					class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="text"
					name="departureAirport"
				/>
			</div>
			<div class="px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
					for="departure_airport"
				>
					Arrival
				</label>
				<input
					id="arrival_airport"
					v-model="arrivalAirport"
					class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="text"
					name="arrivalAirport"
				/>
			</div>
			<div class="px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
					for="date"
				>
					Date
				</label>
				<input
					id="date"
					v-model="date"
					class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="date"
					name="date"
				/>
			</div>
			<div class="px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
					for="std"
				>
					Time
				</label>
				<input
					id="std"
					v-model="time"
					class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="time"
					min="00:00"
					max="23:59"
					name="std"
				/>
			</div>
			<div class="px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
					for="pax"
				>
					PAX
				</label>
				<input
					id="pax"
					v-model="pax"
					class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="number"
					name="pax"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OfferBuilder',
	data() {
		return {
			departureAirport:
				'',
			arrivalAirport: '',
			time: '',
			date: ''
		}
	}
}
</script>