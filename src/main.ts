import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './styles.css'

import { LockPlugin } from 'vite-plugin-vue-lock'
import { connectors } from '@/helpers/connectors'

const app = createApp(App)

app.use(router)
app.use(LockPlugin, { connectors })

app.mount('#app')
