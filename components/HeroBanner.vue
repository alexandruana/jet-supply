<template>
	<div
		class="
			hero__banner
			h-screen
			bg-gradient-radial bg-jet-dark
			flex flex-col
			justify-center
			relative
			bg-center bg-cover
			overflow-hidden
		"
	>
		<nuxt-img
			src="/images/praetor600.jpeg"
			class="object-cover absolute opacity-40"
			width="100%"
			height="100%"
			alt="praetor 600 background"
		/>
		<div class="container mx-auto sm:py-12 lg:py-20 xl:py-28">
			<div
				class="
					relative
					z-10
					pb-8
					sm:pb-16
					md:pb-20
					lg:max-w-2xl lg:w-full lg:pb-28
					xl:pb-32
				"
			>
				<div
					class="
						mx-auto
						max-w-7xl
						px-4
						sm:px-6 sm:mt-12
						lg:px-8
						md:mt-16
						lg:mt-20
						xl:mt-28
					"
				>
					<div class="sm:text-center lg:text-left">
						<h1
							class="
								text-4xl
								filter
								drop-shadow-custom
								tracking-tight
								font-extrabold
								text-white
								sm:text-5xl
								md:text-6xl
							"
						>
							<span class="block xl:inline">
								Private jet charter
							</span>
							<span class="block text-jet-light xl:inline">
								wherever, whenever.
							</span>
						</h1>
						<p
							class="
								mt-3
								filter
								drop-shadow-custom
								text-base text-gray-300
								sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
								md:mt-5 md:text-xl
								lg:mx-0
							"
						>
							Get access to over 2,500 aircraft worldwide and plan
							your trips to over 73,000 unique airport pairs with
							our tailor made travel solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeroBanner'
}
</script>

<style></style>
