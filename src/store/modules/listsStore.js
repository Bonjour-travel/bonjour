import axios from 'axios';
const state = {
    //首页Lists信息
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
    },
    addListsInfo({commit},payload){
                commit('addListsInfo',payload);
    }
}

const mutations = {
    getListsInfo(state, data){
        state.lists = data;
    },
    addListsInfo(state, data){
        state.lists.push(data);
    }
}

export default {
    state,
    actions,
    mutations
}