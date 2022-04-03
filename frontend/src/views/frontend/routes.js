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
        name: 'login',
        component: () => import('../backend/auth/Login'),
        meta     : {
            title: 'Login',
            guestOnly:true,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../backend/auth/Register'),
        meta     : {
            title: 'Register',
            guestOnly:true,
        }
    },
]

export default FrontendRoutes;
