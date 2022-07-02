import './bootstrap';

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './routes'
import RootContainer from './pages/RootContainer'

Vue.use(VueRouter);

let app = new Vue({
    el: '#app',
    router: router,
    components: {
        RootContainer
    }
});
