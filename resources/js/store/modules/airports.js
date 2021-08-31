import axios from "axios";

const state = {
    strict: true,
    trip: {
        departure: {},
        arrival: {}
    },
};

const getters = {
    allAirports: (state) => state.trip,
};

const actions = {
    addAirport({ commit }, { airport, point }) {
        commit('ADD_AIRPORT', { airport, point })
    },
    removeAirport({ commit }, id) {
        commit('CLEAR_AIRPORT', id)
    }
};

const mutations = {
    ADD_AIRPORT: (state, { airport, point }) => {
        state.trip[point] = airport
    },
    CLEAR_AIRPORT: (state, id) => {
        for (const element in state.trip) {
            if (state.trip[element].id === id) {
                state.trip[element] = {}
            }
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
