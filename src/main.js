import { createApp } from 'vue'
import App from './App.vue'
import store from './modules/store'
// import store2 from './modules/store2'
import router from './modules/vueRouter'

const app = createApp(App)
app.use(store)
// app.use(store2)
app.use(router)
app.mount('#app')
