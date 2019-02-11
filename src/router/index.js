import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout'

// Views
import Landing from '@/views/Landing.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

// Routes
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'General Layout',
      component: DefaultLayout,
      children: [
        { path: '', name: 'Landing View', component: Landing }
      ]
    },
    { path: '*', name: '404 View', component: NotFound }
  ]
})

export default router