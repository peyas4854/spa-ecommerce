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
        path: '/login',
        name: 'Login',
        component: () => import('../backend/auth/Login'),
        meta     : {
            title: 'Login'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../backend/auth/Register'),
        meta     : {
            title: 'Register'
        }
    },
]

export default FrontendRoutes;
