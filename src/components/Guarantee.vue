<template>
  <div class="guarantee">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>We guarantee <span class="blue_light">quality</span></h2>
            <p>Our commitment to providing top-notch services and features.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(guarantee, index) in guarantees"
          :key="index"
          class="col-lg-3 col-md-6"
        >
          <div id="ho_co" class="guarantee-box_main">
            <div class="guarantee-box text_align_center">
              <i :class="guarantee.iconClass"></i>
              <h3>{{ guarantee.title }}</h3>
              <p>{{ guarantee.description }}</p>
            </div>
            <a class="read_more" href="javascript:void(0)">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Guarantee",
  data() {
    return {
      guarantees: [
        {
          iconClass: "fa fa-rocket",
          title: "Your Website Faster",
          description:
            "Our hosting ensures blazing fast website speeds and performance.",
        },
        {
          iconClass: "fa fa-hdd",
          title: "SSD Drives",
          description:
            "Experience high-speed storage with SSDs for seamless website operation.",
        },
        {
          iconClass: "fa fa-lock",
          title: "Highest Data Security",
          description:
            "We prioritize the safety of your data with advanced security protocols.",
        },
        {
          iconClass: "fa fa-thumbs-up",
          title: "Guarantee",
          description: "We provide reliable services you can trust.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add specific styles for the guarantee section */
</style>
