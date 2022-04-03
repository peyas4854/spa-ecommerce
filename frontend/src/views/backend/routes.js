const BackEndRoutes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Dashboard',
            authOnly: true

        }
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('./pages/product/index'),
        meta     : {
            title: 'Product',
            authOnly: true
        }
    },

]



export default BackEndRoutes;
