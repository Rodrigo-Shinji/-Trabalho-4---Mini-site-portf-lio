import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import SobreViews from "../views/AboutViews.vue";
import ContactViews from "../views/ContactViews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: SobreViews,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactViews,
    },
  ],
});

export default router;
