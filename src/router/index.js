import Vue from 'vue'
import Router from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import NotFound from '@/views/NotFound'

Vue.use(Router)

// Routes
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'General Layout',
      component: DefaultLayout
    },
    { path: '*', name: '404 View', component: NotFound }
  ]
})

export default router