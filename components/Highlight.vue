<template>
	<div class="relative md:mb-10 mb-5">
		<dt>
			<div
				class="
					absolute
					flex
					items-center
					justify-center
					h-12
					w-12
					rounded-md
					bg-jet-light
					text-white
				"
			>
				<!-- Heroicon name: outline/globe-alt -->
				<slot name="icon"></slot>
			</div>
			<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
				<slot name="title"></slot>
			</p>
		</dt>
		<dd class="mt-2 ml-16 text-base text-gray-500">
			<slot name="content"></slot>
		</dd>
	</div>
</template>

<script>
export default {
	name: 'Highlight'
}
</script>