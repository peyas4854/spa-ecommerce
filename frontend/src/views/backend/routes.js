const BackEndRoutes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Dashboard',
        }
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('./pages/product/index'),
        meta     : {
            title: 'Product',
        }
    },

]



export default BackEndRoutes;
