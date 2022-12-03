import { createApp } from "vue";
import { Icon } from "@iconify/vue";

import App from "./App.vue";
import BaseDemo from "./components/common/BaseDemo.vue";
import RadioGroup from "./components/common/RadioGroup.vue";

import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.component("Icon", Icon);
app.component("BaseDemo", BaseDemo);
app.component("RadioGroup", RadioGroup);

app.mount("#app");
