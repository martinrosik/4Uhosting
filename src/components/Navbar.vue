<script>
import { useCartStore } from "@/stores/counter.js";

export default {
  name: "Navbar",
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  computed: {
    cartQuantity() {
      return this.cartStore.totalItems;
    },
  },
};
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-2 col-sm-3 col logo_section">
          <div class="full">
            <div class="center-desk">
              <div class="logo">
                <router-link to="/"><img src="@/assets/images/logo.png" alt="Logo" /></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <nav class="navigation navbar navbar-expand-md navbar-dark">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/" exact>Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/hosting">Hosting</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/domain">Domain</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-2 d_none">
          <ul class="email text_align_right">
            <li>
              <router-link to="/cart" class="cart-icon">
                <i class="fa fa-shopping-bag cart-img" aria-hidden="true">
                  <span class="cart-count">{{ cartQuantity }}</span>
                </i>
              </router-link>
            </li>
            <li><router-link to="/login">Sign In</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cart-img {
  position: relative;
  font-size: 1.5rem;
}

.cart-count {
  position: absolute;
  top: -14px;
  left: 18px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
