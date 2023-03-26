<template>
	<div class="container px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-12 gap-y-10 md:gap-x-8">
			<div class="col-span-12 md:col-span-6">
				<Content
					:class="['max-w-lg']"
				>
					<template slot="title">FAQ</template>
					<template slot="heading">
						Frequently asked questions
					</template>
					<template slot="content">
						Got questions? In our FAQs we are addressing some of the
						most popular questions and concerns when it comes to
						chartering a private aircraft.
					</template>
				</Content>
				<CallToAction
					link="/faq"
				>
					<template slot="title">
						See more
					</template>
				</CallToAction>
			</div>
			<div class="col-span-12 md:col-span-6">
				<Accordion v-for="(item, index) in faqs" :key="index">
					<template slot="title">
						<p>{{ item.title }}</p>
					</template>
					<template slot="content">
						<p>{{ item.content }}</p>
					</template>
				</Accordion>
			</div>
		</div>
	</div>
</template>

<script>
import Accordion from './Accordion.vue'
export default {
	name: 'FAQFeature',
	components: { Accordion },
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
					title: 'What is Jet Supply?',
					content:
						'Based in Poland, Jet Supply is a private jet broker which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					title: 'Why use Jet Supply?',
					content:
						'We will always negotiate the best price for your flight whether it is for an on demand charter flight, empty leg or a modified empty leg. Jet Supply gets access to over 2.500 aircraft worldwide and can plan your trips to over 73.000+ unique airport pairs. We address safety, privacy, flexibility of travelling as our key values when organizing every trip for the most demanding clientele. Every quote we make is transparent and absolutely free of charge and does not involve an obligation to purchase the flight.'
				},
				{
					title: 'What is an on-demand charter flight?',
					content:
						'On-demand charter flights are private jets that you hire for a flight at the time you decide and on the itinerary you choose. You control every detail. You select your aircraft according to size, age and your budget. Once approved and paid for, the aircraft is guaranteed for you and your guests to fly as requested. Jet Supply offers very competitive prices for these flights, as we negotiate preferential rates with operators based on a high volume of flight hours year after year.'
				},
				{
					title: 'What are the benefits of on-demand charter flights?',
					content:
						'Get from your car to the aircraft in less than 10 minutes through VIP terminals, access airports where no commercial operators reach, stay connected and carry out business from 31,000 feet while enjoying the utmost privacy and comfort.'
				},
				{
					title: 'What type of payment does Jet Supply accept?',
					content:
						'Jet Supply accepts wire, credit card and cryptocurrency transactions. This includes Visa, MasterCard, AmericanExpress. Currently we do not accept Apple Pay and PayPal.'
				}
			]
		}
	},
}
</script>