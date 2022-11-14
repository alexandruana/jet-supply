<template>
	<NuxtLink
		class="rounded-lg text-sm font-semibold py-3 px-4 bg-jet-dark text-white hover:bg-jet-light transition-all duration-200"
		:to="link"
		:description="description"
	>
		<slot name="title"></slot>
	</NuxtLink>
</template>

<script>
export default {
	name: 'CallToAction',
	props: [
		'link',
		'description'
	]
}
</script>