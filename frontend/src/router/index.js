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

    {
        path     : '/',
        component: BackendEndLayout,
        children : BackEndRoutes,
    },

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

export default router
