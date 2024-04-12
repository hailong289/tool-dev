import { createMemoryHistory, createRouter } from 'vue-router'
import MonacoVue from '../components/Monaco.vue';
import DiffVue from '../components/Diff.vue';
import AppVue from '../App.vue';


const routes = [
    {
        path: '/',
        component: MonacoVue,
        // children: [
        //     { path: '/', component: MonacoVue},
        //     { path: '/diff', component: DiffVue },
        // ]
    },
    { path: '/diff', component: DiffVue },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;