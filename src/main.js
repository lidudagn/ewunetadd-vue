import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VeeValidatPlugin from './include/validation';
import store from './Store';
import axios from 'axios'
import './index.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import { MotionPlugin } from '@vueuse/motion'
import setupInterceptors from './services/interceptorInf';
import setupInterceptor from './services/setupInterceptors';
setupInterceptors(store);
setupInterceptor(store);
createApp(App).use(router).use(MotionPlugin).use(VeeValidatPlugin).use(store).mount('#app')
