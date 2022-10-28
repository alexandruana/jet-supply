export const state = () => ({
	list: []
})

export const mutations = {
	add(state, depAirport) {
		state.list.push({
			depAirport
		})
	},
	remove(state, { list }) {
		state.list.splice(state.list.indexOf(list), 1)
	},
	toggle(state, list) {
		list.done = !list.done
	}
}