import Vue from 'vue'
import App from './App.vue'
import defineCustomElements from './defineCustomElements'

Vue.config.productionTip = false


defineCustomElements();

new Vue({
  render: h => h(App)
}).$mount('#app')
