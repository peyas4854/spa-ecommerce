import {createStore} from 'vuex'

export default createStore({
    state    : {
        user:{},
        authenticated:false,


    },
    getters  : {
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions  : {
        logout({commit}){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
        }

    },
    modules  : {}
})
