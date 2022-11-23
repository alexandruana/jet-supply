<template>
	<div
		class="
			rounded-lg
			p-3
			mb-5
			md:mb-0
			border-b-8
			shadow-xl
			border-jet-light
			max-w-xs
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
			<slot name="title" />
		</h3>
		<p class="mb-6 text-gray-500">
			<slot name="content" />
		</p>
	</div>
</template>