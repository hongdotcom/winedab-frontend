import { createRouter, createWebHistory } from "@ionic/vue-router";

// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Subscription from "../views/Subscription.vue";
import WineList from "../views/WineList.vue";
import Profile from "../views/Profile.vue";
import BuyMore from "../views/BuyMore.vue";
const routes = [
  {
    path: "/",
    redirect: "/subscription",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/subscription",
    name: "Subscription",
    component: Subscription,
  },
  {
    path: "/wines",
    name: "WineList",
    component: WineList,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/buymore",
    name: "BuyMore",
    component: BuyMore,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
