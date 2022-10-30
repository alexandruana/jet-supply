<template>
	<button class="rounded-lg text-sm font-semibold py-3 px-4 bg-jet-dark text-white hover:bg-jet-light">
		<slot name="title"></slot>
	</button>
</template>

<script>
export default {
	name: 'CallToAction'
}
</script>