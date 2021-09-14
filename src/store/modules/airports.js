import axios from 'axios'

const state = {
    strict: true,
    airports: []
};

const getters = {
    allAirports: (state) => state.airports,
};

const actions = {
    getAirports({ commit }) {
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
    }
};

const mutations = {
    SET_AIRPORTS(state, airports) {
        state.airports = airports
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
