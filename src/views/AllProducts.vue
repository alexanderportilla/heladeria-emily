<!-- src/views/AllProducts.vue -->
<template>
    <div class="all-products">
      <h2>Todos Nuestros Productos</h2>
      <div v-if="products.length > 0" class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-else>
        <p>No hay productos disponibles en este momento.</p>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  import products from '@/data/products.json';
  
  export default {
    name: 'AllProducts',
    components: {
      ProductCard,
    },
    data() {
      return {
        products,
      };
    },
  };
  </script>
  
  <style scoped>
  .all-products {
    text-align: center;
    padding: 2rem 0;
  }
  
  .all-products h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  </style>
  