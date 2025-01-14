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
      const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name && cartItem.type === item.type);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.cartItems.push(item);
      }
    },
    updateQuantity(index, quantity) {
      if (quantity < 1) return;
      this.cartItems[index].quantity = quantity;
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
  },
});
