import {createStore} from 'vuex';
import ApiService    from "@/service/api.service";
import JwtService    from "@/service/jwt.service";
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
        SET_USER(state, data) {
            return state.user = data
        },
        REDIRECT_AFTER_LOGIN(state, user) {
            if (user.is_admin == 1) {
                router.push({name: "dashboard"});
                JwtService.saveLoggedUser('admin')
            } else {
                router.push({name: 'home'});
                JwtService.saveLoggedUser('user')
            }
        },
        LOG_OUT(state,data){
           return state.user = data
        }
    },
    actions  : {
        getUser(context) {
            ApiService.get('/user').then(response => {
                context.commit("GET_USER", response.data.data);
            }).catch(error => {
                console.log(error, 'error')
            }).finally(() => {
                context.commit("LOADER", false)
            });
        },
    },
})
