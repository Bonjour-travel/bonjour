import Vue from 'vue'
import Router from 'vue-router'

import AttractionListPage from '../pages/bonjour/AttractionListPage'
import AttractionPage from '../pages/bonjour/AttractionPage'
import Home from '../pages/Home'
import Search from '../pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/pages/'
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/pages/attractionlist',
      name: 'AttractionListPage',
      component: AttractionListPage
    },
    {
      path: '/pages/attraction/:id',
      name: 'AttractionPage',
      component: AttractionPage
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
