import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//services
import ApiService from "@/service/api.service";
import * as JwtService from "@/service/jwt.service";


ApiService.init();
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!JwtService.getToken()) {
            next({
                name  : 'login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            ApiService.get('/user').then(response => {
                console.log('user data',response.data);
                store.commit("GET_USER", response.data);
                next()
            }).catch(error => {
                JwtService.destroyToken();
                next({name: 'login'})
            })

        }
    }
    next();
    // Vue.nextTick(() => {
    //     document.title = `${to.meta.title} - ${process.env.VUE_APP_TITLE}` || process.env.VUE_APP_TITLE
    // })
});

createApp(App).use(store).use(router).mount('#app')
