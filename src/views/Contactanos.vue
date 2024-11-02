<!-- src/views/Contactanos.vue -->
<template>
    <section class="contact">
      <div class="contact-header">
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna pregunta o quieres saber más sobre nuestros productos? ¡Estamos aquí para ayudarte!</p>
      </div>
  
      <!-- Formulario de contacto -->
      <div class="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form @submit.prevent="sendMessage">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="form.name" placeholder="Tu nombre" required />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" v-model="form.email" placeholder="Tu correo electrónico" required />
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" v-model="form.message" placeholder="Escribe tu mensaje aquí" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
  
      <!-- Información de contacto -->
      <div class="contact-info">
        <h2>Información de Contacto</h2>
        <p>Estamos ubicados en:</p>
        <p>12345 Calle Dulce</p>
        <p>Guaitarilla, Colombia</p>
        <p>Tel: (123) 456-7890</p>
        <p>Email: info@heladeriaemily.com</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      sendMessage() {
        if (this.form.name && this.form.email && this.form.message) {
          alert(`¡Gracias por contactarnos, ${this.form.name}! Hemos recibido tu mensaje.`);
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        } else {
          alert("Por favor, completa todos los campos antes de enviar.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 2rem;
    background-color: #f8f5f8;
    color: #333;
    text-align: center;
    max-width: 1200px;
    margin: auto;
  }
  
  .contact-header h1 {
    font-size: 2.5rem;
    color: #b56b84;
    margin-bottom: 0.5rem;
  }
  
  .contact-header p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .contact-form {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    max-width: 600px;
    margin: auto;
  }
  
  .contact-form h2 {
    font-size: 1.8rem;
    color: #7d3b4a;
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #b56b84;
  }
  
  button[type="submit"] {
    background-color: #b56b84;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
  }
  
  button[type="submit"]:hover {
    background-color: #9c5c6d;
  }
  
  .contact-info {
    margin-top: 2rem;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info h2 {
    font-size: 1.8rem;
    color: #7d3b4a;
    margin-bottom: 1rem;
  }
  
  .contact-info p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  </style>
  