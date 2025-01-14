<template>
  <div class="full_bg">
    <div class="slider_main">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <div class="row">
                <div class="col-md-6">
                  <div class="dream">
                    <h1>
                      PowerFul <br />HOSTING <br />Your dream
                      <br />website
                    </h1>
                    <router-link to="/hosting">
                      <a class="read_more">Get Started</a>
                    </router-link>
                    <router-link to="/contact">
                      <a class="read_more">Contact Us</a>
                    </router-link>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="dream_img">
                    <figure>
                      <!-- Update image path to use assets -->
                      <img src="@/assets/images/dream_img.png" alt="Dream Image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      // Add any required data properties here
    };
  },
  methods: {
    // Add any methods if necessary
  },
  mounted() {
    // Lifecycle hook for when the component is mounted
  }
};
</script>

<style scoped>
@import "@/assets/css/style.css"; /* Import global styles */
@import "@/assets/css/responsive.css"; /* Import responsive styles */
</style>
