import { createStore } from "vuex";
import airports from './modules/airports'

// Create store

export default createStore({
    modules: {
        airports
    }
});
