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
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample04">
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
            </div>
          </nav>
        </div>
        <div class="col-md-2 d_none">
          <ul class="email text_align_right">
            <li>
              <router-link to="/cart">
                <i class="fa fa-shopping-bag" aria-hidden="true">
                  <span>0</span>
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

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import "@/assets/css/style.css";
@import "@/assets/css/responsive.css";

.header {
  background: #2E438A; /* Navbar background */
  position: fixed; /* Fixed navbar */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 102px; /* Adjust based on design */
  padding: 25px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.navigation.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
}

.main-content {
  padding-top: 140px; /* Push content below the navbar */
}
</style>
