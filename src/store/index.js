import Vue from 'vue'
import Vuex from 'vuex'

// import movie from './modules/movie'
// import activities from './modules/activities'
// import book from './modules/book'
// import subject from './modules/subject'
// import group from './modules/group'
// import search from './modules/search'
// import location from './modules/location'
// import user from './modules/user'
import listsStore from './modules/listsStore'
import attraction from './modules/attraction'
import weather from './modules/weather'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        listsStore,
        attraction,
        weather
    }
})