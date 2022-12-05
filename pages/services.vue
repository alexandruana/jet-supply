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
						<template slot="heading">Private jet charter</template>
						<template slot="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Aliquam pharetra sapien eget purus ullamcorper
							suscipit. Suspendisse semper risus efficitur lacus
							pulvinar facilisis. Fusce semper suscipit nisl, sit
							amet faucibus turpis pharetra sed. Aliquam erat
							volutpat. Nulla convallis tellus et arcu pretium,
							feugiat ornare velit tristique. Aenean molestie, ex
							in ornare condimentum, odio tellus pulvinar ante, eu
							semper eros ex at tellus. Nunc ultrices purus et sem
							vestibulum, id pharetra sapien pretium. Etiam quis
							orci at sapien consectetur feugiat. Duis consectetur
							libero tellus, eget ullamcorper metus vestibulum
							quis.
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
						<template slot="heading">Aircraft types</template>
						<template slot="content">
							We provide tailor made charter solutions through a
							wide array of aircraft types.
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
				centeredSlides: true,
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
						fa: 'No'
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
						fa: 'Yes'
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
						fa: 'Yes'
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
						fa: 'Yes'
					}
				},
				{
					type: 'Ultra long range',
					rate: '€4,600',
					properties: {
						range: '16',
						seats: 16,
						bags: 20,
						catering: 'hot',
						toilet: 'Yes',
						fa: 'Yes'
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
						fa: 'Yes'
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