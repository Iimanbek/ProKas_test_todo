import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const PINIA = createPinia()
PINIA.use(({store}) => {
    store.router = markRaw(router)
})
const app = createApp(App)

app.use(PINIA)
app.use(router)

app.mount('#app')
