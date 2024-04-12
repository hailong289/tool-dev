import { createMemoryHistory, createRouter } from 'vue-router'

import Layout from '../components/Layout.vue';

const routes = [
  { path: '/', component: Layout }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})