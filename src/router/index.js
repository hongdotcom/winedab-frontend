import { createRouter, createWebHistory } from "@ionic/vue-router";

// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import WineList from "../views/WineList.vue";
import Profile from "../views/Profile.vue";
import BuyMore from "../views/BuyMore.vue";
// junico's new pages

import TestPage from "../views/TestPage.vue";
import TestPage2 from "../views/TestPage2.vue";
import RateWine from "../views/RateWine.vue";
import MyCellar from "../views/MyCellar.vue";
import ShareWine from "../views/ShareWine.vue";
import MySubscription from "../views/MySubscription.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/testpage",
    name: "TestPage",
    component: TestPage,
  },
  {
    path: "/testpage2",
    name: "TestPage2",
    component: TestPage2,
  },
  {
    path: "/rate-wine",
    name: "RateWine",
    component: RateWine,
  },
  {
    path: "/my-cellar",
    name: "MyCellar",
    component: MyCellar,
  },
  {
    path: "/share-wine",
    name: "ShareWine",
    component: ShareWine,
  },
  {
    path: "/my-subscription",
    name: "MySubscription",
    component: MySubscription,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
