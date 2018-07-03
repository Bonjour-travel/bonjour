import Vue from 'vue'
import Vuex from 'vuex'

import listsStore from './modules/listsStore'
import attraction from './modules/attraction'
import weather from './modules/weather'
import searchInfo from './modules/searchInfo'
import userInfo from './modules/userInfo'
import chatbot from './modules/chatbot'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userInfo,
        listsStore,
        attraction,
        weather,
        searchInfo,
        chatbot
    }
})