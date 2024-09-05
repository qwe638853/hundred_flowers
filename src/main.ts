import { createApp } from 'vue';
import App from './App.vue';
import {createRouter,createWebHistory} from 'vue-router';
import './registerServiceWorker';



const router = createRouter({
    history: createWebHistory(),
    routes:
    []
});

const app = createApp(App);


app.use(router).mount('#app');

export default router;
