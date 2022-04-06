import {createStore} from 'vuex';
import ApiService    from "@/service/api.service";


export default createStore({
    state    : {
        user: {},
    },
    getters  : {
        getCurrentUser(state) {
            return state.user
        },

    },
    mutations: {
        GET_USER(state, data) {
            console.log()
            return state.user = data
        },
    },
    actions  : {
        getUser(context) {
            ApiService.get('/user').then(response => {
                console.log('action getUser ', response);
                context.commit("GET_USER", response.data.data);
            }).catch(error => {
                console.log(error, 'error')
            }).finally(() => {
                context.commit("LOADER", false)
            });
        },
    },
})
