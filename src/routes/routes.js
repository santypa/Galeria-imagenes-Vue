import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/",
  //   name: "app",
  //   component: Users,
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;