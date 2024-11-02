<!-- src/components/HeaderComponent.vue -->
<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo de Heladería Emily" class="logo-image" />
        <h1 class="logo-text">Nuestra Heladeria</h1>
      </div>
      <nav class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/sobre-nosotros">Sobre Nosotros</router-link>
        <router-link to="/nuestros-helados">Nuestros Helados</router-link>
        <router-link to="/contactanos">Contáctanos</router-link>
      </nav>
      <!-- Ícono del carrito -->
      <div class="cart-icon" @click="toggleCartDrawer">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        <span v-if="cart.length > 0" class="cart-count">{{ cart.length }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggleCartDrawer() {
      this.$emit('toggleCartDrawer');
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 1rem 0;
  background-color: #f8f5f8;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 120px;
  margin-right: 0.5rem;
}

.logo-text {
  font-family: 'Cursive', sans-serif;
  font-size: 1.6rem;
  color: #b56b84;
  margin: 0;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  background-color: #f3dcd4;
  padding: 0.5rem 1rem;
  border-radius: 30px;
}

.nav-links a {
  color: #7d3b4a;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 20px;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  background-color: #b56b84;
  color: #fff;
}

.cart-icon {
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  color: #b56b84;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.cart-icon:hover {
  transform: scale(1.1);
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #b56b84;
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
  font-weight: bold;
}
</style>
