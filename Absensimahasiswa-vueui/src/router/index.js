import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/students/Home.vue'
import Index from '../views/absens/Index.vue'
import Createstudents from '../views/students/Createstudents.vue'
import Editstudents from '../views/students/Editstudents.vue'
import Createabsens from '../views/absens/Createabsens.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/createstudents',
    name: 'Createstudents',
    // route level code-splitting
    // this generates a separate chunk (Createstudents.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createstudents
  },
  {
    path: '/editstudents/:id',
    name: 'Editstudents',
    // route level code-splitting
    // this generates a separate chunk (Editstudents.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editstudents
  },
  {
    path: '/Createabsens',
    name: 'Createabsens',
    // route level code-splitting
    // this generates a separate chunk (Createabsens.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabsens
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router