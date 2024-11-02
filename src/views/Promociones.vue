<template>
  <section class="promociones">
    <!-- Banner principal de promociones -->
    <div class="promotions-banner">
      <h1>¡Aprovecha Nuestras Promociones!</h1>
      <p>Descubre los descuentos exclusivos en tus sabores favoritos. ¡No te los pierdas!</p>
    </div>

    <!-- Cuadrícula de promociones -->
    <div class="promotions-grid">
      <div 
        v-for="promo in promociones" 
        :key="promo.id" 
        class="promotion-card"
      >
        <img :src="require(`@/assets/${promo.image}`)" :alt="promo.title" class="promo-image" />
        <h3>{{ promo.title }}</h3>
        <p class="promo-description">{{ promo.description }}</p>
        <div class="price-info">
          <span class="original-price">€{{ promo.originalPrice.toFixed(2) }}</span>
          <span class="discounted-price">€{{ promo.discountedPrice.toFixed(2) }}</span>
        </div>
        <button @click="$emit('addToCart', product)" class="add-to-cart-button">Agregar al Carrito</button>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Promociones',
  data() {
    return {
      promociones: [
        {
          id: 1,
          title: "Combo Familiar",
          description: "Llévate 3 sabores grandes por el precio de 2. Ideal para compartir.",
          image: "promo1.jpg",
          originalPrice: 15.00,
          discountedPrice: 10.00,
        },
        {
          id: 2,
          title: "Helado de Temporada",
          description: "Prueba nuestro sabor de fresa especial con un 20% de descuento.",
          image: "promo2.jpg",
          originalPrice: 5.99,
          discountedPrice: 4.79,
        },
        {
          id: 3,
          title: "2x1 en Helados Pequeños",
          description: "¡Compra un helado pequeño y llévate otro gratis!",
          image: "promo3.jpg",
          originalPrice: 4.00,
          discountedPrice: 4.00,
        },
      ],
    };
  },
  methods: {
    addToCart(promo) {
      alert(`¡${promo.title} ha sido añadido al carrito!`);
    },
  },
};
</script>

<style scoped>
.promociones {
  padding: 2rem;
  text-align: center;
  background-color: #f8f5f8;
}

.promotions-banner {
  padding: 2rem 0;
  background-color: #b56b84;
  color: white;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.promotions-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.promotions-banner p {
  font-size: 1.2rem;
  margin-top: 0;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.promotion-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.promotion-card:hover {
  transform: scale(1.05);
}

.promo-image {
  width: 50%;
  height: auto; /* Ajusta la altura automáticamente */
  object-fit: contain; /* Esto asegura que la imagen se muestre completa sin recortarse */
  border-radius: 8px;
  margin-bottom: 1rem;
}

.promotion-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.promo-description {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.price-info {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.original-price {
  text-decoration: line-through;
  color: #888;
  font-size: 0.9rem;
}

.discounted-price {
  color: #b56b84;
  font-weight: bold;
  font-size: 1.2rem;
}

.add-to-cart-button {
  padding: 0.5rem 1.5rem;
  background-color: #b56b84;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #9c5c6d;
}
</style>
