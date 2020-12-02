import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Admin from '../components/Admin/index2'
// import NotFound from '../pages/NotFound'

const components = {
    home: {
        path: '/',
        page: Home,
    },
    profile: {
        path: '/profile',
        page: Profile
    },
    dashboard: {
        path: '/',
        page: Dashboard
    },
    admin: {
        path: '/admin',
        page: Admin
    },
    register: {
        path: '/register',
        page: Register
    }
};


const roles = {
    GUEST: [
        components.home,
        components.register
    ],
    USER: [
        components.dashboard,
        components.profile
    ],
    ADMIN: [
        components.admin
    ]
};

export default roles;
