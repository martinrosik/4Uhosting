<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>About <span class="blue_light">Company</span></h2>
          </div>
        </div>
        <div class="col-md-10 offset-md-1">
          <div class="about_img text_align_center">
            <figure>
              <img :src="aboutImage" alt="About Us" />
            </figure>
            <p>
              When looking at its layout, the point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum.
            </p>
            <a class="read_more" href="javascript:void(0)">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
  data() {
    return {
      aboutImage: new URL("@/assets/images/about.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped>
/* About section-specific styles */
</style>
