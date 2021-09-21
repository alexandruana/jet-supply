import axios from 'axios'

export const state = () => ({
    airports: [],
})

export const getters = {
    getAirports: (state) => {
      return state.airports
    }
}

export const mutations = {
    SET_AIRPORTS(state, airports) {
        state.airports = airports
    }
}

export const actions = {
    loadAirports({ commit }) {
        axios.get('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat')
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
            })
    },
    debug() {
        console.log('Airports loaded')
    }
}

