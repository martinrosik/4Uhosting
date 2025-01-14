<template>
  <div class="cart-wrapper">
    <div class="cart-container">
      <div class="main-content">
        <h1 class="text-center mb-4" style="color: #2E438A;">Shopping Cart</h1>
        <div class="row">
          <div class="col-md-8">
            <div class="card mb-3" v-for="(item, index) in cartItems" :key="item.name">
              <div class="row g-0">
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style="color: #2E438A;">Domain: "{{ item.name }}"</h5>
                    <p class="card-text">Price: ${{ item.price.toFixed(2) }}</p>
                    <div class="d-flex align-items-center">
                      <button
                        class="btn btn-outline-secondary btn-sm me-2"
                        @click="updateItemQuantity(index, item.quantity - 1)"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        class="quantity-input ms-2 me-2"
                        v-model.number="item.quantity"
                        @change="updateItemQuantity(index, item.quantity)"
                        min="1"
                      />
                      <button
                        class="btn btn-outline-secondary btn-sm ms-2"
                        @click="updateItemQuantity(index, item.quantity + 1)"
                      >
                        +
                      </button>
                    </div>
                    <button
                      class="btn btn-danger btn-sm mt-3"
                      @click="removeItem(index)"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title" style="color: #2E438A;">Summary</h4>
                <p class="card-text">Total Items: {{ totalItems }}</p>
                <p class="card-text">Total Price: ${{ totalPrice.toFixed(2) }}</p>
                <button class="btn text-white w-100" style="background-color: #2E438A;">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/counter.js";

export default {
  data() {
    return {
      cartStore: useCartStore(), // Store reference for reactive data
    };
  },
  computed: {
    cartItems() {
      return this.cartStore.cartItems;
    },
    totalItems() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    updateItemQuantity(index, quantity) {
      if (quantity > 0) this.cartStore.updateQuantity(index, quantity);
    },
    removeItem(index) {
      this.cartStore.removeItem(index);
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  padding-top: 140px;
}
.cart-container {
  padding: 20px;
}

.main-content {
  flex-grow: 1; /* Ensures main content pushes footer down */
}

.card {
  margin-bottom: 20px;
}

.card-body {
  font-size: 16px;
}

.card-title {
  font-size: 18px;
  color: #2E438A;
  font-weight: bold;
}

.quantity-input {
  width: 60px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;
}

.btn {
  padding: 8px 16px;
  border-radius: 30px;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.card-body .btn {
  margin-top: 10px;
}

.summary-card {
  background-color: #f7f7f7;
}

.summary-card .btn {
  background-color: #2E438A;
  color: white;
  font-weight: bold;
}
</style>
