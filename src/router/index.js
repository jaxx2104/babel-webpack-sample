import Vue from 'vue'
import VueRouter from 'vue-router'

import Todo from '../pages/Todo.vue'
import Page from '../pages/Page.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Todo },
    { path: '/bar', component: Page },
    { path: '*', redirect: '/' },
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 }
  }
})

export default router
