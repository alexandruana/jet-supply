<template>
	<div class="container mx-auto">
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="relative mx-auto pt-20 text-center pb-24">
				<h1
					class="
						text-4xl
						font-extrabold
						tracking-tight
						text-jet-light
						sm:text-5xl
					"
				>
					Frequently Asked Questions
				</h1>
				<p class="mt-4 text-base leading-7 text-slate-600">
					Have questions? We are here to help.
				</p>
			</div>
		</div>
		<div class="grid md:grid-cols-4 gap-16 px-4">
			<div class="col-span-4 hidden md:block md:col-span-1">
				<ul
					class="sticky top-10 w-full text-slate-300 font-medium p-10 bg-slate-50"
				>
					<li
						v-for="(category, index) in categories"
						:key="index"
						class="
							mb-3
							hover:cursor-pointer hover:text-jet-light
							transition-all
							duration-200
						"
					>
						<button
							@click="scroll(index)"
							class="w-full text-left"
						>
							{{ category }}
						</button>
					</li>
				</ul>
			</div>

			<div class="col-span-4 md:col-span-3">
				<div
					v-for="(category, index) in categories"
					:key="index"
					:id="index"
					class="faq__group mb-10"
				>
					<h2 class="text-slate-300 text-xl font-medium mb-3">{{ category }}</h2>
					<FAQComponent v-for="(item, index) in filterItems(category)" :key="index">
						<template slot="title">
							<h3>{{ item.title }}</h3>
						</template>
						<template slot="content">
							<p v-html="item.content">{{ item.content }}</p>
						</template>
					</FAQComponent>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FAQ',
	head () {
		return {
			title: 'Frequently Asked Questions',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'faq-description',
					name: 'description',
					content: 'Got questions regarding flying private? Read the frequently asked questions for chartering an aircraft.'
				}
			]
		}
	},
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
						'Based in Poland, JetSupply is a private jet broker which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.',
					category: 'General'
				},
				{
					title: 'Why use JetSupply?',
					content:
						'We will always negotiate the best price for your flight whether it is for an on demand charter flight, empty leg or a modified empty leg. Jet Supply gets access to over 2.500 aircraft worldwide and can plan your trips to over 73.000+ unique airport pairs. We address safety, privacy, flexibility of travelling as our key values when organizing every trip for the most demanding clientele. Every quote we make is transparent and absolutely free of charge and does not involve an obligation to purchase the flight.',
					category: 'General'
				},
				{
					title: 'What is an on-demand charter flight?',
					content:
						'On-demand charter flights are private jets that you hire for a flight at the time you decide and on the itinerary you choose. You control every detail. You select your aircraft according to size, age and your budget. Once approved and paid for, the aircraft is guaranteed for you and your guests to fly as requested. JetSupply offers very competitive prices for these flights, as we negotiate preferential rates with operators based on a high volume of flight hours year after year.',
					category: 'Chartering'
				},
				{
					title: 'What are the benefits of on-demand charter flights?',
					content:
						'Get from your car to the aircraft in less than 10 minutes through VIP terminals, access airports where no commercial operators reach, stay connected and carry out business from 31,000 feet while enjoying the utmost privacy and comfort.',
					category: 'Chartering'
				},
				{
					title: 'Are the aircraft safe?',
					content:
						"Our experts ensure all featured jet operators have updated Aircraft Operator Certificates, operating licenses and insurance documents. Additionally, all chartered aircraft are new or recently renovated and piloted by two professional pilots/co-pilot, in accordance with the regulation of the civil aviation authority of the aircraft's registration country. On larger private jets, a flight attendant will be on-board, to cater for the comfort and needs of the passengers, but also to ensure their safety during the flight.",
					category: 'Safety'
				},
				{
					title: 'What is the Luggage Policy?',
					content:
						'Every aircraft has a luggage compartment which varies for each flight. We advise you to contact the JetSupply team in order to find more details about your luggage allowance.  ',
					category: 'Baggage'
				},
				{
					title: 'Can oversized baggage be taken on board?',
					content:
						'Winter equipment, wheelchairs or even artwork can be taken on board and stored in the cargo compartment as long as the items fit and the total cargo mass is not exceded. However, in certain situations the flying crew may decide that certain items can be taken in the cabin when those do not fit in the designated cargo space.',
					category: 'Baggage'
				},
				{
					title: 'What items are prohibited from carriage on a chartered aircraft?',
					content:
						"Dangereous goods such as flammable materials, corrosive agents or medical substances might not be allowed on board your next charter. The carriage of such items must be approved by the aircraft's owner upon booking and is subject to the operator having the accreditations to fly such materials. ",
					category: 'Baggage'
				},
				{
					title: 'What is the Pet Policy?',
					content:
						'Pets are family, not cargo. More than anything else, your safety is our first priority, and the same goes for your pets. Flying regulations mean your pets can travel in the cabin with you, but must be restrained for take-offs, landings, and turbulence. At all other times they can be comfortably by your side. <br /> <br />In most instances your pet will require a valid pet passport to confirm all routine health checks are up to date, identification that demonstrates the information of their microchip and valid vaccinations dependent on destination of arrival and departure. Our team will advise on any extra requirements at the time of your booking.',
					category: 'Pet'
				},
				{
					title: 'What is an empty leg flight and why is it affordable?',
					content:
						'An empty leg flight is a private jet flying without passengers. This happens when an aircraft drops off passengers at their destination and returns home "empty", or when it flies "empty" to pick up passengers at another airport. It is estimated that one in three private jet trips are empty legs. <br /> <br /> Booking an empty leg is a much more affordable solution than booking a regular charter flight since discounts on empty legs vary between 30-70% compared to regular charter flights. The initial client has already paid for the empty leg when booking their trip, so the fixed cost of the flight is covered. Therefore, the operator can allow other passengers to fly on this aircraft at bargain prices.',
					category: 'Chartering'
				},
				{
					title: 'What are the restrictions of flying on empty legs?',
					content:
						'The first and major restriction with empty legs is availability because these flights are not immediately available when and where they are needed. Therefore, luck defines whether an aircraft will be available for your requested destination at your preferred time.<br /> <br /> JetSupply’s Advisors regularly observes on the market and do our best to accommodate your request. The next restriction is type of aircraft since it is chosen by the original passenger. In this instance, luck defines again if an empty leg meets your needs in terms of age, size and passenger capacity. In consequence, the more flexible the client is in terms of timing or destination, the higher chances the client has of finding an empty aircraft.',
					category: 'Chartering'
				},
				{
					title: 'Are empty legs guaranteed?',
					content:
						'As empty leg flights depend on the initial flight taking place, they cannot be fully guaranteed. For long-haul flights, we can usually guarantee empty legs two to three days in advance. For short-haul flights, empty legs are guaranteed one or two days before.<br /> <br /> You will always be informed of the status of the empty leg and will not be required to pay until the flight is confirmed. In case of cancellation, JetSupply Advisors are available 24/7 and will find an alternative solution for your trip.',
					category: 'Chartering'
				},
				{
					title: 'What if an empty leg is unavailable on the day I want to travel?',
					content:
						'If no empty leg flights are available to accommodate your itinerary, we will try to modify or reroute an empty leg request.',
					category: 'Chartering'
				},
				{
					title: 'How much does it cost to charter a private jet?',
					content:
						'Private jet charter market is affected by seasonality, however depending on which aircraft type you are looking to hire prices range from €2,5000/hour to €8,000/hour.',
					category: 'Payment'
				},
				{
					title: 'What type of payment does JetSupply accept?',
					content:
						'JetSupply accepts wire, credit card and cryptocurrency transactions. This includes Visa, MasterCard, AmericanExpress. Currently we do not accept Apple Pay and PayPal.',
					category: 'Payment'
				},
				{
					title: 'What are the credit card fees?',
					content:
						'Depending on the credit card type, a fee of 3.5% - 4.5% will be charged by the bank settling the transaction.',
					category: 'Payment'
				}
			]
		}
	},
	computed: {
		categories() {
			const categories = new Set(this.faqs.map((f) => f.category))
			const categoriesArray = Array.from(categories)
			return categoriesArray
		}
	},
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: "smooth"
			});
		},
		filterItems(param) {
			return this.faqs.filter((a) => a.category === param)
		}
	}
}
</script>
