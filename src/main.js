// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

/* Vue.config 是一个对象， 包含 Vue 的全局配置，可以在应用启动之前配置相应的属性 */
Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
