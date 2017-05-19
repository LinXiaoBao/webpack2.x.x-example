import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const pageA = resolve => require(['./view/pageA.vue'], resolve);
const pageB = resolve => require(['./view/pageB.vue'], resolve);

const routes = [{
    path: '/pageA',
    component: pageA,
    name: 'pageA'
}, {
    path: '/pageB',
    component: pageB,
    name: 'pageB'
}, {
    path: '*',
    redirect: {
        name: 'pageA'
    }
}];


const router = new VueRouter({
    routes: routes,
    mode: 'hash',
});

export default router;