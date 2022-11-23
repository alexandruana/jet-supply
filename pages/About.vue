<template>
	<div class="container px-4 sm:px-6 lg:px-8">
		<PageHeading>
			<template slot="title">
				{{ title }}
			</template>
		</PageHeading>
		<div
			class="
				grid grid-cols-12
				place-content-evenly place-items-center
				gap-y-16
				md:gap-x-8 md:gap-y-24
			"
		>
			<Content
				:class="['col-span-12 md:col-span-6']"
			>
				<template slot="title"> Our expertise</template>
				<template slot="heading">
					JetSupply - Boutique jet charter
				</template>
				<template slot="content">
					JetSupply is a Poland based private jet broker company which
					guarantees a completely neutral search for private jets and
					helicopters. As we do not operate aircraft ourselves, we
					support our clients in finding the best solution with the
					best prices.
				</template>
			</Content>
			<KPI
				v-for="(item, index) in kpis"
				:key="index"
			>
				<template slot="figure">
					{{ item.figure }}
				</template>
				<template slot="description">
					{{ item.description }}
				</template>
			</KPI>
			<div class="col-span-12 md:col-span-6">
				<div class="relative">
					<div
						class="
							absolute
							h-64
							w-64
							rotate-60
							rounded-3xl
							bg-blue-500
						"
					></div>
					<nuxt-img
						class="
							h-64
							w-64
							-rotate-45
							object-cover object-center
							rounded-3xl
						"
						src="/images/praetor600_interior.jpg"
						fit="fill"
						alt="private jet interior"
					/>
				</div>
			</div>
			<div
				v-for="(statement, index) in statements"
				:key="index"
				class="col-span-12 md:col-span-4"
			>
				<CardBordered
					:class="[
						index % 2 == 0 ? 'border-orange' : 'border-jet-light'
					]"
				>
					<template slot="title">
						{{ statement.title }}
					</template>
					<template slot="content">
						{{ statement.content }}
					</template>
				</CardBordered>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			title: 'About',
			description: 'Hi',
			statements: [
				{
					title: 'Our mission',
					content:
						'JetSupply is a Poland based private jet broker company which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					title: 'Our vision',
					content:
						'JetSupply is a Poland based private jet broker company which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				},
				{
					title: 'Our goal',
					content:
						'JetSupply is a Poland based private jet broker company which guarantees a completely neutral search for private jets and helicopters. As we do not operate aircraft ourselves, we support our clients in finding the best solution with the best prices.'
				}
			],
			kpis: [
				{
					figure: '2k+',
					description: 'Aircraft Available'
				},
				{
					figure: '50k+',
					description: 'Airport Pairs'
				},
				{
					figure: '10+',
					description: 'Year Experience'
				}
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
						'Find out more about JetSupply and the way we can get you anywhere, anytime, with our range of private jet charter services.'
				}
			]
		}
	}
}
</script>