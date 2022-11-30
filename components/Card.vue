<template>
	<div
		class="
			max-w-sm
			bg-white
			rounded-lg
			border-2 border-gray-200
			shadow-md
			dark:bg-gray-800 dark:border-gray-700
		"
	>
		<div>
			<nuxt-img
				class="bg-gradient-tui rounded-t-lg"
				src="/images/pattern.svg"
				width="100%"
				height="100%"
				alt="global pattern"
			/>
		</div>
		<div class="p-5">
			<h3
				class="
					mb-5
					text-2xl
					font-^medium
					tracking-tight
					text-gray-900
					dark:text-white
				"
			>
				{{ aircraft.type }}
			</h3>
			<ul
				class="
					columns-2
					mb-8
					space-y-3
					text-left text-gray-500
					dark:text-gray-400
				"
			>
				<li class="flex items-center text-sm space-x-3">
					<!-- Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 text-jet-light"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
						/>
					</svg>

					<span>{{ aircraft.properties.seats }}</span>
				</li>
				<li class="flex items-center text-sm space-x-3">
					<!-- Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 text-jet-light"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
						/>
					</svg>

					<span>{{ aircraft.properties.bags }}</span>
				</li>
				<li class="flex items-center text-sm capitalize space-x-3">
					<!-- Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-jet-light"
						viewBox="0 0 512 512"
					>
						<path
							d="M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-miterlimit="10"
							stroke-width="32"
						/>
						<path
							d="M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368M183 274a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-miterlimit="10"
							stroke-width="32"
						/>
						<circle
							cx="256"
							cy="56"
							r="40"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-miterlimit="10"
							stroke-width="32"
						/>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							d="M208 192l-48 160h192l-48-160"
						/>
					</svg>

					<span>{{ aircraft.properties.fa }}</span>
				</li>
				<li class="flex items-center text-sm capitalize space-x-3">
					<!-- Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-jet-light"
						viewBox="0 0 512 512"
					>
						<path
							d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"
							fill="none"
							stroke="currentColor"
							stroke-linejoin="round"
							stroke-width="32"
						/>
						<path
							d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/>
					</svg>

					<span>{{ aircraft.properties.catering }}</span>
				</li>
				<li class="flex items-center text-sm capitalize space-x-3">
					<!-- Icon -->
					<svg viewBox="0 0 395 395" class="h-5 w-5 text-jet-light">
						<path
							fill="currentColor"
							d="M229.412,130.862c-2.405-3.355-6.284-5.346-10.412-5.346h-1.266c-5.524,0-10.424,3.539-12.161,8.782l-27.534,83.09
							l-27.662-83.107c-1.743-5.233-6.639-8.765-12.156-8.765h-0.822c-0.051,0-0.104,0.003-0.153,0.003c-0.053,0-0.105-0.003-0.155-0.003
							h-0.998c-5.524,0-10.425,3.539-12.163,8.782l-27.533,83.09l-27.661-83.107c-1.742-5.233-6.64-8.765-12.156-8.765h-1.268
							c-4.13,0-8.007,1.991-10.414,5.346c-2.407,3.357-3.045,7.669-1.72,11.579l40.125,118.344c1.763,5.201,6.643,8.698,12.135,8.698
							h0.53c0.153,0,0.303-0.008,0.455-0.014c0.151,0.006,0.302,0.014,0.454,0.014h0.354c5.5,0,10.386-3.511,12.142-8.721l27.845-82.675
							l27.718,82.657c1.751,5.221,6.642,8.739,12.148,8.739h0.527c0.153,0,0.303-0.008,0.456-0.014c0.15,0.006,0.302,0.014,0.454,0.014
							h0.355c5.491,0,10.37-3.497,12.134-8.698l40.125-118.344C232.459,138.531,231.818,134.22,229.412,130.862z"
						/>
						<path
							fill="currentColor"
							d="M347.88,232.295c-4.756-4.416-12.063-4.578-17.01-0.378c-8.521,7.234-19.511,11.218-30.943,11.218
							c-26.069,0-47.277-20.51-47.277-45.721c0-25.116,21.208-45.548,47.277-45.548c11.542,0,22.522,3.916,30.921,11.027
							c5.087,4.306,12.625,3.995,17.339-0.719l0.427-0.427c2.544-2.542,3.899-6.036,3.74-9.628c-0.161-3.592-1.822-6.952-4.58-9.258
							c-13.371-11.184-30.366-17.344-47.848-17.344c-40.598,0-73.628,32.253-73.628,71.898c0,39.739,33.03,72.07,73.628,72.07
							c17.454,0,34.493-6.207,47.979-17.48c2.822-2.36,4.495-5.817,4.589-9.494c0.098-3.678-1.393-7.22-4.087-9.723L347.88,232.295z"
						/>
						<path
							fill="currentColor"
							d="M313.001,0H81.999C36.785,0,0,36.784,0,81.998v230.993C0,358.211,36.785,395,81.999,395h231.002
							C358.216,395,395,358.211,395,312.991V81.998C395,36.784,358.216,0,313.001,0z M380,312.991C380,349.94,349.945,380,313.001,380
							H81.999C45.056,380,15,349.94,15,312.991V81.998C15,45.055,45.056,15,81.999,15h231.002C349.945,15,380,45.055,380,81.998V312.991z
							"
						/>
					</svg>
					<span>{{ aircraft.properties.toilet }}</span>
				</li>
				<li class="flex items-center text-sm capitalize space-x-3">
					<!-- Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 text-jet-light"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<span>{{ aircraft.properties.range }}  hours</span>
				</li>
			</ul>
			<h4 class="text-right text-xl">{{ aircraft.rate }}<span class="text-md">/h</span></h4>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		aircraft: Object
	}
}
</script>