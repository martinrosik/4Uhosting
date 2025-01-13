import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Hosting from "@/views/Hosting.vue";
import Domain from "@/views/Domain.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/hosting", name: "Hosting", component: Hosting },
  { path: "/domain", name: "Domain", component: Domain },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
