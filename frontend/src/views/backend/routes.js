const BackEndRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Dashboard'
        }
    },
]

export default BackEndRoutes;
