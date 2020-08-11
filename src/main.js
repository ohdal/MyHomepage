import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'
import './assets/style/main.scss'

Vue.use(Element, {locale, size: 'small'})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')