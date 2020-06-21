import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: "home",
        //component: Home
    }, {
        path: '/about',
        name: "about",
        //component: About
    }]
});

export default router;