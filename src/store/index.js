import Vuex from 'vuex'
import Vue from 'vue'

import airports from './modules/airports'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        airports
    }
});