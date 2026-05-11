import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";
import Homepage from "./page/Homepage.vue";
import Aboutpage from "./page/Aboutpage.vue";

import Registerpage from "./page/Registerpage.vue";
import Product from "./categaries/Product.vue";
import Addtocart from "./cart/Addtocart.vue";
import Dashboard from "./dasborad/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/aboutpage",
    name: "Aboutpage",
    component: Aboutpage,
  },

  {
    path: "/register",
    name: "Registerpage",
    component: Registerpage,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/addtocart",
    name: "AddToCart",
    component: Addtocart,
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "text-indigo-600 font-bold border-b-2 border-indigo-600", // Active Tailwind classes
  routes: [...routes],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
