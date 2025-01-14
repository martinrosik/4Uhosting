<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    Navbar,
  },
};
</script>

<style>
</style>
