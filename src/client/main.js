import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './components/app.vue';
import Dashboard from './components/dashboard.vue';
import Editor from './components/editor.vue';

Vue.use(VueRouter);

const routes = [
    { name: 'home', path: '/', component: Dashboard },
    { name: 'file', path: '/file/:fileId', component: Editor }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
