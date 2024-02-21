import { createApp } from 'vue'

import router from './router/router.ts'

import App from './App.vue'

import '././assets/root/style.css'
import '././assets/root/fonts.css'

const app = createApp(App);

app.use(router)
app.mount('#app')
