<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			<div class="col-span-1">
				<h2
					class="
						text-base text-jet-light
						font-semibold
						tracking-wide
						uppercase
					"
				>
					FAQ
				</h2>
				<p
					class="
						mt-2
						text-3xl
						leading-8
						font-extrabold
						tracking-tight
						text-gray-900
						sm:text-4xl
					"
				>
					Frequently asked questions
				</p>
				<p class="mt-4 max-w-2xl text-lg text-gray-500">
					Got questions? Let us clear the air by addressing some of the most popular questions and concerns when it comes to chartering a private aircraft.
				</p>
			</div>
			<div class="col-span-1">
				<FAQComponent
					v-for="(item, index) in faqs"
					:key="item.id"
					:item="item"
					:active-index=" currentlyActiveIndex === index ? (index = null) : currentlyActiveIndex "
					:item-index="index"
					@update:itemIndex="currentlyActiveIndex = $event"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FAQFeature',
	data() {
		return {
			faqs: [
				{ 
					id: 'faq1', 
					question: 'What is JetSupply?', 
					answer:'Based in Poland, JetSupply is a private jet broker which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					id: 'faq2',
					question: 'Why use JetSupply?', 
					answer:'We will always negotiate the best price for your flight whether it is for an on demand charter flight, empty leg or a modified empty leg. Jet Supply gets access to over 2.500 aircraft worldwide and can plan your trips to over 73.000+ unique airport pairs. We address safety, privacy, flexibility of travelling as our key values when organizing every trip for the most demanding clientele. Every quote we make is transparent and absolutely free of charge and does not involve an obligation to purchase the flight.'
				},
				{
					id: 'faq3',
					question: 'What is an on-demand charter flight?',
					answer:'On-demand charter flights are private jets that you hire for a flight at the time you decide and on the itinerary you choose. You control every detail. You select your aircraft according to size, age and your budget. Once approved and paid for, the aircraft is guaranteed for you and your guests to fly as requested. JetSupply offers very competitive prices for these flights, as we negotiate preferential rates with operators based on a high volume of flight hours year after year.'
				},
				{
					id: 'faq4',
					question: 'What type of payment does JetSupply accept?',
					answer:'JetSupply accepts wire, credit card and cryptocurrency transactions. This includes Visa, MasterCard, AmericanExpress. Currently we do not accept Apple Pay and PayPal.'
				},
			],
			currentlyActiveIndex: null,
			isActive: null
		}
	}
}
</script>