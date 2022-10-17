<template>
	<div
		class="
			leg__input
		"
	>
		<h2 class="leading-8 font-extrabold tracking-tight text-jet-dark text-4xl md:text-2xl mb-8">Itinerary</h2>
		<div
			class="flex flex-wrap flex-row align-center"
		>
			<div class="mr-4 mb-3 md:mb-6 md:mb-0">
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
					placeholder="Departure airport"
				/>
			</div>
			<div class="mr-4 mb-3 md:mb-6 md:mb-0">
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
					placeholder="Arrival airport"
				/>
			</div>
			<div class="mr-4 mb-3 md:mb-6 md:mb-0">
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
			<div class="mr-4 mb-3 md:mb-6 md:mb-0">
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
			<div class="mr-4 mb-3 md:mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
					for="pax"
				>
					PAX
				</label>
				<input
					id="pax"
					v-model="pax"
					class="appearance-none block bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center"
					type="number"
					name="pax"
					min="0"
					max="20"
				/>
			</div>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8 text-gray-400 hover:text-jet-light"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LegInput',
	data() {
		return {
			departureAirport:
				'',
			arrivalAirport: '',
			time: '',
			date: '',
			pax: ''
		}
	},
}
</script>

<style>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>