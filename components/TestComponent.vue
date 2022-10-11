<template>
	<div class="modal-overlay flex justify-center items-center px-4">
		<div class="modal p-10 md:px-24 md:py-16 rounded-lg bg-slate-50 shadow-md relative">
			<div class="text-center">
				<h3 class="text-xl font-semibold text-jet-light">Thank you!</h3>
				<p class="mb-12 text-sm font-light">Your message has now been submitted.</p>
				<button
					type="button"
					@click="$emit('close')"
					class="shadow bg-jet-light hover:bg-jet-dark focus:shadow-outline focus:outline-none text-white font-medium py-2 px-6 rounded">
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
