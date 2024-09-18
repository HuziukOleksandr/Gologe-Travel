import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadStyles } from "./assets/root/styles/index.ts"

import router from "./router/router.ts";
import i18n from "./localization/i18n.ts";
import components from "./components/UI";
import VueClickAway from "vue3-click-away";
import dayjs from 'dayjs'
import ElementPlus from "element-plus";

import App from "./App.vue";

import "element-plus/dist/index.css";
import "././assets/root/style.scss";
import "././assets/root/fonts.scss";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$dayjs = dayjs
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(VueClickAway);
app.use(ElementPlus);

for (let index = 0; index < Object.keys(components).length; index++) {
  const element = Object.keys(components)[index];
  app.component(element, components[element]);
}


loadStyles().then(() => {
  app.mount('#app');
});
