import axios from "axios";

const state = {
  searchPlace: [],
  searchTags: [],
  searchHistory: [],
  searchResult: {}
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
  },
  getSearchResult({ commit }, payload) {
    axios.get('/api/search?' + payload).then(res => {
      commit("getSearchResult", res.data)
    })
  },
  emptySearchResult({ commit }, payload) {
    commit("emptySearchResult")
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
  },
  getSearchResult(state, data) {
    state.searchResult = data;
  },
  emptySearchResult(state, data) {
    state.searchResult = {};
  }
}

export default {
  state,
  actions,
  mutations
}