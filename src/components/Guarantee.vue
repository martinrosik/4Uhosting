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
          v-for="guarantee in guarantees"
          :key="guarantee.slug"
          class="col-lg-3 col-md-6"
        >
          <div id="ho_co" class="guarantee-box_main" @click="openDetails(guarantee.slug)">
            <div class="guarantee-box text_align_center">
              <i :class="guarantee.iconClass" class="guarantee-icon"></i>
              <h3>{{ guarantee.title }}</h3>
              <p>{{ guarantee.description }}</p>
            </div>
            <a
              class="read_more"
              href="javascript:void(0)"
              @click.stop="openDetails(guarantee.slug)"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    <GuaranteeDetails
      v-if="selectedGuarantee"
      :guarantee="selectedGuarantee"
      @close="closeDetails"
    />
  </div>
</template>

<script>
import GuaranteeDetails from "./GuaranteeDetails.vue";
import axios from "axios";

export default {
  name: "Guarantee",
  components: {
    GuaranteeDetails,
  },
  data: function() {
    return {
      guarantees: [],
      selectedGuarantee: null,
    };
  },
  methods: {
    fetchGuarantees: function() {
      axios
        .get("/src/assets/data.json")
        .then((response) => {
          this.guarantees = response.data.map((item) => ({
            ...item,
            slug: this.generateSlug(item.title),
          }));
        })
        .catch((error) => {
          console.error("Error loading guarantees:", error);
        });
    },
    generateSlug: function(text) {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    },
    openDetails: function(slug) {
      this.selectedGuarantee = this.guarantees.find((g) => g.slug === slug);
    },
    closeDetails: function() {
      this.selectedGuarantee = null;
    },
  },
  created: function() {
    this.fetchGuarantees();
  },
};
</script>

<style>
.guarantee-icon {
  color: #2e438a;
  font-size: 8em;
  transition: color 0.3s ease;
  cursor: pointer;
}

.guarantee-icon:hover {
  color: #43eee4;
}
</style>
