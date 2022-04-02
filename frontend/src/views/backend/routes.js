const BackEndRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Dashboard'
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('./pages/product/index'),
        meta     : {
            title: 'Product'
        }
    },

]

export default BackEndRoutes;
