import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'
import store       from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './scss/main.scss'

// fortawesome icon
import {library}         from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas}             from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import {fab}             from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import {far}             from '@fortawesome/free-regular-svg-icons';
library.add(far);
import {dom}             from "@fortawesome/fontawesome-svg-core";
dom.watch();

//services
import ApiService      from "@/service/api.service";
import * as JwtService from "@/service/jwt.service";
ApiService.init();

//Global Component register
import {RotateSquare2} from 'vue-loading-spinner'

// route check
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!JwtService.getToken()) {
            next({
                name  : 'login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            ApiService.get('/user').then(response => {
                console.log('user data', response.data);
                store.commit("GET_USER", response.data);
                next()
            }).catch(error => {
                JwtService.destroyToken();
                next({name: 'login'})
            })
        }
    }
    next();
});

// vue instance
createApp(App).use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("loader", RotateSquare2)
    .mount('#app')
