<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderComponent :cart="cart" @toggleCartDrawer="toggleCartDrawer" />
    <router-view @addToCart="addToCart" /> <!-- Propaga el evento addToCart al router-view -->
    <CartDrawer
      v-if="isCartOpen"
      :cart="cart"
      @closeCart="toggleCartDrawer"
      @removeItem="removeItem"
    />
    <FooterComponent /> <!-- Footer agregado para consistencia -->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CartDrawer from './components/CartDrawer.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    CartDrawer,
    FooterComponent,
  },
  data() {
    return {
      cart: [],
      isCartOpen: false,
    };
  },
  methods: {
    toggleCartDrawer() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeItem(itemIndex) {
      this.cart.splice(itemIndex, 1);
    },
  },
};
</script>

<style>
/* Estilos globales */
body {
  font-family: 'Raleway', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f5f8;
  color: #333;
}
</style>






