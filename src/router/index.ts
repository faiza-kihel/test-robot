import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeContact from "../components/HomeContact.vue";
import DetailContact from "../components/DetailContact.vue";
import App from "../App.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    component: HomeContact,
  },
  {
    path: "/",
    redirect: "/home",
    name: "home",
    component: HomeContact,
    // () =>
    // import(/* webpackChunkName: "home" */ "./views/pageView/home.vue"),
  },
  {
    path: "/detail/:id",
    component: DetailContact,
  },
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/detail/:id",
        component: DetailContact,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
