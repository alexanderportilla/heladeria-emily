<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <Banner />
    <FeaturedProducts />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import FeaturedProducts from '@/components/FeaturedProductsComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Banner,
    FeaturedProducts,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.home > *:not(:last-child) {
  margin-bottom: 2rem; /* Espacio entre el banner y los productos */
}
</style>


