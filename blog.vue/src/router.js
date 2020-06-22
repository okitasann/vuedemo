import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Form from "./views/Form.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        alias: '/home',
        path: '/home',
        component: Home
    }, {
        path: '/about',
        name: "about",
        //component: About
    },{
        path: '/form',
        name: "form",
        component: Form
    }]
});

export default router;