import request from 'superagent'

const state = {
    attractions: [],
    temp: [],
    skip: 0,
    attractionItem: {}
}

const mutations = {
    loadMore(state, payload) {
        state.skip += 3
        state.attractions = state.attractions.concat(payload.res)
    },
    getSingleEvent(state, payload) {
        state.attractionItem = payload.res
    }
}

const actions = {
    /**
     * Loading more data
     * skip: 3 default
     * count: 3 default
     */
    loadMore({ commit, state }) {
        return new Promise((resolve, reject) => {
            request
               .get('/api/bonjour')
                // .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
                    // state.skip + '&count=3')
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'loadMore',
                            res: res.body.attractions
                        })
                        resolve(res)
                    }
                })
        })
    },
    /**
     * Getting single event
     * id: event id
     */
    getSingleEvent({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            request
                .get('/api/bonjour')
                // .get('https://api.douban.com/v2/event/' + payload.id)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getSingleEvent',
                            res: res.body
                        })
                        resolve(res)
                    }
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}