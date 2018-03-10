import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import activities from './modules/activities'
import attraction from './modules/attraction'
import book from './modules/book'
import subject from './modules/subject'
import group from './modules/group'
import search from './modules/search'
import location from './modules/location'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        movie,
        activities,
        attraction,
        book,
        subject,
        group,
        location,
        user
    }
})