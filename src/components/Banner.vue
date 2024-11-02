<!-- Banner.vue -->
<template>
  <section class="banner">
    <div class="banner-content">
      <img src="../assets/Helado.jpg" alt="Imagen de helado" class="banner-image" />
      <div class="text-content">
        <h2>¡Descubre la Magia de Heladería Emily! 🍦</h2>
        <p>Sabores únicos, ingredientes frescos y un toque de amor en cada bocado. Ven y vive la experiencia helada.</p>
        <div class="banner-buttons">
          <router-link to="/nuestros-helados">
            <button class="button-primary" aria-label="Ver nuestros helados">Explora Nuestros Sabores</button>
          </router-link>
          <router-link to="/promociones">
            <button class="button-secondary" aria-label="Conocer promociones">Aprovecha Nuestras Promociones</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background-color: #f8f5f8;
}

.banner-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
}

.banner-image {
  width: 380px;
  margin-right: 2rem;
}

.text-content {
  text-align: left;
}

.text-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #b56b84;
  margin-bottom: 1.5rem;
}

.text-content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.banner-buttons {
  display: flex;
  gap: 1.5rem;
}

.button-primary,
.button-secondary {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button-primary {
  background-color: #b56b84;
  color: #fff;
}

.button-primary:hover {
  background-color: #9c5c6d;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.button-secondary {
  background-color: #f3e1e8;
  color: #b56b84;
}

.button-secondary:hover {
  background-color: #e3c6d0;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
