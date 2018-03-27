import Vue from 'vue'
import Vuex from 'vuex'

import listsStore from './modules/listsStore'
import searchInfo from './modules/searchInfo'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userInfo,
        listsStore,
        searchInfo
    }
})