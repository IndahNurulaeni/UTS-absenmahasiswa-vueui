import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/students/Home.vue'
import Index from '../views/absens/Index.vue'
import Matkul from '../views/matakuliahs/Matkul.vue'
import Jdwl from '../views/jadwals/Jdwl.vue'
import Semesters from '../views/semesters/Semesters.vue'
import Kontraks from '../views/kontraks/Kontraks.vue'
import Createstudents from '../views/students/Createstudents.vue'
import Editstudents from '../views/students/Editstudents.vue'
import Createabsens from '../views/absens/Createabsens.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'
import Createsemesters from '../views/semesters/Createsemesters.vue'
import Editsemesters from '../views/semesters/Editsemesters.vue'
import Createjadwals from '../views/jadwals/Createjadwals.vue'
import Createkontraks from '../views/kontraks/Createkontraks.vue'

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
    path: '/jdwl',
    name: 'Jdwl',
    component: Jdwl
  },
  {
    path: '/kontraks',
    name: 'Kontraks',
    component: Kontraks
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
  },

  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (Editmatakuliahs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
  },
  {
    path: '/Creatematakuliahs',
    name: 'Creatematakuliahs',
    // route level code-splitting
    // this generates a separate chunk (Creatematakuliahs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/matkul',
    name: 'Matkul',
    component: Matkul
  },
  {
    path: '/Semesters',
    name: 'Semesters',
    component: Semesters
  },
  {
    path: '/editsemesters/:id',
    name: 'Editsemesters',
    // route level code-splitting
    // this generates a separate chunk (Editsemesters.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsemesters
  },
  {
    path: '/createsemesters',
    name: 'Createsemesters',
    // route level code-splitting
    // this generates a separate chunk (Createsemesters.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsemesters
  },
  {
    path: '/Createjadwals',
    name: 'Createjadwals',
    // route level code-splitting
    // this generates a separate chunk (Createjadwals.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createjadwals
  },
  {
    path: '/Createkontraks',
    name: 'Createkontraks',
    // route level code-splitting
    // this generates a separate chunk (Createkontraks.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontraks
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router