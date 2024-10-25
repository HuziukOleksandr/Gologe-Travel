import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadStyles } from "./assets/root/styles/index.ts";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import router from "./router/router.ts";
import i18n from "./localization/i18n.ts";
import components from "./components/UI";
import VueClickAway from "vue3-click-away";
import dayjs from "dayjs";
import ElementPlus from "element-plus";

import App from "./App.vue";

import "element-plus/dist/index.css";
import "./assets/root/style.scss";
import "./assets/root/fonts.scss";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1AIgCauiZafR4mhr2sroXx4UVYf5zrwM",
  authDomain: "gologe-72d19.firebaseapp.com",
  projectId: "gologe-72d19",
  storageBucket: "gologe-72d19.appspot.com",
  messagingSenderId: "86067810245",
  appId: "1:86067810245:web:1b67b9e10681bcc95605ac",
};

// Initialize Firebase
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



