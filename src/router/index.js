import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Menu from "@/components/Menu.vue";
import Reservation from "@/components/Reservation.vue";
import Contact from "@/components/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu,
    },
    {
      path: "/reservation",
      name: "Reservation",
      component: Reservation,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});
