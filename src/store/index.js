import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        jwttoken: null
    },
    mutations: {
        putUser(state, jwttoken) {
            state.jwttoken = jwttoken;
        }
    }
})
export default store