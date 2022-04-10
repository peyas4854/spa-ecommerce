const FrontendRoutes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home'),
        meta     : {
            title: 'Home'
        }
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('./pages/product/ProductDetail'),
        meta     : {
            title: 'Product Detail'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/about'),
        meta     : {
            title: 'About'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../backend/auth/Login'),
        meta     : {
            title: 'Login',
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../backend/auth/Register'),
        meta     : {
            title: 'Register',
        }
    },
]

export default FrontendRoutes;
