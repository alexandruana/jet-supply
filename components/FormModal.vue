<template>
	<div
		class="
			modal-overlay
			fixed
			top-0
			right-0
			bottom-0
			left-0
			flex
			justify-center
			items-center
			bg-black/60
			z-20
			px-4
		"
	>
		<div
			class="
				modal
				p-10
				md:px-24 md:py-16
				rounded-lg
				bg-slate-50
				shadow-md
				relative
			"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="mx-auto w-20 h-20 text-jet-light mb-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<div class="text-center">
				<h3 class="text-xl font-semibold text-jet-light">Thank you!</h3>
				<p class="mb-12 text-sm font-light">
					Your message has now been submitted.
				</p>
				<button
					type="button"
					@click="$emit('close')"
					class="
						shadow
						bg-jet-light
						hover:bg-jet-dark
						focus:shadow-outline focus:outline-none
						text-white
						font-medium
						py-2
						px-6
						rounded
					"
				>
					Done
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormModal'
}
</script>
