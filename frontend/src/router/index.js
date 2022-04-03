import {createRouter, createWebHistory} from 'vue-router'

// FrontEnd
import FrontEndLayout from '../views/frontend/Layout';
import FrontEndRoutes from '../views/frontend/routes';

// Backend
import BackendEndLayout from '../views/backend/Layout';
import BackEndRoutes    from '../views/backend/routes';

import NotFound from '../components/404';


const routes = [
    //==========Frontend routing==========
    {
        path     : '/',
        component: FrontEndLayout,
        children : FrontEndRoutes
    },
    //==========Frontend routing==========
    {
        path     : '/',
        component: BackendEndLayout,
        children : BackEndRoutes,
    },
    //==========404  routing==========
    {
        path     : '/:catchAll(.*)',
        name     : 'Not Found',
        component: NotFound,
        meta     : {
            title: 'Not Found'
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function isLoggedIn() {
    return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        console.log('here1');
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            console.log('here2');
            next({
                name  : "login",
                params: {nextUrl: to.fullPath}
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        console.log('dashboard');
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                name  : "dashboard",
                params: {nextUrl: to.fullPath}
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});
export default router
