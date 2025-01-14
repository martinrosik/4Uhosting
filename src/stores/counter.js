import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalItems(state) {
      return state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  actions: {
    addToCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.quantity; // Update quantity if item already exists
      } else {
        this.cartItems.push(item); // Add new item to cart
      }
    },
    updateQuantity(index, quantity) {
      if (quantity < 1) return; // Prevent setting quantity below 1
      this.cartItems[index].quantity = quantity;
    },
    removeItem(index) {
      this.cartItems.splice(index, 1); // Remove item from the cart
    },
  },
});
