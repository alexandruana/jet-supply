<template>
	<div class="hero__banner h-screen relative bg-center bg-cover bg-blend-darken overflow-hidden">
		<div class="max-w-7xl mx-auto sm:py-12 lg:py-20 xl:py-28">
			<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 sm:mt-12 lg:px-8 md:mt-16 lg:mt-20 xl:mt-28">
					<div class="sm:text-center lg:text-left">
						<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							<span class="block xl:inline">Taking you places</span>
							<span class="block text-jet-blue-light xl:inline">wherever, whenever.</span>
						</h1>
						<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
							Get access to over 3.000 aircraft worldwide and plan your trips to over 73.000 unique airport pairs with our tailor made
							travel solutions.
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

<style>
	.hero__banner {
		background-image: url('~/assets/img/praetor600.jpeg');
	}
</style>
