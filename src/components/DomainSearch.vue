<template>
  <div class="domain">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>
              all starts with <span class="blue_light">a domain</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="form">
            <div class="searchbar">
              <input
                class="search_input"
                type="text"
                name=""
                placeholder="Search Domain"
              />
              <a href="#" class="search_icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-10 offset-md-1">
          <div class="domain_bg">
            <div class="row">
              <div class="col-sm-2">
                <div class="domain-price">
                  <strong>Domain <br />Per Year</strong>
                </div>
              </div>
              <div class="col-sm-10">
                <div class="domain-price_main">
                  <div class="domain-price">
                    <span>.com</span>
                    <strong>$22.999</strong>
                  </div>
                  <div class="domain-price">
                    <span>.edu</span>
                    <strong>$22.999</strong>
                  </div>
                  <div class="domain-price">
                    <span>.org</span>
                    <strong>$22.999</strong>
                  </div>
                  <div class="domain-price">
                    <span>.pro</span>
                    <strong>$22.999</strong>
                  </div>
                  <div class="domain-price">
                    <span>.net</span>
                    <strong>$22.999</strong>
                  </div>
                  <div class="domain-price">
                    <span>.biz</span>
                    <strong>$22.999</strong>
                  </div>
                </div>
              </div>
            </div>
            <router-link class="read_more" to="/domain">See More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Domain",
};
</script>

<style scoped>
@import "@/assets/css/style.css";
@import "@/assets/css/responsive.css";

.domain {
  padding-top: 140px;
}
</style>
