import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadStyles } from "./assets/root/styles/index.ts";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./libs/firebase.ts";

import router from "./router/router.ts";
import i18n from "./localization/i18n.ts";
import components from "./components/UI";
import VueClickAway from "vue3-click-away";
import dayjs from "dayjs";
import ElementPlus from "element-plus";

import App from "./App.vue";

import 'sweetalert2/dist/sweetalert2.min.css';
import "element-plus/dist/index.css";
import "./assets/root/style.scss";
import "./assets/root/fonts.scss";

initializeApp(firebaseConfig);

let app: any;
const pinia = createPinia();
const auth = getAuth();

onAuthStateChanged(auth, () => {
  if(!app) {
    app = createApp(App);
    app.config.globalProperties.$dayjs = dayjs;

    app.use(router)
      .use(pinia)
      .use(i18n)
      .use(VueClickAway)
      .use(ElementPlus);

    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
    
    loadStyles().then(() => {
      app.mount("#app");
    });
  }
});



