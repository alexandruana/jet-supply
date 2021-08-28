import axios from "axios";

const state = {
    airports: [],
};

const getters = {
    allAirports: (state) => state.airports
};

const actions = {
    addAirport({ commit }, airport) {
        commit('setAirport', airport);
    },
    removeAirport({ commit }, id) {
        commit('clearAirport', id)
    }
};

const mutations = {
    setAirport: (state, airport) => state.airports.push(airport),
    clearAirport: (state, id) => {
        let index = state.airports.findIndex(airport => airport.id === id)
        state.airports.splice(index, 1)
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
