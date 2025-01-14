<template>
  <div class="domain">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text-center">
            <h2>
              all starts with <span class="text-highlight">a domain</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="form mb-4">
            <div class="input-group input-group-lg">
              <input
                class="form-control"
                type="text"
                v-model="searchQuery"
                placeholder="Search Domain"
                @input="searchDomain"
              />
              <button class="btn btn-highlight btn-lg" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div v-if="filteredDomains.length" class="domain_bg p-4 rounded shadow-sm">
            <div class="row">
              <div
                v-for="domain in paginatedDomains"
                :key="domain.extension"
                class="col-md-4 mb-3 d-flex align-items-stretch"
              >
                <div class="card w-100 text-center" @click="selectDomain(domain)">
                  <div class="card-body">
                    <h5 class="card-title text-uppercase">{{ domain.extension }}</h5>
                    <p class="card-text text-highlight fw-bold">${{ domain.price.toFixed(2) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="domain_bg p-4 rounded shadow-sm text-center">
            <p>No results found for "{{ searchQuery }}"</p>
          </div>
        </div>
      </div>
    </div>
    <DomainPurchaseModal
      v-if="selectedDomain"
      :domain="selectedDomain"
      @close="selectedDomain = null"
    />
  </div>
</template>

<script>
import DomainPurchaseModal from "@/components/DomainPurchaseModal.vue";

export default {
  name: "DomainSearch",
  components: { DomainPurchaseModal },
  data() {
    return {
      searchQuery: "",
      domains: [
        { extension: ".com", price: 22.99 },
        { extension: ".edu", price: 22.99 },
        { extension: ".org", price: 22.99 },
        { extension: ".pro", price: 22.99 },
        { extension: ".net", price: 22.99 },
        { extension: ".biz", price: 22.99 },
        { extension: ".info", price: 19.99 },
        { extension: ".online", price: 29.99 },
        { extension: ".store", price: 34.99 },
        { extension: ".tech", price: 39.99 },
        { extension: ".xyz", price: 14.99 },
        { extension: ".ai", price: 49.99 },
        { extension: ".co", price: 25.99 },
        { extension: ".me", price: 17.99 },
        { extension: ".io", price: 44.99 },
      ],
      filteredDomains: [],
      selectedDomain: null,
      pageSize: 6,
    };
  },
  computed: {
    paginatedDomains() {
      return this.filteredDomains.slice(0, this.pageSize);
    },
  },
  methods: {
    searchDomain() {
      const query = this.searchQuery.toLowerCase();
      this.filteredDomains = this.domains.filter((domain) =>
        domain.extension.includes(query)
      );
    },
    selectDomain(domain) {
      this.selectedDomain = domain;
    },
  },
  mounted() {
    this.filteredDomains = this.domains;
  },
};
</script>

<style scoped>
@import "@/assets/css/style.css";
@import "@/assets/css/responsive.css";

.domain {
  padding-top: 140px;
}

.domain_bg {
  background-color: #f8f9fa;
}

.text-highlight {
  color: #43eee4;
}

.form-control {
  border-radius: 0.375rem;
  border-color: #2e428b;
  font-size: 1.25rem;
  height: calc(3.5rem + 2px);
}

.input-group .btn {
  background-color: #43eee4;
  color: #fff;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}

.input-group .btn:hover {
  background-color: #2e428b;
}

.card {
  border: 1px solid #2e428b;
  border-radius: 0.375rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2e428b;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0;
  color: #43eee4;
}
</style>
