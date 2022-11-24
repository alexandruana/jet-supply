<template>
	<div class="container">
		<div class="relative mx-auto pt-20 text-center pb-24">
			<h1
				class="
					relative
					text-4xl
					font-bold
					tracking-tight
					text-jet-light
					z-50
					sm:text-5xl
					after:content-[''] after:absolute after:border-b-4 after:border-jet-dark after:w-12 after:-bottom-7 after:left-1/2 after:-translate-x-1/2
				"
			>
				<slot name="title"></slot>
			</h1>
			<p
				class="
					absolute
					left-0
					top-12
					md:-bottom-8
					w-full
					h-full
					z-10
					text-7xl
					md:text-8xl
					text-slate-300
					font-black
					opacity-20
				"
			>
				<slot name="title"></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageHeading'
}
</script>