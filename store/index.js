import axios from 'axios'

export const state = () => ({
    airports: [],
    filteredAirports: [],
    filter: {
        keyword: ''
    },
    pairing: {
        departure: null,
        arrival: null
    },
    loading: false
})

export const getters = {
    getAirports: (state) => {
      return state.airports
    },
    getPairing: (state) => {
        return state.pairing
    }
}

export const mutations = {
    SET_AIRPORTS(state, payload) {
        state.airports = payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    UPDATE_AIRPORT(state, { airport, type }) {
        state.pairing[type] = airport
    },
    CLEAR_AIRPORT(state, type) {
        state.pairing[type] = null
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, context) {
        await dispatch('loadAirports', context)
    },
    async loadAirports({ commit }) {
        commit('SET_LOADING', true)
        await axios.get('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat')
            .then(response => {
                // Get each row of data from the source
                const rows = response.data.split('\n');

                // Convert data from row to object
                const airports = rows.map(row => {
                    // Parse the comma-separated fields from the line by using
                    const fields = row.split(',')
                        .map(x => x.replace(/(^"|"$)/g, ''));

                    return {
                        id: fields[0],
                        name: fields[1],
                        city: fields[2],
                        country: fields[3],
                        iata: fields[4],
                        icao: fields[5],
                        longitude: fields[6],
                        latitude: fields[7],
                    };
                });
                
                commit('SET_AIRPORTS', airports)
                commit('SET_LOADING', false)
            })
            .catch(( error ) => {
                console.log(error)
            }) 
    },
    addAirport({ commit }, { airport, type }) {
        commit('UPDATE_AIRPORT', { airport, type })
    },
    removeAirport({ commit }, type) {
        commit('CLEAR_AIRPORT', type)
    }
}

