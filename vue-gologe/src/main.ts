import { createApp } from 'vue'

import router from './router/router.ts'
import i18n from './localization/i18n.ts'
import components from './components/UI'

import App from './App.vue'

import '././assets/root/style.css'
import '././assets/root/fonts.css'
import '././assets/root/reset.css'

const app = createApp(App);

app.use(router)
app.use(i18n)

for (let index = 0; index < Object.keys(components).length; index++) {
	const element = Object.keys(components)[index];
	app.component(element, components[element]);
}

app.mount('#app')