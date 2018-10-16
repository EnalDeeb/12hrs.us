import Vue from 'vue'
import App from './App.vue'
import {Howl, Howler} from 'howler';
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
