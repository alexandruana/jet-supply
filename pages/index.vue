<template>
	<main>
		<HeroBanner />
		<AlternateFeature />
		<UniqueSellingPointsFeature />
		<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 py-12 px-4 lg:px-8">
			<div class="p-12 border border-r-0 rounded-tl-md rounded-bl-md bg-gradient-tui">
				<h2 class="mb-4 mt-0 text-xl text-white font-heavy">Contact information</h2>
				<p class="text-base text-slate-400 mb-6">
					Request offers or find out more on how to travel hassle free through
					private charter.
				</p>
				<div class="flex items-top mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>

					</svg>
					<span class="ml-3">
						Henryka Sienkiewicza 85/87,<br/>
						90-057, Lodz, Poland
					</span>
				</div>
				<div class="flex items-center mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
						/>
					</svg>
					<span class="ml-3">
						+48 603 951 000
					</span>
				</div>
				<div class="flex items-center mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6">
						<path
							stroke-linecap="round"
							d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
						/>
					</svg>
					<span class="ml-3">
						sales@jet-supply.com
					</span>
				</div>
			</div>
			<div class="col-span-2 border border-l-0 rounded-tr-md rounded-br-md p-12">
				<ContactForm />
			</div>
		</div>
	</main>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
export default {
	name: 'IndexPage',
	head () {
		return {
			title: 'Home',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: 'Home page'
				}
			]
		}
	},
	components: { ContactForm }
}
</script>
