import axios from 'axios';
const state = {
    //首页Lists信息
    lists: []
}
const getters = {
    // 标签随机颜色属性
    colorTags(state) {
        let colors = [
            'rgb(94, 174, 240)',
            "rgb(222, 224, 97)",
            "rgb(33, 83, 38)",
            "rgb(204, 82, 44)"
        ];
        // 记录前一个标签颜色
        let preTagColor = '';
        // 数组返回随机元素
        let randomArrIndex = (arr) => {
            let randomValue = arr[Math.floor(Math.random() * arr.length)];

            while (randomValue === preTagColor) {
                randomValue = arr[Math.floor(Math.random() * arr.length)];
            }
            preTagColor = randomValue;
            return randomValue;
        };
        return state.lists.map(data => {
            // 新增一个属性
            data.colorTags = []
            data.tags.forEach(tag => {
                data.colorTags.push({
                    tag,
                    color: randomArrIndex(colors)
                })
            });
            return data;
        })
    }
}

const actions = {
    // 获取列表信息
    getListsInfo({ commit }, payload) {
        return new Promise((reslove, reject) => {
            axios.get('/api/lists').then((res) => {
                //模拟分页
                let datas = res.data.slice(0, 5);
                commit('getListsInfo', datas);
                reslove(datas);
            })
        })
    },
    addListsInfo({ commit }, payload) {
        commit('addListsInfo', payload);
    }
}

const mutations = {
    getListsInfo(state, data) {
        //concat,filter,slice这些非变异函数不会改变原数组，所以不能用state.lists.concat这种写法
        state.lists = state.lists.concat(data);
    },
    addListsInfo(state, data) {
        state.lists.push(data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}