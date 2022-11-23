<template>
	<div class="mb-14 max-w-2xl">
		<p
			class="
				text-base text-jet-light
				font-semibold
				tracking-wide
				uppercase
			"
		>
			<slot name="title"></slot>
		</p>
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
			<slot name="heading"></slot>
		</h2>
		<p class="mt-4 mb-6 text-lg text-gray-500">
			<slot name="content"></slot>
		</p>
	</div>
</template>
