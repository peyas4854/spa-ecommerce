import {createStore} from 'vuex';
import ApiService    from "@/service/api.service";
import router        from "@/router";


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
        REDIRECT_AFTER_LOGIN(state, user) {
            console.log('router', router);
            console.log('REDIRECT_AFTER_LOGIN', user);
            if (user.is_admin == 1) {
                router.push({name: "dashboard"});

            } else {
                router.push({name: 'home'});
            }
        }
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
