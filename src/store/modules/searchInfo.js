import axios from "axios";

const state = {
  searchPlace: [],
  searchTags: [],
  searchHistory: []
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
  },
  getHistory({ commit }, payload) {
    axios.get('/api/history').then((res) => {
      commit("getHistory", res.data);
    })
  }
}

const mutations = {
  getHotTags(state, data) {
    state.searchTags = data;
  },
  getHotPlace(state, data) {
    state.searchPlace = data;
  },
  getHistory(state, data) {
    state.searchHistory = data;
  }
}

export default {
  state,
  actions,
  mutations
}