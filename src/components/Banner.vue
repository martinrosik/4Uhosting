<template>
  <div class="full_bg">
    <div class="slider_main">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="banner1" class="carousel slide">
              <ol class="carousel-indicators">
                <li
                  data-target="#banner1"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#banner1" data-slide-to="1"></li>
                <li data-target="#banner1" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="carousel-caption relative">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="dream">
                          <h1>
                            PowerFul <br />HOSTING <br />Your dream
                            <br />website
                          </h1>
                          <a class="read_more" href="javascript:void(0)">Get Started</a>
                          <a class="read_more" href="javascript:void(0)">Contact Us</a>
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
                <!-- Repeat for additional slides -->
              </div>
              <a
                class="carousel-control-prev"
                href="#banner1"
                role="button"
                data-slide="prev"
              >
                <!-- Update icon path or use a library -->
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#banner1"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
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
};
</script>

<style scoped>
@import "@/assets/css/style.css"; /* Import global styles */
@import "@/assets/css/responsive.css"; /* Import responsive styles */
</style>
