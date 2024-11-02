// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShoppingCart);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Corrección aquí
app.use(router); // Asegúrate de que el router se esté usando
app.mount('#app');
