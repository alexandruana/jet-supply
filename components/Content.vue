<template>
	<div class="mb-10">
		<h4
			class="
				text-base text-jet-light
				font-semibold
				tracking-wide
				uppercase
			"
		>
			<slot name="title"></slot>
		</h4>
		<h2
			class="
				mt-2
				mb-4
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
		<p class="mb-6 text-gray-500">
			<slot name="content"></slot>
		</p>
	</div>
</template>
