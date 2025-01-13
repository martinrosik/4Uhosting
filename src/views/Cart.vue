<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4" style="color: #2E438A;">Shopping Cart</h1>

    <div class="row">
      <div class="col-md-8">
        <div class="card mb-3" v-for="(item, index) in cartItems" :key="index">
          <div class="row g-0">
            <div class="col-md-4">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style="color: #2E438A;">{{ item.name }}</h5>
                <p class="card-text">Price: ${{ item.price }}</p>
                <div class="d-flex align-items-center">
                  <button class="btn btn-outline-secondary btn-sm me-2" @click="decreaseQuantity(index)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button class="btn btn-outline-secondary btn-sm ms-2" @click="increaseQuantity(index)">+</button>
                </div>
                <button class="btn btn-danger btn-sm mt-3" @click="removeItem(index)">Remove</button>
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
            <button class="btn text-white w-100" style="background-color: #2E438A;">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        { name: "Product 1", price: 25.99, quantity: 1 },
        { name: "Product 2", price: 15.49, quantity: 2 },
        { name: "Product 3", price: 9.99, quantity: 1 }
      ]
    };
  },
  computed: {
    totalItems() {
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
