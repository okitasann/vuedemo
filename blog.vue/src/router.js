import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Form from "./views/Form.vue";
import FormVuex from "./views/FormVuex.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: '/home',
        name: "home",
        component: Home
    }, {
        path: "/vuex",
        name: "vuex",
        component: FormVuex
    }, {
        name: "form",
        path: '/form',
        component: Form
    }]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;