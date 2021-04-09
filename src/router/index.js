import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostsIndex from '../views/PostsIndex.vue'
import PostsShow from '../views/PostsShow.vue'
import PostsNew from '../views/PostsNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Posts',
    name: 'PostsIndex',
    component: PostsIndex
  },
  {
    path: '/Posts/new',
    name: 'PostsNew',
    component: PostsNew
  },
  {
    path: '/Posts/:id',
    name: 'PostsShow',
    component: PostsShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
