import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.scss";
import "./assets/tailwind.css";

createApp(App).use(router).mount("#app");
