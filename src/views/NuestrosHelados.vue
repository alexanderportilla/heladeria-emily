<template>
  <div class="nuestros-helados">
    <h2>Nuestros Helados</h2>
    <div v-if="products.length > 0" class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="$emit('addToCart', product)"
      />
    </div>
    <div v-else>
      <p>No hay helados disponibles en este momento.</p>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import products from '@/data/products.json';

export default {
  name: 'NuestrosHelados',
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
.nuestros-helados {
  text-align: center;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.nuestros-helados h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Forzar 4 productos en una línea */
  gap: 1.5rem;
  padding: 0 1.5rem;
}
</style>
