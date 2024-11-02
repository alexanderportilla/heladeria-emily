<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="product-image" />
      <div class="product-price">€{{ product.price.toFixed(2) }}</div>
    </div>
    <div class="product-details">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
        <button class="view-product-button" @click="$emit('addToCart', product)">Comprar Producto</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 250px;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 220px; /* Cambiado a una altura mayor para mostrar más de la imagen */
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Cambiado de 'cover' a 'contain' */
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-price {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.9rem;
}

.product-details {
  padding: 1rem;
}

.product-details h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.product-details p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.view-product-button {
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #b56b84, #9c5c6d);
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}

.view-product-button:hover {
  background: linear-gradient(135deg, #9c5c6d, #b56b84);
  transform: translateY(-2px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
