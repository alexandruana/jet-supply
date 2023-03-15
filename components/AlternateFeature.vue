<template>
	<div class="container px-4 sm:px-6 lg:px-8">
		<div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
			<div>
				<Content>
					<template slot="title">What we do</template>
					<template slot="heading">
						Seamless travel solutions
					</template>
					<template slot="content">
						Regardless if it's a transcontinental flight or a day-return
						trip, Jet Supply can take you from A to B hasslefree.
					</template>
				</Content>
			</div>
			<div
				class="
					max-w-sm
					bg-white
					rounded-lg
					border border-gray-200
					shadow-md
					dark:bg-gray-800 dark:border-gray-700
				"
			>
				<nuxt-img
					class="rounded-t-lg"
					src="/images/global6500_interior.jpeg"
					width="100%"
					height="100%"
					alt="global interior"
				/>
				<div class="p-5">
					<h3
						class="
							mb-2
							text-2xl
							font-bold
							tracking-tight
							text-gray-900
							dark:text-white
						"
					>
						Private jets
					</h3>
					<p
						class="
							mb-3
							font-normal
							text-gray-700
							dark:text-gray-400
						"
					>
						Find out which type of private jet best suits your needs and access
						a wider network of airports.
					</p>
				</div>
			</div>
			<div
				class="
					max-w-sm
					bg-white
					rounded-lg
					border border-gray-200
					shadow-md
					dark:bg-gray-800 dark:border-gray-700
				"
			>
				<nuxt-img
					class="rounded-t-lg"
					src="/images/heli_interior.jpg"
					width="100%"
					height="100%"
					alt="helicopter interior"
				/>
				<div class="p-5">
					<h3
						class="
							mb-2
							text-2xl
							font-bold
							tracking-tight
							text-gray-900
							dark:text-white
						"
					>
						Helicopters
					</h3>
					<p
						class="
							mb-3
							font-normal
							text-gray-700
							dark:text-gray-400
						"
					>
						Get from the jet to your final destination quick
						and easy with modern helicopters.
					</p>
				</div>
			</div>
			<div
				class="
					max-w-sm
					bg-white
					rounded-lg
					border border-gray-200
					shadow-md
					dark:bg-gray-800 dark:border-gray-700
				"
			>
				<nuxt-img
					class="rounded-t-lg"
					src="/images/7series_interior_cropped.jpg"
					width="100%"
					height="100%"
					alt="limousine interior"
				/>
				<div class="p-5">
					<h3
						class="
							mb-2
							text-2xl
							font-bold
							tracking-tight
							text-gray-900
							dark:text-white
						"
					>
						Transfers
					</h3>
					<p
						class="
							mb-3
							font-normal
							text-gray-700
							dark:text-gray-400
						"
					>
						Waste no time and have fully flexibility from touchdown
						to your next take-off with a fleet of top class vehicles.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AlternateFeature'
}
</script>
