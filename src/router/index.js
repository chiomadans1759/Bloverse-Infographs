import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout'

// Views
import Landing from '@/views/Landing.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

// Routes
const routes = [
    {
      path: '/', 
      name: 'General Layout', 
      component: DefaultLayout,
      children: [
        { path: '', name: 'Landing View', component: Landing }
      ]
    },
    {path: '*', name: '404 View', component: NotFound }
]

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  // mode: 'history',
  base: __dirname
})