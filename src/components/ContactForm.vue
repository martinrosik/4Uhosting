<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>Contact <span class="blue_light">Us</span></h2>
          </div>
        </div>
        <div class="col-md-10 offset-md-1">
          <form id="request" class="main_form" @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-md-12">
                <input
                  class="contactus"
                  v-model="formData.name"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div class="col-md-12">
                <input
                  class="contactus"
                  v-model="formData.phone"
                  placeholder="Phone Number"
                  type="text"
                  name="phone"
                  required
                />
              </div>
              <div class="col-md-12">
                <input
                  class="contactus"
                  v-model="formData.email"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div class="col-md-12">
                <textarea
                  class="textarea"
                  v-model="formData.message"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="col-md-12">
                <button class="send_btn" type="submit">Submit Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data: function () {
    return {
      formData: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit: function () {
      console.log("Form Submitted", this.formData);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.contact {
  padding-top: 140px;
}
</style>
