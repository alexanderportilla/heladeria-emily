<template>
  <div class="featured-products">
    <h2>Productos Destacados</h2>
    <div v-if="products.length > 0" class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="$emit('addToCart', product)"
      />
    </div>
    <div v-else>
      <p>No hay productos disponibles en este momento.</p>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import products from '@/data/products.json';

export default {
  name: 'FeaturedProductsComponent',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: products.slice(0, 4),
    };
  },
};
</script>

<style scoped>
.featured-products {
  text-align: center;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 0 1.5rem;
}
</style>
