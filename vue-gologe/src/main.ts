import { createApp } from 'vue'

import router from './router/router.ts'
import i18n from './localization/i18n.ts'

import App from './App.vue'

import '././assets/root/style.css'
import '././assets/root/fonts.css'

const app = createApp(App);

app.use(router)
app.use(i18n)
app.mount('#app')
