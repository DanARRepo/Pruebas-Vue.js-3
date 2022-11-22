import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// Vuetify
import '@/plugins/vuetify'

// Font awesome
import { FontAwesomeIcon } from '@/plugins/fontAwesome'

createApp({
  extends: App,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  }
}).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
