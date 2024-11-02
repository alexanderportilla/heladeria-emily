<template>
  <div class="cart-drawer">
    <button class="close-btn" @click="$emit('closeCart')">×</button>
    <h2>Mi Carrito</h2>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="require(`@/assets/${item.image}`)" :alt="item.name" />
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>€{{ (item.price * item.quantity).toFixed(2) }}</p>
          <p>Cantidad: {{ item.quantity }}</p>
          <button @click="$emit('removeItem', index)">Quitar</button>
        </div>
      </div>
      <div class="total">
        <p>Total: €{{ cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2) }}</p>
      </div>
      <button class="checkout-button" @click="proceedToCheckout">Proceder al Pago</button>
    </div>
    <p v-else>Tu carrito está vacío.</p>
  </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    generateInvoice() {
      const doc = new jsPDF();

      // Encabezado
      doc.setFontSize(18);
      doc.text('Factura - Heladería Emily', 10, 10);

      // Detalles de la compra
      doc.setFontSize(12);
      doc.text(`Fecha: ${new Date().toLocaleString()}`, 10, 20);

      let yPosition = 40;
      this.cart.forEach((item, index) => {
        doc.text(
          `${index + 1}. ${item.name} - Cantidad: ${item.quantity} - Precio: €${item.price.toFixed(2)}`,
          10,
          yPosition
        );
        yPosition += 10;
      });

      // Total
      const total = this.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ).toFixed(2);
      doc.text(`Total: €${total}`, 10, yPosition + 20);

      // Descargar el archivo
      doc.save('Factura_HeladeriaEmily.pdf');
    },
    proceedToCheckout() {
      this.generateInvoice();
      // Aquí puedes integrar la lógica para el pago real
      alert("Gracias por su compra! La factura ha sido generada.");
    },
  },
};
</script>

<style scoped>
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #f8f5f8;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  overflow-y: auto;
  z-index: 1000;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: #b56b84;
}

.cart-items {
  margin-top: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.cart-item img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 1rem;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.total {
  font-weight: bold;
  margin-top: 1rem;
}

.checkout-button {
  background-color: #b56b84;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #9c5c6d;
}
</style>
