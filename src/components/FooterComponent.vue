<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- Información de contacto -->
        <div class="contact-info">
          <img src="@/assets/logo.png" alt="Heladería Emily Logo" class="footer-logo" />
          <p>12345 Calle Dulce</p>
          <p>Guaitarilla, Colombia</p>
          <p>Tel: (123) 456-7890</p>
          <p>Email: info@heladeriaemily.com</p>
        </div>
  
        <!-- Suscripción al boletín -->
        <div class="newsletter">
          <h3>Suscríbete y recibe nuestras novedades</h3>
          <form @submit.prevent="subscribe">
            <input type="email" placeholder="Tu correo electrónico" v-model="email" />
            <button type="submit" aria-label="Suscribirse al boletín">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
          <p>Recibe ofertas exclusivas en tu bandeja de entrada.</p>
        </div>
  
        <!-- Métodos de pago y redes sociales -->
        <div class="social-payment">
          <div class="payment-methods">
            <img src="@/assets/visa.png" alt="Visa" />
            <img src="@/assets/mastercard.png" alt="Mastercard" />
            <img src="@/assets/amex.png" alt="American Express" />
            <img src="@/assets/paypal.png" alt="PayPal" />
          </div>
          <div class="social-icons">
            <i class="fab fa-facebook-f" aria-label="Facebook"></i>
            <i class="fab fa-instagram" aria-label="Instagram"></i>
            <i class="fab fa-tiktok" aria-label="TikTok"></i>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
      };
    },
    methods: {
      subscribe() {
        if (this.email) {
          alert(`Gracias por suscribirte, ${this.email}!`);
          this.email = "";
        } else {
          alert("Por favor, ingresa un correo electrónico válido.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f5f8;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #7d3b4a;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
  }
  
  .contact-info,
  .newsletter,
  .social-payment {
    flex: 1;
    min-width: 280px;
    margin: 1rem;
    text-align: center;
  }
  
  .footer-logo {
    width: 150px;
    margin-bottom: 1rem;
  }
  
  .contact-info p {
    font-size: 0.9rem;
    color: #555;
  }
  
  .newsletter h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .newsletter form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .newsletter input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
    max-width: 200px;
  }
  
  .newsletter button {
    background-color: #b56b84;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .newsletter button:hover {
    background-color: #9c5c6d;
  }
  
  .payment-methods img {
    width: 35px;
    margin: 0.5rem;
  }
  
  .social-icons i {
    font-size: 1.4rem;
    margin: 0.5rem;
    color: #b56b84;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .social-icons i:hover {
    color: #9c5c6d;
  }
  </style>
  