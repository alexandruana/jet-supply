<template>
	<div class="container px-4 sm:px-6 lg:px-8">
		<PageHeading>
			<template slot="title">
				{{ title }}
			</template>
		</PageHeading>
		<div class="grid grid-cols-12 md:gap-x-8 md:gap-y-10">
			<div class="col-span-12 md:col-span-6 mb-14 md:mb-0">
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
					What is JetSupply?
				</h2>
				<p
					class="
						mt-4
						mb-6
						max-w-full
						md:max-w-lg
						text-lg text-gray-500
					"
				>
					JetSupply is a Poland based private jet broker company which
					guarantees a completely neutral search for private jets and
					helicopters. As we do not operate aircraft ourselves, we
					support our clients in finding the best solution with the
					best prices.
				</p>
			</div>
			<div class="col-span-12 md:col-span-6">
				<div class="w-80 h-80 bg-jet-light rounded-[44px] rotate-60">
					<div class="w-80 h-80 bg-jet-dark rounded-[44px] rotate-80 overflow-hidden">
						<nuxt-img
							class="rounded-lg object-cover object-center h-full max-w-full rounded-[44px] rotate-220"
							src="/images/praetor600_interior.jpg"
							fit="fill"
							alt="private jet interior"
						/>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="col-span-12 md:col-span-12">
					<div
						class="
							rounded-lg
							p-3
							mb-5
							md:mb-0
							border-b-8
							shadow-xl
							border-jet-light
						"
					>
						<h3
							class="
								mt-6
								mb-3
								text-xl text-jet-light
								after:content-['']
								after:block
								after:border-b-2
								after:border-jet-dark
								after:w-10
								after:mt-3
								after:mb-5
							"
						>
							Our <span class="font-medium">mission</span>
						</h3>
						<p class="mb-6">
							Lorem ipsum dolor sit amet,consectetur adipiscing
							elit.Mauris fermentum eleifend semper. Mauris semper
							urna eget tortor eleifend, id sodales augue
							suscipit. Nunc cursus tincidunt quam et finibus.
							Integer pharetra ut metus ut ornare.
						</p>
					</div>
				</div>
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
			description: 'Hi'
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

<style lang="scss">
</style>