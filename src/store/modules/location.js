import axios from 'axios'

const state = {
    location: {},
}

const actions = {
    getLocation({ commit }, data) {
        axios.get('/getLocation')
            .then(res => {
                commit('getLocation', res)
            })
    }
}

const mutations = {
    getLocation(state, data) {
        state.location = data;
    }
}

export default {
    state,
    actions,
    mutations,
}