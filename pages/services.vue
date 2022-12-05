<template>
	<div class="relative container px-4 sm:px-6 lg:px-8">
		<div class="px-4 sm:px-6 lg:px-8">
			<PageHeading>
				<template slot="title">
					{{ title }}
				</template>
			</PageHeading>
			<div
				class="
					grid
					container
					grid-cols-2
					gap-y-10
					md:gap-x-8 md:gap-y-40
				"
			>
				<div class="col-span-2 md:col-span-1">
					<Content>
						<template slot="title">Executive travel </template>
						<template slot="heading">
							JetSupply -<br />
							Specialised private travel services.
						</template>
						<template slot="content">
							We enable private travel through access to the
							global business jet charter market. Our team
							provides bespoke advice when it comes to chartering
							and aircraft, based on the profile of your trip, the
							aircraft type preference and budget.
							<br /><br />
							All aircraft have the necessary legal permits from
							the aviation authorities. Jet Supply’s team works
							only with AOC – certified operators, reliable
							handling agents and best quality catering suppliers
							to ensure your private flight needs are met.
							<br /><br />
							From departure to arrival we support you throughout
							all the steps of your journey, while ensuring your
							safety and comfort. 
						</template>
					</Content>
				</div>
				<div
					class="
						col-span-2
						md:col-span-1
						h-full
						w-full
						rounded-2xl
						bg-gradient-tui
						rounded-3xl
						shadow-xl
						max-w-7xl
					"
				>
					Image
				</div>
				<div class="col-span-2">
					<Content :class="['text-center']">
						<template slot="title">Fleet</template>
						<template slot="heading">Aircraft categories</template>
						<template slot="content">
							Discover the different private jet models across the
							categories available for charter.
						</template>
					</Content>
					<swiper ref="mySwiper" :options="swiperOptions">
						<swiper-slide
							v-for="(aircraft, index) in fleet"
							:key="index"
						>
							<Card :aircraft="aircraft" />
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
	name: 'Services',
	components: {
		Swiper,
		SwiperSlide
	},
	directives: {
		swiper: directive
	},
	data() {
		return {
			title: 'Services',
			description: 'Updated 02 June 2022',
			swiperOptions: {
				slidesPerView: 3,
				spaceBetween: 30,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				},
				breakpoints: {
					1024: {
						slidesPerView: 4,
						spaceBetween: 40
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
				// Some Swiper option/callback...
			},
			fleet: [
				{
					type: 'Light jets',
					rate: '€2,800',
					properties: {
						range: '3',
						seats: 6,
						bags: 6,
						catering: 'snacks',
						toilet: 'Yes',
						fa: 'No',
						img: '/images/p100_side.png'
					}
				},
				{
					type: 'Super light jets',
					rate: '€3,600',
					properties: {
						range: '3.5',
						seats: 8,
						bags: 7,
						catering: 'snacks',
						toilet: 'Yes',
						fa: 'Yes',
						img: '/images/p300_side.png'
					}
				},
				{
					type: 'Midsize jets',
					rate: '€4,200',
					properties: {
						range: '6',
						seats: 9,
						bags: 12,
						catering: 'hot',
						toilet: 'Yes',
						fa: 'Yes',
						img: '/images/l500_side.png'
					}
				},
				{
					type: 'Heavy jets',
					rate: '€4,600',
					properties: {
						range: '8',
						seats: 13,
						bags: 22,
						catering: 'hot',
						toilet: 'Yes',
						fa: 'Yes',
						img: '/images/l650_side.png'
					}
				},
				{
					type: 'Ultra long range',
					rate: '€6,000',
					properties: {
						range: '16',
						seats: 16,
						bags: 20,
						catering: 'hot',
						toilet: 'Yes',
						fa: 'Yes',
						img: '/images/l500_side.png'
					}
				},
				{
					type: 'VIP airliner',
					rate: '€8,000',
					properties: {
						range: '12',
						seats: 19,
						bags: 60,
						catering: 'hot',
						toilet: 'Yes',
						fa: 'Yes',
						img: '/images/l1000_side.png'
					}
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
					hid: 'about-description',
					name: 'description',
					content:
						'At JetSupply we provide an integrated travel solution that takes you from A to B fast, confortable and safe on the most advanced private aircraft available for charter.'
				}
			]
		}
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper)
		}
		const onSlideChange = () => {
			console.log('slide change')
		}
		return {
			onSwiper,
			onSlideChange
		}
	}
}
</script>