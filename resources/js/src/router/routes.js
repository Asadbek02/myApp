import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Main from "@/pages/partials/Main.vue";
import Login from '@/pages/auth/Login.vue';
import Register from '@/pages/auth/Register.vue';
import NotFound from '@/pages/errors/NotFound.vue';


const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }

];

export default routes;
