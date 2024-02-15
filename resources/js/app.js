import './bootstrap';
import '@/index.css';
import {createApp} from "vue";
import App from "@/App.vue";
import Router from "@/router/router.js";

createApp(App).use(Router).mount('#app');
