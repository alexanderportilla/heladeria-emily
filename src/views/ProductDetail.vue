<template>
  <div class="product-detail">
    <div v-if="product" class="detail-container">
      <!-- Columna de imagen -->
      <div class="image-container">
        <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="detail-image" />
        <div class="image-navigation">
          <button @click="prevImage">←</button>
          <button @click="nextImage">→</button>
        </div>
      </div>

      <!-- Columna de información del producto -->
      <div class="detail-info">
        <h1>{{ product.name }}</h1>
        <p class="price">€{{ product.price.toFixed(2) }}</p>
        <p class="description">{{ product.description }}</p>
        <p><strong>Ingredientes:</strong> {{ product.ingredients.join(', ') }}</p>
        <p><strong>Disponibilidad:</strong> {{ product.availability }}</p>
        
        <!-- Botones de acción -->
        <div class="action-buttons">
          <button @click="goBack" class="back-button">← Volver</button>
          <button @click="$emit('addToCart', product)" class="add-to-cart-button">Agregar al Carrito</button>
        </div>
      </div>
    </div>

    <div v-else class="no-product">
      <p>Producto no encontrado.</p>
      <button @click="goBack" class="back-button">← Volver</button>
    </div>
  </div>
</template>

<script>
import products from '@/data/products.json';

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.product = products.find(p => p.id === productId);
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    prevImage() {
      // Lógica para ir a la imagen anterior (si implementas múltiples imágenes)
    },
    nextImage() {
      // Lógica para ir a la siguiente imagen (si implementas múltiples imágenes)
    },
  },
};
</script>

<style scoped>
.product-detail {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f5f8;
  min-height: 80vh;
}

.detail-container {
  display: flex;
  gap: 2rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
}

.image-container {
  position: relative;
  width: 50%;
}

.detail-image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.image-navigation {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.image-navigation button {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.image-navigation button:hover {
  background: #b56b84;
}

.detail-info {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detail-info h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.5rem;
  color: #b56b84;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.detail-info p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

/* Botón Volver */
.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  background-color: #d3c3c7;
  color: #333;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.back-button:hover {
  background-color: #b56b84;
  color: #fff;
}

/* Botón Agregar al Carrito */
.add-to-cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  background-color: #b56b84;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.add-to-cart-button:hover {
  background-color: #9c5c6d;
}

.no-product {
  text-align: center;
}

.no-product p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}
</style>
