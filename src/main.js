import { createApp } from 'vue'
import App from './App.vue'
import store from './modules/store'
import router from './modules/vueRouter'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
