<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="infoma text_align_left">
              <h3>Choose</h3>
              <ul class="commodo">
                <li v-for="(item, index) in chooseItems" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="infoma">
              <h3>Get Support</h3>
              <ul class="conta">
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  Address: {{ contactInfo.address }}
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  Call: {{ contactInfo.phone }}
                </li>
                <li>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <a :href="`mailto:${contactInfo.email}`">Email: {{ contactInfo.email }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="infoma">
              <h3>Company</h3>
              <ul class="menu_footer">
                <li v-for="link in companyLinks" :key="link.text">
                  <router-link :to="link.path">{{ link.text }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="infoma text_align_left">
              <h3>Services</h3>
              <ul class="commodo">
                <li v-for="(service, index) in services" :key="index">{{ service }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>© {{ currentYear }} All Rights Reserved.
                <a href="https://html.design/">Free HTML Templates</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: function() {
    return {
      currentYear: new Date().getFullYear(),
      chooseItems: ["Commodo", "consequat. Duis a", "ute irure dolor", "in reprehenderit", "in voluptate"],
      contactInfo: {
        address: "Loram Ipusm",
        phone: "+01 1234567890",
        email: "demo@gmail.com",
      },
      companyLinks: [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        { text: "Domain", path: "/domain" },
        { text: "Hosting", path: "/hosting" },
        { text: "Contact", path: "/contact" },
      ],
      services: ["Commodo", "consequat. Duis a", "ute irure dolor", "in reprehenderit", "in voluptate"],
    };
  },
};
</script>

<style>
</style>
