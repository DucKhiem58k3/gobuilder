import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/function',
    name:'function',
    component: () => import('../views/Function.vue')
  },
  {
    path:'/template',
    name:'template',
    component: () => import('../views/Template.vue')
  },
  {
    path:'/price',
    name:'price',
    component: () => import('../views/Price.vue')
  },
  {
    path:'/guide',
    name:'guide',
    component: () =>import('../views/Guide.vue')
  },{
    path:'/blog',
    name:'blog',
    component: () =>import('../views/Blog.vue')
  },
  {
    path:'/signin',
    name:'signin',
    component: ()=>import('../views/SignIn.vue')
  },
  {
    path:'/login',
    name:'login',
    component:() =>import('../views/Login.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:() =>import('../views/SignUp.vue')
  },
  {
    path:'/signuperror',
    name:'signuperror',
    component:() =>import('../views/SignUpError.vue')
  },
  {
    path:'/mysite',
    name:'mysite',
    component:() =>import('../views/MySite.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
