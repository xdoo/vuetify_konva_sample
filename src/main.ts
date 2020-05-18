import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueKonva from 'vue-konva'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(VueKonva)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
