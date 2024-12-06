import '@/assets/style/global.scss'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

createApp(App).use(router).use(createPinia().use(piniaPluginPersistedstate)).mount('#app')
