import './bootstrap';

import Vue from 'vue';
import axios from 'axios';
import store from './store';
import VueRouter from 'vue-router';
import VueToastify from 'vue-toastify';
import router from './routes';

import RootContainer from './components/RootContainer';

window.axios = axios;

Vue.use(VueRouter);
Vue.use(VueToastify, {
    theme: 'dark',
    errorDuration: 5000,
});

let app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        RootContainer
    }
});
