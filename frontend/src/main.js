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
            authUser(JwtService.getLoggedUser())

        }
    } else if (JwtService.getLoggedUser() == 'user') {
        authUser('user')
    }

    //if user logged and user state login page then redirect to dashboard
    if (to.name == 'login') {
        console.log("five");
        if (JwtService.getToken()) {
            if (JwtService.getLoggedUser() == 'admin') {
                next({
                    name  : 'dashboard',
                    params: {nextUrl: to.fullPath}
                })

            } else {
                console.log('home home ')
                next({
                    name  : 'home',
                    params: {nextUrl: to.fullPath}
                })
            }
        }
    }

    //Logged user data return then commit in vuex
    function authUser(type) {
        ApiService.get(`/${type}/auth`).then(response => {
            console.log('res', response.data);
            store.commit("SET_USER", response.data);
            next()
        }).catch(error => {
            JwtService.destroyToken();
            next({name: `login`})
        })
    }

    next();
    Vue.nextTick(() => {
        document.title = `${to.meta.title} - ${process.env.VUE_APP_TITLE}` || process.env.VUE_APP_TITLE
    })
});

// vue instance
const app = createApp(App)

app.config.globalProperties.$filters = {
    currencyTK(value) {
        return 'Tk. ' + value
    }
}
app.use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("loader", RotateSquare2)
    .mount('#app')


