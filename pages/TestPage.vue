<template>
	<main class="max-w-7xl mx-auto">
		<OfferBuilder />
		<label for="file-upload" class="custom-file-upload"> Open PDF </label>
		<input id="file-upload" class="btn" type="file" @change="openDocument" />
		<PSPDFKitContainer :pdfFile="pdfFile" @loaded="handleLoaded" />
	</main>
</template>

<script>
export default {
	name: 'TestArea',
	head() {
		return {
			title: 'TestArea',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content:
						'Test page'
				}
			]
		}
	},
	data() {
		return {
			show: true,
			pdfFile:
				this
					.pdfFile ||
				'/document.pdf'
		}
	},
	methods: {
		handleLoaded(
			instance
		) {
			console.log(
				'PSPDFKit has loaded: ',
				instance
			)
			// Do something.
		},

		openDocument(
			event
		) {
			if (
				this
					.pdfFile &&
				this.pdfFile.startsWith(
					'blob:'
				)
			) {
				window.URL.revokeObjectURL(
					this
						.pdfFile
				)
			}
			this.pdfFile =
				window.URL.createObjectURL(
					event
						.target
						.files[0]
				)
		}
	}
}
</script>

<style scoped>
body {
	margin: 0;
}

input[type='file'] {
	display: none;
}

.custom-file-upload {
	border: 1px solid
		#ccc;
	border-radius: 4px;
	display: inline-block;
	padding: 6px 12px;
	cursor: pointer;
	background: #4a8fed;
	padding: 10px;
	color: #fff;
	font: inherit;
	font-size: 16px;
	font-weight: bold;
}
</style>
