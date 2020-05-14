import Vue from 'vue'
import Router from 'vue-router'
import Listing from '@/components/Listing'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listring',
      component: Listing
    },
    {
      path: '/detail',
      name: 'Details',
      component: Details
    }

  ]
})
