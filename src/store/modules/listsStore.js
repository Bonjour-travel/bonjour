import axios from 'axios';
const state = {
    //首页Lists信息
    lists:[]
}

const actions = {
    getListsInfo({commit},payload){
        return new Promise((reslove,reject)=>{
            axios.get('/api/lists').then((res)=>{
                //模拟分页
                let data = res.data.slice(0,5);
                commit('getListsInfo',data);
                reslove(data);                
            })
        })
    },
    addListsInfo({commit},payload){
                commit('addListsInfo',payload);
    }
}

const mutations = {
    getListsInfo(state, data){
        //concat,filter,slice这些非变异函数不会改变原数组，所以不能用state.lists.concat这种写法
        state.lists = state.lists.concat(data);
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