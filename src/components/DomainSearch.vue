<template>
  <div class="domain">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>All starts with <span class="blue_light">a domain</span></h2>
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
                v-model="searchQuery"
                placeholder="Search Domain"
              />
              <a href="#" class="search_icon" @click.prevent="searchDomain">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="domain_bg">
      <div class="row">
        <div class="col-sm-2">
          <div class="domain-price">
            <strong>Domain <br> Per Year</strong>
          </div>
        </div>
        <div class="col-sm-10">
          <div class="domain-price_main">
            <div class="domain-price" v-for="price in prices" :key="price.id">
              <span>{{ price.domain }}</span>
              <strong>{{ price.price }}</strong>
            </div>
          </div>
        </div>
      </div>
      <a class="read_more" href="/domain">See More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DomainSearch",
  data() {
    return {
      searchQuery: "",
      prices: [
        { id: 1, domain: "com.", price: "$22.999" },
        { id: 2, domain: "net.", price: "$19.999" },
        // Add more domain prices as needed
      ],
    };
  },
  methods: {
    searchDomain() {
      console.log("Search Query:", this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Domain search-specific styles */
</style>
