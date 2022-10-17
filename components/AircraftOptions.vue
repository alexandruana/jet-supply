<template>
	<div
		class="
			mb-3
			md:mb-6
			md:mb-0
		"
	>
		<h2 class="leading-8 font-extrabold tracking-tight text-jet-dark text-4xl md:text-2xl mb-8">Aircraft option</h2>
		<div class="grid grid-cols-2">
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
					for="aircraft"
				>
					Aircraft
				</label>
				<input
					id="aircraft"
					v-model="
						aircraft
					"
					class="
						appearance-none
						block
						bg-transparent
						text-gray-700
						border
						border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none
						focus:bg-white
						focus:border-gray-500
					"
					type="text"
					name="aircraft"
				/>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
					for="yom"
				>
					YoM / YoR
				</label>
				<input
					id="yom"
					v-model="
						yom
					"
					class="
						appearance-none
						block
						bg-transparent
						text-gray-700
						border
						border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none
						focus:bg-white
						focus:border-gray-500
					"
					type="text"
					name="yom"
				/>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
					for="bags"
				>
					Baggage capacity
				</label>
				<input
					id="bags"
					v-model="
						bags
					"
					class="
						appearance-none
						block
						bg-transparent
						text-gray-700
						border
						border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none
						focus:bg-white
						focus:border-gray-500
					"
					type="text"
					name="bags"
				/>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
					for="cabinMeasures"
				>
					Cabin measures
				</label>
				<input
					id="cabinMeasures"
					v-model="
						bags
					"
					class="
						appearance-none
						block
						bg-transparent
						text-gray-700
						border
						border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none
						focus:bg-white
						focus:border-gray-500
					"
					type="text"
					name="cabinMeasures"
				/>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
				>
					Flight attendant
				</label>
				<div class="flex flex-row">
					<div class="mr-4">
						<input type="radio" id="flightAttendat_true" value="Yes" v-model="flightAttendant" />
						<label for="flightAttendant_true">Yes</label> 
					</div>
					<div>
						<input type="radio" id="flightAttendant_false" value="No" v-model="flightAttendant" />
						<label for="flightAttendant_false">No</label>
					</div>
				</div>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
				>
					Galley
				</label>
				<div class="flex flex-row">
					<div class="mr-4">
						<input type="radio" id="galley_cold" value="Cold" v-model="galley" />
						<label for="galley_cold">Cold</label> 
					</div>
					<div>
						<input type="radio" id="galley_hot" value="Warm" v-model="galley" />
						<label for="galley_hot">Hot</label>
					</div>
				</div>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
				>
					Smoking
				</label>
				<div class="flex flex-row">
					<div class="mr-4">
						<input type="radio" id="smoking_true" value="Yes" v-model="smoking" />
						<label for="smoking_true">Yes</label> 
					</div>
					<div>
						<input type="radio" id="smoking_false" value="No" v-model="smoking" />
						<label for="smoking_false">No</label>
					</div>
				</div>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
				>
					WiFi
				</label>
				<div class="flex flex-row">
					<div class="mr-4">
						<input type="radio" id="wifi_true" value="Yes" v-model="wifi" />
						<label for="wifi_true">Yes</label> 
					</div>
					<div>
						<input type="radio" id="wifi_false" value="No" v-model="wifi" />
						<label for="wifi_false">No</label>
					</div>
				</div>
			</div>
			<div class="aircraft__spec">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
				>
					Toilet
				</label>
				<div class="flex flex-row">
					<div class="mr-4">
						<input type="radio" id="toilet_true" value="Yes" v-model="toilet" />
						<label for="toilet_true">Yes</label> 
					</div>
					<div>
						<input type="radio" id="toilet_false" value="No" v-model="toilet" />
						<label for="toilet_false">No</label>
					</div>
				</div>
			</div>
			<div class="aircraft__spec mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
				>
					Owner's approval
				</label>
				<div class="flex flex-row">
					<div class="mr-4">
						<input type="radio" id="oa_true" value="Yes" v-model="oa" />
						<label for="oa_true">Yes</label> 
					</div>
					<div>
						<input type="radio" id="oa_false" value="No" v-model="oa" />
						<label for="oa_false">No</label>
					</div>
				</div>
			</div>
			<div class="aircraft__spec col-span-2 mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
					for="price"
				>
					Price
				</label>
				<input
					id="price"
					v-model="
						price
					"
					class="
						appearance-none
						block
						bg-transparent
						text-gray-700
						border
						border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none
						focus:bg-white
						focus:border-gray-500
					"
					type="number"
					name="price"
				/>
			</div>
			<div class="aircraft__spec col-span-2 mb-5">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700
						text-xs
						font-normal
						mb-2
					"
					for="notes"
				>
					Notes / Remarks
				</label>
				<textarea
					id="notes"
					v-model="
						notes
					"
					class="
						appearance-none
						block
						bg-transparent
						text-gray-700
						border
						border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none
						focus:bg-white
						focus:border-gray-500
					"
					name="notes"
				/>
			</div>
		</div>
	</div>
</template>
	
<script>
export default {
	name: 'AircraftOptions',
	data() {
		return {
			optionNo: 1,
			aircraft: '',
			yom: '',
			bags: '',
			cabinMeasures:
				'',
			galley: '',
			smoking: '',
			wifi: '',
			toilet: '',
			oa: '',
			price: '',
			flightAttendant: '',
			notes: ''
		}
	}
}
</script>