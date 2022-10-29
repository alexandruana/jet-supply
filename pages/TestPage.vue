<template>
	<div class="max-w-7xl mx-auto">
		<FAQComponent v-for="(item, index) in faqs" :key="index">
			<template slot="title">
				{{ item.title }}
			</template>
			<template slot="content">
				{{ item.content }}
			</template>
		</FAQComponent>
	</div>
</template>

<script>
export default {
	name: 'TestArea',
	provide() {
		return { Accordion: this.Accordion }
	},
	data() {
		return {
			Accordion: {
				count: 0,
				active: null
			},
			faqs: [
				{
					title: 'What is JetSupply?',
					content:
						'Based in Poland, JetSupply is a private jet broker which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					title: 'Why use JetSupply?',
					content:
						'We will always negotiate the best price for your flight whether it is for an on demand charter flight, empty leg or a modified empty leg. Jet Supply gets access to over 2.500 aircraft worldwide and can plan your trips to over 73.000+ unique airport pairs. We address safety, privacy, flexibility of travelling as our key values when organizing every trip for the most demanding clientele. Every quote we make is transparent and absolutely free of charge and does not involve an obligation to purchase the flight.'
				},
				{
					title: 'What is an on-demand charter flight?',
					content:
						'On-demand charter flights are private jets that you hire for a flight at the time you decide and on the itinerary you choose. You control every detail. You select your aircraft according to size, age and your budget. Once approved and paid for, the aircraft is guaranteed for you and your guests to fly as requested. JetSupply offers very competitive prices for these flights, as we negotiate preferential rates with operators based on a high volume of flight hours year after year.'
				},
				{
					title: 'What type of payment does JetSupply accept?',
					content:
						'JetSupply accepts wire, credit card and cryptocurrency transactions. This includes Visa, MasterCard, AmericanExpress. Currently we do not accept Apple Pay and PayPal.'
				}
			]
		}
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
	}
}
</script>