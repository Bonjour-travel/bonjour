import axios from 'axios';
const state = {
    lists:[]
}

const actions = {
    getListsInfo({commit},payload){
        return new Promise((reslove,reject)=>{
            axios.get('/api/lists').then((res)=>{
                commit('getListsInfo',res.data);
                reslove(res.data);                
            })
        })
    }
}

const mutations = {
    getListsInfo(state, data){
        state.lists = data;
    }
}

export default {
    state,
    actions,
    mutations
}