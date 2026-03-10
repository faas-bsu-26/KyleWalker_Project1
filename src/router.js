import { createWebHistory, createRouter } from 'vue-router';

import Home from './components/pages/Home.vue';
import Course from './components/pages/Course.vue';
import Lesson from './components/pages/Lesson.vue';
import Collection from './components/pages/Collection.vue';
import SignIn from './components/pages/Onboarding/SignIn.vue';
import SignUp from './components/pages/Onboarding/SignUp.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Course', component: Course },
    { path: '/Lesson', component: Lesson },
    { path: '/Collection', component: Collection },
    { path: '/SignIn', component: SignIn },
    { path: '/SignUp', component: SignUp },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
