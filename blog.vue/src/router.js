import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        alias: '/',
        path: '/home',
        component: require('./views/home.vue')
    }, {
        path: '/about',
        name: "about",
        //component: About
    }]
});

export default router;