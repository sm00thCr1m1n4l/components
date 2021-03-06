import Vue from 'vue'
import VueRouter from 'vue-router'
import VirtualList from 'example/views/virtual-list.vue'
import Render from 'example/views/render.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/virtual-list',
    component: VirtualList
  },
  {
    path: '/render',
    component: Render
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
