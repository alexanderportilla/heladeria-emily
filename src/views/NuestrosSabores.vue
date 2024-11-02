<!-- src/views/NuestrosSabores.vue -->
<template>
    <section class="nuestros-sabores">
      <h1>Nuestros Sabores</h1>
      <div class="filters">
        <input type="text" v-model="searchQuery" placeholder="Buscar un sabor..." />
        <!-- Ejemplo de filtros adicionales -->
        <select v-model="category">
          <option value="">Todos</option>
          <option value="frutas">Frutas</option>
          <option value="cremosos">Cremosos</option>
          <option value="especiales">Especiales</option>
        </select>
      </div>
      <div class="flavors-grid">
        <div 
          v-for="flavor in filteredFlavors" 
          :key="flavor.id" 
          class="flavor-card"
        >
          <img :src="require(`@/assets/${flavor.image}`)" :alt="flavor.name" class="flavor-image" />
          <h3>{{ flavor.name }}</h3>
          <p>{{ flavor.description }}</p>
          <p class="price">€{{ flavor.price.toFixed(2) }}</p>
          <router-link :to="{ name: 'ProductDetail', params: { id: flavor.id } }">
            <button class="view-details">Ver Detalles</button>
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import flavors from '@/data/products.json'; // Usa tu JSON con los sabores
  
  export default {
    name: 'NuestrosSabores',
    data() {
      return {
        searchQuery: "",
        category: "",
        flavors,
      };
    },
    computed: {
      filteredFlavors() {
        return this.flavors.filter(flavor => {
          const matchesCategory = !this.category || flavor.category === this.category;
          const matchesQuery = flavor.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          return matchesCategory && matchesQuery;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .nuestros-sabores {
    padding: 2rem;
    text-align: center;
  }
  
  .filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .filters input,
  .filters select {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .flavors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .flavor-card {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .flavor-card:hover {
    transform: scale(1.05);
  }
  
  .flavor-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .flavor-card h3 {
    font-size: 1.2rem;
    color: #333;
    margin: 0.5rem 0;
  }
  
  .flavor-card p {
    color: #666;
  }
  
  .price {
    font-weight: bold;
    color: #b56b84;
  }
  
  .view-details {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #b56b84;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .view-details:hover {
    background-color: #9c5c6d;
  }
  </style>
  