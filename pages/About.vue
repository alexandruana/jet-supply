<template>
	<div class="container px-4 sm:px-6 lg:px-8">
		<PageHeading>
			<template slot="title">
				{{ title }}
			</template>
		</PageHeading>
		<div
			class="
				grid grid-cols-12 grid-rows-2
				place-items-center
				gap-y-10
				md:gap-x-8 md:gap-y-40
			"
		>
			<div class="col-span-12 md:col-span-6 order-1 max-w-md">
				<Content>
					<template slot="title"> Our expertise</template>
					<template slot="heading"> Boutique jet charter </template>
					<template slot="content">
						Jet Supply is a Poland based private jet broker company
						which guarantees a completely neutral search for private
						jets and helicopters. As we do not operate aircraft
						ourselves, we support our clients in finding the best
						solution with the best prices.
					</template>
				</Content>
				<div class="flex flex-row justify-between">
					<KPI v-for="(item, index) in kpis" :key="index">
						<template slot="figure">
							{{ item.figure }}
						</template>
						<template slot="description">
							{{ item.description }}
						</template>
					</KPI>
				</div>
			</div>
			<div class="col-span-12 md:col-span-6 order-2 rounded-2xl bg-gradient-tui rounded-3xl shadow-xl">
				<nuxt-img
					class="rounded-3xl"
					src="/images/g650_interior.jpg"
					width="100%"
					height="100%"
					alt="gulfstream interior"
				/>
			</div>
			<div class="col-span-12 md:col-span-6 order-4 md:order-3 bg-gradient-tui rounded-3xl shadow-xl">
				<nuxt-img
					class="rounded-3xl"
					src="/images/fbo_interior.jpg"
					width="100%"
					height="100%"
					alt="lounge interior"
				/>
			</div>
			<div class="col-span-12 md:col-span-6 order-3 md:order-4 max-w-md">
				<Content>
					<template slot="title"> Our advantages</template>
					<template slot="heading">Our goal is finding the best solutions for you</template>
					<template slot="content">
						With several years of experience in the aviation
						industry, our team can assist even with the most
						difficult charter flights. Jet Supply provides round-the-clock
						support so that you and your travel partners can arrive
						at your destination fast and stress-free.
					</template>
				</Content>
				<TickList :list="listItems" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			title: 'About us',
			description: 'The benefits of flying with Jet Supply',
			statements: [
				{
					title: 'Our mission',
					content:
						'Jet Supply is a Poland based private jet broker company which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					title: 'Our vision',
					content:
						'Jet Supply is a Poland based private jet broker company which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					title: 'Our goal',
					content:
						'Jet Supply is a Poland based private jet broker company which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				}
			],
			kpis: [
				{
					figure: '2k+',
					description: 'Aircraft Available'
				},
				{
					figure: '73k+',
					description: 'Airport Pairs'
				},
				{
					figure: '5+',
					description: 'Years Experience'
				}
			],
			listItems: [
				'Quick offers',
				'Reliable suppliers',
				'Safety standards',
				'Dedicated support',
				'Low fees',
				'Easy payments'
			]
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content:
						'Find out more about Jet Supply and the way we can get you anywhere, anytime, with our range of private jet charter services.'
				}
			],
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: 'https://jet-supply.com/about'
				}
			]
		}
	}
}
</script>