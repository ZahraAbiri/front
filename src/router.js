import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/man",
            alias: "/",
            name: "",

            component: () => import("./components/ManagerRegister")
        }, {

            path: "/m",
            alias: "/",
            name: "",
            component: () => import("./components/MultiImageBase64")
        }, {
            path: "/sub",
            alias: "/",
            name: "",
            component: () => import("./components/SubserviceTable")
        }, {

            path: "/main",
            alias: "/",
            name: "",
            component: () => import("./components/MainService")
        }, {

            path: "/exp",
            alias: "/",
            name: "",
            component: () => import("./components/Expert")
        }, {

            path: "/cusfil",
            alias: "/",
            name: "",
            component: () => import("./components/CustomerFilter")
        }, {

            path: "/cu",
            alias: "/",
            name: "",
            component: () => import("./components/CustomerRegister")
        }, {

            path: "/add",
            alias: "/",
            name: "",
            component: () => import("./components/addSubserviceToExpert")
        },
        {

            path: "/login",
            alias: "/",
            name: "",
            component: () => import("./components/LoginPage")
        },
        {

            path: "/fff",
            alias: "/",
            name: "",
            component: () => import("./components/FormInput")
        }, {

            path: "/addms",
            alias: "/",
            name: "",
            component: () => import("./components/addMainserviceandsubservice")
        }, {

            path: "/mslider",
            alias: "/",
            name: "",
            component: () => import("./components/sidebar")
        }, {

            path: "/efil",
            alias: "/",
            name: "",
            component: () => import("./components/ExpertFilter")
        }, {

            path: "/suex",
            alias: "/",
            name: "",
            component: () => import("./components/selectsubserviceByExpert")
        }, {

            path: "/cohis",
            alias: "/",
            name: "",
            component: () => import("./components/CustomerSeeOrderHistory")
        }, {

            path: "/exhis",
            alias: "/",
            name: "",
            component: () => import("./components/ExpertSeeOrderHistory")
        }, {

            path: "/exadof",
            alias: "/",
            name: "",
            component: () => import("./components/ExpertAddOrderoffer")
        },{

            path: "/x",
            alias: "/",
            name: "",
            component: () => import("./components/customerAddOrder")
        },{

            path: "/y",
            alias: "/",
            name: "",
            component: () => import("./components/CustomerAddComment")
        },
        {

            path: "/cc",
            alias: "/",
            name: "",
            component: () => import("./components/payy")
        },

    ]
});