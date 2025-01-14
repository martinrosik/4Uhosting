<template>
  <div>
    <CartComponent @openModal="openModal" />
    <DomainPurchaseModal
      v-if="showModal"
      :domain="selectedDomain"
      @close="closeModal"
    />
  </div>
</template>

<script>
import CartComponent from "@/components/CartComponent.vue";
import DomainPurchaseModal from "@/components/DomainPurchaseModal.vue";

export default {
  name: "Cart",
  components: {
    CartComponent,
    DomainPurchaseModal,
  },
  data() {
    return {
      showModal: false,
      selectedDomain: null,
    };
  },
  methods: {
    openModal(domain) {
      this.selectedDomain = domain;
      this.showModal = true;
    },
    closeModal() {
      this.selectedDomain = null;
      this.showModal = false;
    },
  },
};
</script>
