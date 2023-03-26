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
					place-content-center
					md:gap-x-8 md:gap-y-40
				"
			>
				<div class="col-span-2 md:col-span-1 order-1">
					<Content>
						<template slot="title">Executive travel </template>
						<template slot="heading">
							Jet Supply: Tailored travel solutions
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
				<div class="col-span-2 md:col-span-1 order-2">
					<div
						class="
							h-full
							w-full
							bg-gradient-tui
							rounded-3xl
							shadow-xl
							max-w-7xl
						"
					>
						<nuxt-img
							class="rounded-3xl"
							src="/images/global5000-exterior.jpeg"
							width="100%"
							height="100%"
							alt="aircraft image"
						/>
					</div>
				</div>
				<div class="col-span-2 md:col-span-1 order-4 md:order-3">
					<div
						class="
							h-full
							w-full
							bg-gradient-tui
							rounded-3xl
							shadow-xl
							max-w-7xl
						"
					>
						<nuxt-img
							class="rounded-3xl"
							src="/images/global7500-interior.jpeg"
							width="100%"
							height="100%"
							alt="aircraft image"
						/>
					</div>
				</div>
				<div class="col-span-2 md:col-span-1 order-3 md:order-4">
					<Content>
						<template slot="title">Executive travel </template>
						<template slot="heading">
							Private charter benefits
						</template>
						<template slot="content">
							<div
								class="
									grid grid-cols-1
									md:grid-cols-2
									gap-x-10 gap-y-5
									sm:gap-y-2
								"
							>
								<Highlight>
									<template slot="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
											/>
										</svg>
									</template>
									<template slot="title">
										Save time
									</template>
									<template slot="content">
										From car to the aircraft in 5 minutes
										through private jet dedicated terminals.
									</template>
								</Highlight>
								<Highlight>
									<template slot="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</template>
									<template slot="title">
										Flexibility
									</template>
									<template slot="content">
										Land or take-off from the airports that
										suit you best and plan with the timings
										that fit your schedule.
									</template>
								</Highlight>
								<Highlight>
									<template slot="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
											/>
										</svg>
									</template>
									<template slot="title"> Privacy </template>
									<template slot="content">
										Take advantage of privacy with an
										aircraft fully dedicated to you and your
										travel companions.
									</template>
								</Highlight>
								<Highlight>
									<template slot="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
											/>
										</svg>
									</template>
									<template slot="title"> Comfort </template>
									<template slot="content">
										Enjoy à la carte meals, the finest
										drinks and stay productive while on the
										go with sattelite wi-fi.
									</template>
								</Highlight>
							</div>
						</template>
					</Content>
				</div>
				<div class="col-span-2 order-5">
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
import Highlight from '~/components/Highlight.vue'

export default {
	name: 'Services',
	components: {
		Swiper,
		SwiperSlide,
		Highlight
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
			listItems: [
				'Quick offers',
				'Dedicated support',
				'Low fees',
				'Easy payments'
			],
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
					hid: 'services-description',
					name: 'description',
					content:
						'At Jet Supply we provide an integrated travel solution that takes you from A to B fast, confortable and safe on the most advanced private aircraft available for charter.'
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

<style scoped>
.doodle {
	border-radius: 30% 70% 67% 33% / 30% 30% 70% 70%;
}
</style>