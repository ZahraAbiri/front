import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/",
            name: "",

            component: () => import("./components/ManagerRegister")
        },  {

            path: "/m",
            alias: "/",
            name: "",
            component: () => import("./components/MultiImageBase64")
        }, {
            path: "/sub",
            alias: "/",
            name: "",
            component: () => import("./components/SubserviceTable")
        },{

            path: "/main",
            alias: "/",
            name: "",
            component: () => import("./components/MainService")
        },{

            path: "/exp",
            alias: "/",
            name: "",
            component: () => import("./components/Expert")
        },{

            path: "/cusfil",
            alias: "/",
            name: "",
            component: () => import("./components/CustomerFilter")
        },

    ]
});