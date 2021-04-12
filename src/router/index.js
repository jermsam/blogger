import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../AppOld.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component:Blog
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component:() => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },{
    path: '/post/:id',
    name: 'Post',
    component:Post,
    props:true
  },
  {
    path: '*',
    component:() => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
