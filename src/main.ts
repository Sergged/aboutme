import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./router";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

createApp(App).use(router).mount("#app");
