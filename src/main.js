import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './repositories/index.js'

import { createPinia } from 'pinia'

const pinia = createPinia()

import '@/assets/css/main.css'

createApp(App).use(pinia).use(router).mount('#app')
