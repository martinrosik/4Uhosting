<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <h3 class="modal-title">{{ plan.name }}</h3>
      <p class="modal-price">Price: {{ plan.price }}</p>
      <p class="modal-total">Do you want to proceed with the purchase?</p>

      <div class="modal-buttons">
        <button class="btn-cancel" @click="closePopup">Close</button>
        <button class="btn-buy" @click="confirmPurchase">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/counter.js";

export default {
  name: "PlansPurchase",
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    plan: {
      type: Object,
      required: true
    }
  },
  methods: {
    closePopup() {
      // Emit the 'close' event to close the modal
      this.$emit("close");
    },
    confirmPurchase() {
      const cartStore = useCartStore();
      // Set default quantity to 1 if not specified
      const quantity = 1;

      // Add the selected plan to the cart
      cartStore.addToCart({
        name: this.plan.name,
        price: parseFloat(this.plan.price.replace('$', '')), // Remove the dollar sign for numerical calculation
        quantity: quantity,
        type: 'plan', // Mark it as a 'plan'
      });

      // After adding to the cart, close the modal
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.modal-title {
  font-size: 22px;
  color: #2e428b;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

.modal-price,
.modal-total {
  font-size: 18px;
  color: #43eee4;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}

.btn-buy {
  background-color: #43eee4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-buy:hover {
  background-color: #2e428b;
}

.btn-cancel {
  background-color: #f8f9fa;
  color: #666666;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-cancel:hover {
  background-color: #ddd;
  color: #333333;
}
</style>
