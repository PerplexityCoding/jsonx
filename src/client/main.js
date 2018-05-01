import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './components/app.vue';
import Dashboard from './components/dashboard.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Dashboard }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
