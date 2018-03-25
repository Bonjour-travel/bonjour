import Vue from 'vue'
import Router from 'vue-router'

// import PagesView from '../views/PagesView'
// import HomeView from '../views/HomeView'
// import MovieView from '../views/MovieView'
// import BookView from '../views/BookView'
// import StatusView from '../views/StatusView'
// import GroupView from '../views/GroupView'
// import SubjectView from '../views/SubjectView'
// import DetailView from '../views/DetailView'
// import SearchView from '../views/SearchView'
// import LoginView from '../views/LoginView'
// import RegisterView from '../views/RegisterView'
import Home from '../pages/Home/Home'
import AttractionList from '../pages/AttractionList/AttractionList'
import Attraction from '../pages/Attraction/Attraction'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/pages/'
    // },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/attractionlist',
      name: 'AttractionList',
      component: AttractionList
    },
    {
      path: '/attraction/:id',
      name: 'Attraction',
      component: Attraction
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
