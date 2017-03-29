// icon地址：https://material.io/icons/
import Vue from 'vue';
import App from './App';
import router from './router';
import MuseUI from 'muse-ui';

import '../static/css/muse-ui.css';
import '../static/css/theme-carbon.css' // 使用 carbon 主题
import '../static/css/css.css'; //自定义样式

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
  	App,
  }
})
