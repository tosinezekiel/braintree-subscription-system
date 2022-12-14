import './bootstrap';
import '../css/app.css'; 
import router from './router';
import store from "./store";
import vuebraintree from 'vue-braintree';
import setupInterceptors from './services/setupInterceptors';


import Guest from './Layouts/Guest.vue';
import Auth from './Layouts/Auth.vue';

import {createApp} from 'vue'

import App from './App.vue'

const app = createApp(App);


setupInterceptors(store);

app.component('Guest', Guest).component('Auth', Auth);

app.use(router).use(store).use(vuebraintree).mount("#app");