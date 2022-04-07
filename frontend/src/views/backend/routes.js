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
            title: 'Product List',
        }
    },{
        path: '/product/create',
        name: 'productCreate',
        component: () => import('./pages/product/create'),
        meta     : {
            title: 'Product Create',
        }
    },

]



export default BackEndRoutes;
