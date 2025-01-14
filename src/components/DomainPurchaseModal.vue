<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h3 class="modal-title">Purchase {{ domain.extension }}</h3>
      <p class="modal-price">Price: ${{ domain.price.toFixed(2) }}</p>
      <div class="modal-input">
        <label for="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          v-model.number="quantity"
          min="1"
          class="quantity-input"
        />
      </div>
      <p class="modal-total">Total: ${{ totalPrice.toFixed(2) }}</p>
      <div class="modal-buttons">
        <button class="btn btn-buy" @click="confirmPurchase">Add to Cart</button>
        <button class="btn btn-cancel" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/counter.js";

export default {
  props: {
    domain: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cartStore: useCartStore(), // Store reference
      quantity: 1,
    };
  },
  computed: {
    totalPrice() {
      return this.domain.price * this.quantity;
    },
  },
  methods: {
    confirmPurchase() {
      this.cartStore.addToCart({
        name: this.domain.extension,
        price: this.domain.price,
        quantity: this.quantity,
      });
      this.$emit("close");
    },
  },
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

.modal-input {
  margin-bottom: 20px;
}

.quantity-input {
  width: 60px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  font-size: 16px;
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
