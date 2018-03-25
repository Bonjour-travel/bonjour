// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior'
import fastclick from 'fastclick'
import 'normalize.css'
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德地图的key
  key: 'a72252c4069ca54c27ebe4aec1bd1075',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.5'
});

Vue.component(Button.name, Button);

Vue.use(vueScrollBehavior, { router: router })

// 消除手机端点击300ms延迟
// fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})