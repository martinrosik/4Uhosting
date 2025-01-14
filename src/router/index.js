import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Hosting from "@/views/Hosting.vue";
import Domain from "@/views/Domain.vue";
import Contact from "@/views/Contact.vue";
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Cart from "@/views/Cart.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/hosting",
    name: "Hosting",
    component: Hosting
  },
  {
    path: "/domain",
    name: "Domain",
    component: Domain
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  { path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
