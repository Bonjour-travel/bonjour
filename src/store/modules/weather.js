import axios from 'axios';

const state = {
    // citycode: '',
    weather_lives: [],
    weather_forecasts: []
}

const actions = {
    // getCityCode({commit},payload){
    //     return new Promise((reslove,reject)=>{
    //         axios.get('http://restapi.amap.com/v3/geocode/regeo?location='
    //             + payload.lng + ',' + payload.lat + '&key=6e60e2f9398958975c2a48751f1ff952')
    //         .then((res)=>{
    //             commit('getCityCode',res.data.regeocode);
    //             reslove(res.data.regeocode);
    //         });
    //     })
    // },
    getCityWeatherLives({commit},payload){
        return new Promise((reslove,reject)=>{
            axios.get('http://restapi.amap.com/v3/weather/weatherInfo?city='
                + payload.citycode + '&key=6e60e2f9398958975c2a48751f1ff952&extensions=base')// + payload.mode)
            .then((res)=>{
                commit('getCityWeatherLives',res.data);
                reslove(res.data);
            });
        })
    },
    getCityWeatherForecasts({commit},payload){
        return new Promise((reslove,reject)=>{
            axios.get('http://restapi.amap.com/v3/weather/weatherInfo?city='
                + payload.citycode + '&key=6e60e2f9398958975c2a48751f1ff952&extensions=all')// + payload.mode)
            .then((res)=>{
                commit('getCityWeatherForecasts',res.data);
                reslove(res.data);
            });
        })
    },
}

const mutations = {
    // getCityCode(state, data){
    //     state.citycode = data.addressComponent.adcode;
    // },
    getCityWeatherLives(state, data){
        state.weather_lives =data.lives;
    },
    getCityWeatherForecasts(state, data){
        state.weather_forecasts = data.forecasts//[0].casts;
    },
}

export default {
    state,
    actions,
    mutations
}