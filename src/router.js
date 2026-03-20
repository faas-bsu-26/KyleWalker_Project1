import { createWebHistory, createRouter } from 'vue-router';

import Home from './components/pages/Home.vue';
import Course from './components/pages/Course.vue';
import Lesson from './components/pages/Lesson.vue';
import Group from './components/pages/Group.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Course', component: Course },
    { path: '/Lesson', component: Lesson },
    { path: '/Group', component: Group },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
