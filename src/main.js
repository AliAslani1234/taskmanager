import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/main";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap'



const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

