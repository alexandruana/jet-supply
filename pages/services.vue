<template>
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="px-4 sm:px-6 lg:px-8">
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
					md:gap-x-8 md:gap-y-26
				"
			>
				<div class="col-span-12 md:col-span-6 max-w-md">
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
						col-span-12
						md:col-span-6
						h-full
						w-full
						rounded-2xl
						bg-gradient-tui
						rounded-3xl
						shadow-xl
					"
				>
					Image
				</div>
				<div class="col-span-12 max-w-xl">
					<Content
						:class="['text-center']"
					>
						<template slot="title">Fleet</template>
						<template slot="heading">Aircraft types</template>
						<template slot="content">
							We provide tailor made charter solutions through a wide array of aircraft types.
						</template>
					</Content>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Services',
	data() {
		return {
			title: 'Services',
			description: 'Updated 02 June 2022'
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
	}
}
</script>