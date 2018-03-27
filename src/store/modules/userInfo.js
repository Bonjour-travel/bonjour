import axios from 'axios';
const state = {
  ip: "",
  local: ""
}

const actions = {
  getLocation({ commit }, data) {
    commit('getLocation')
  }
}

const mutations = {
  getLocation(state, data) {
    state.ip = returnCitySN["cip"];
    state.local = returnCitySN["cname"];
  }
}

export default {
  state,
  actions,
  mutations
}