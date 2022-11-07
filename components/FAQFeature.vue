<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			<div class="col-span-1 mb-14 md:mb-0">
				<p
					class="
						text-base text-jet-light
						font-semibold
						tracking-wide
						uppercase
					"
				>
					FAQ
				</p>
				<h2
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
				</h2>
				<p class="my-4 max-w-full md:max-w-md text-lg text-gray-500">
					Got questions? In our FAQs we are addressing some of the
					most popular questions and concerns when it comes to
					chartering a private aircraft.
				</p>
				<CallToAction
					link="/faq"
				>
					<template slot="title">
						See more
					</template>
				</CallToAction>
			</div>
			<div class="col-span-1">
				<FAQComponent v-for="(item, index) in faqs" :key="index">
					<template slot="title">
						<h3>{{ item.title }}</h3>
					</template>
					<template slot="content">
						<p>{{ item.content }}</p>
					</template>
				</FAQComponent>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FAQFeature',
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
					title: 'What are the benefits of on-demand charter flights?',
					content:
						'Get from your car to the aircraft in less than 10 minutes through VIP terminals, access airports where no commercial operators reach, stay connected and carry out business from 31,000 feet while enjoying the utmost privacy and comfort.'
				},
				{
					title: 'What type of payment does JetSupply accept?',
					content:
						'JetSupply accepts wire, credit card and cryptocurrency transactions. This includes Visa, MasterCard, AmericanExpress. Currently we do not accept Apple Pay and PayPal.'
				}
			]
		}
	}
}
</script>