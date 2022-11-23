<template>
	<form
		name="Contact"
		method="POST"
		data-netlify="true"
		netlify-honeypot="bot-field"
		@submit.prevent="handleSubmit"
	>
		<input type="hidden" name="form-name" value="Contact" />
		<div class="flex flex-wrap -mx-3">
			<div class="w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700 text-xs
						font-normal
						mb-2
					"
					for="first_name"
				>
					First name
				</label>
				<input
					id="first_name"
					v-model="form.firstName"
					class="
						appearance-none
						block
						w-full
						bg-transparent
						text-gray-700
						border
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none focus:bg-white
					"
					type="text"
					name="firstName"
					placeholder="Jane"
					required
				/>
			</div>
			<div class="w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700 text-xs
						font-normal
						mb-2
					"
					for="last_name"
				>
					Last name
				</label>
				<input
					id="last_name"
					v-model="form.lastName"
					class="
						appearance-none
						block
						w-full
						bg-transparent
						text-gray-700
						border
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none focus:bg-white
					"
					type="text"
					name="lastName"
					placeholder="Doe"
					required
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-3 md:mb-6">
			<div class="w-full px-3">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700 text-xs
						font-normal
						mb-2
					"
					for="email"
				>
					E-mail
				</label>
				<input
					id="email"
					v-model="form.email"
					class="
						appearance-none
						block
						w-full
						bg-transparent
						text-gray-700
						border border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none focus:bg-white focus:border-gray-500
					"
					type="email"
					name="email"
					placeholder="jane@doe.com"
					required
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-3 md:mb-6">
			<div class="w-full px-3">
				<label
					class="
						block
						uppercase
						tracking-wide
						text-gray-700 text-xs
						font-normal
						mb-2
					"
					for="message"
				>
					Message
				</label>
				<textarea
					id="message"
					v-model="form.message"
					class="
						no-resize
						appearance-none
						block
						w-full
						bg-transparent
						text-gray-700
						border border-gray-200
						rounded
						py-3
						px-4
						mb-3
						leading-tight
						focus:outline-none focus:bg-white focus:border-gray-500
						h-48
						resize-none
					"
					name="message"
					required
				/>
				<p class="text-sm text-slate-400">
					By submitting this form you agree to our
					<NuxtLink
						to="/privacypolicy"
						class="text-jet-light hover:text-jet-dark"
					>
						privacy policy
					</NuxtLink>
					which explains how we may collect, use and disclose your
					personal information including to third parties.
				</p>
			</div>
		</div>
		<div class="md:w-1/3">
			<button
				class="
					shadow
					bg-jet-light
					hover:bg-jet-dark
					focus:shadow-outline focus:outline-none
					text-white
					font-medium
					py-2
					px-4
					rounded
				"
				type="submit"
			>
				Send
			</button>
		</div>
		<transition name="fade">
			<LazyFormModal v-show="showModal" @close="toggle" />
		</transition>
	</form>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ContactForm',
	data() {
		return {
			showModal: false,
			show: true,
			form: {
				firstName: '',
				lastName: '',
				email: '',
				message: ''
			}
		}
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							data[key]
						)}`
				)
				.join('&')
		},
		handleSubmit() {
			const axiosConfig = {
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
			axios.post(
				'/',
				this.encode({
					'form-name': 'Contact',
					...this.form
				}),
				axiosConfig
			)
		},
		toggle() {
			this.showModal = !this.showModal
			this.resetForm()
		},
		resetForm() {
			const self = this //  you need this because *this* will refer to Object.keys below
			//  iterate over form properties and unassign keys
			Object.keys(this.form).forEach(function (key, index) {
				self.form[key] = ''
			})
		}
	}
}
</script>