<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>About <span class="blue_light">Our Platform</span></h2>
          </div>
        </div>
        <div class="col-md-10 offset-md-1">
          <div class="about_img text_align_center">
            <figure>
              <img :src="aboutImage" alt="About Us" />
            </figure>
            <p>
              At <strong>Domain Marketplace</strong>, we make buying and selling domains simple, secure, and efficient. Whether you’re a business owner seeking the perfect domain for your brand or a seller looking to connect with the right buyer, we provide the tools and expertise to help you succeed.
            </p>
            <p>
              With a vast inventory of domains and an intuitive platform, we aim to empower individuals and businesses to establish their online presence effortlessly. Join thousands of satisfied customers who trust us to find domains that match their vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
  data: function() {
    return {
      aboutImage: new URL("@/assets/images/about.png", import.meta.url).href
    };
  }
};
</script>

<style>
.about {
  padding-top: 140px;
}
.titlepage h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.titlepage .blue_light {
  color: #43eee4;
}
.about_img img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}
.about_img p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 15px;
  color: #555;
}
.read_more {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #43eee4;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
}
.read_more:hover {
  background-color: #2e428b;
}
</style>
