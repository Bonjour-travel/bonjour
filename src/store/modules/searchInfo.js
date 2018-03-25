import axios from "axios";

const state = {
  searchPlace: [],
  searchTags: [],
  history: []
}

const actions = {
  getHotTags({ commit }, payload) {
    axios.get('/api/hottag').then((res) => {
      commit("getHotTags", res.data);
    })
  },
  getHotPlace({ commit }, payload) {
    axios.get('/api/hotplace').then((res) => {
      commit("getHotPlace", res.data);
    })
  }
}

const mutations = {
  getHotTags(state, data) {
    state.searchTags = data;
  },
  getHotPlace(state, data) {
    state.searchPlace = data;
  }
}

export default {
  state,
  actions,
  mutations
}