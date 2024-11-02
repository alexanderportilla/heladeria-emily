<template>
    <section class="sobre-nosotros">
      <div class="about-header">
        <h1>Conoce Nuestra Historia</h1>
        <p>En Heladería Emily, creamos momentos dulces con helados artesanales únicos y frescos.</p>
      </div>
  
      <!-- Sección de descripción de la empresa -->
      <div class="about-content">
        <p>
          Somos una heladería artesanal comprometida con la calidad y la frescura en cada sabor. 
          Cada uno de nuestros helados es elaborado con ingredientes de primera calidad, garantizando 
          una experiencia irresistible en cada bocado.
        </p>
        <p>
          Nos apasiona ofrecer un producto que nuestros clientes puedan disfrutar y recordar. 
          En Heladería Emily, la satisfacción del cliente es nuestro motor.
        </p>
      </div>
  
      <!-- Sección de equipo de chefs -->
      <div class="our-chefs">
        <h2>Detrás de Nuestros Sabores</h2>
        <div class="chefs-list">
          <div v-for="chef in chefs" :key="chef.id" class="chef-card">
            <img :src="chef.image" :alt="`Chef ${chef.name}`" class="chef-image" />
            <h3>{{ chef.name }}</h3>
            <p>{{ chef.bio }}</p>
          </div>
        </div>
      </div>
  
      <!-- Sección de suscripción al boletín -->
      <div class="newsletter-section">
        <h2>Suscríbete y Disfruta de Novedades Exclusivas</h2>
        <form @submit.prevent="subscribe">
          <input type="email" placeholder="Ingresa tu correo electrónico" v-model="email" />
          <button type="submit">¡Únete Ahora!</button>
        </form>
        <p>Recibe noticias, recetas y promociones especiales en tu bandeja de entrada.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        chefs: [
          {
            id: 1,
            name: 'Maria Gomez',
            bio: 'Experta en helados artesanales con más de 10 años de experiencia, especializada en técnicas tradicionales.',
            image: require('@/assets/chef1.jpg'),
          },
          {
            id: 2,
            name: 'Carlos Herrera',
            bio: 'Innovador en sabores tropicales, crea combinaciones únicas que enamoran al primer bocado.',
            image: require('@/assets/chef2.jpg'),
          },
          {
            id: 3,
            name: 'José Luis Méndez',
            bio: 'Maestro heladero con una habilidad especial para mezclar sabores clásicos con un toque moderno.',
            image: require('@/assets/chef3.jpg'),
          },
        ],
      };
    },
    methods: {
      subscribe() {
        if (this.email) {
          alert(`¡Gracias por suscribirte, ${this.email}!`);
          this.email = "";
        } else {
          alert("Por favor, ingresa un correo electrónico válido.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .sobre-nosotros {
    padding: 3rem 1.5rem;
    background-color: #f8f5f8;
    color: #333;
    text-align: center;
    max-width: 1200px;
    margin: auto;
  }
  
  .about-header h1 {
    font-size: 2.5rem;
    color: #b56b84;
    margin-bottom: 0.5rem;
  }
  
  .about-header p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .about-content p {
    font-size: 1.1rem;
    color: #666;
    margin: 1rem 0;
    line-height: 1.6;
  }
  
  .our-chefs {
    margin-top: 3rem;
  }
  
  .our-chefs h2 {
    font-size: 2rem;
    color: #b56b84;
    margin-bottom: 1.5rem;
  }
  
  .chefs-list {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }
  
  .chef-card {
    width: 200px;
    text-align: center;
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .chef-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .chef-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  
  .chef-card h3 {
    font-size: 1.2rem;
    color: #333;
    margin: 0.5rem 0;
  }
  
  .chef-card p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
  }
  
  .newsletter-section {
    margin-top: 3rem;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .newsletter-section h2 {
    font-size: 1.8rem;
    color: #b56b84;
    margin-bottom: 1rem;
  }
  
  .newsletter-section form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    justify-content: center;
  }
  
  .newsletter-section input[type="email"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
    max-width: 250px;
  }
  
  .newsletter-section button {
    padding: 0.5rem 1.5rem;
    background-color: #b56b84;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-section button:hover {
    background-color: #9c5c6d;
  }
  
  .newsletter-section p {
    font-size: 0.9rem;
    color: #666;
  }
  </style>
  