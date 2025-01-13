<template>
  <div class="header">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-2 col-sm-3 col logo_section">
          <div class="full">
            <div class="center-desk">
              <div class="logo">
                <img :src="logoImage" alt="Logo" />
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
  name: "Header",
  data() {
    return {
      logoImage: new URL("@/assets/images/logo.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped>
/* Header-specific styles */
</style>
