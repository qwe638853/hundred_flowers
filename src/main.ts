import { createApp } from 'vue';
import App from './App.vue';
import {createRouter,createWebHistory} from 'vue-router';
import './registerServiceWorker';
import AboutPage from './components/AboutPage.vue';
import AddressPage from './components/AddressPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:
    []
});


createApp(App).use(router).mount('#app')

export default router;
