import { createApp } from 'vue'
import App from './App.vue'
import store from './modules/store'
import router from './modules/vueRouter'
import VueClipboard from 'vue3-clipboard'

const app = createApp(App)
app.use(store)
app.use(VueClipboard,{
  autoSetContainer: true,
  appendToBody: true,
})
app.use(router)
app.mount('#app')
