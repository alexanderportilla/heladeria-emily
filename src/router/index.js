import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductDetail from '../views/ProductDetail.vue';
import NuestrosHelados from '../views/NuestrosHelados.vue';
import SobreNosotros from '../views/SobreNosotros.vue';
import Contactanos from '../views/Contactanos.vue';
import NuestrosSabores from '@/views/NuestrosSabores.vue';
import Promociones from '../views/Promociones.vue';


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/nuestros-helados', name: 'NuestrosHelados', component: NuestrosHelados },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros },
  { path: '/contactanos', name: 'Contactanos', component: Contactanos },
  { path: '/nuestros-sabores', name: 'NuestrosSabores', component: NuestrosSabores},
  { path: '/promociones', name: 'Promociones', component: Promociones },
 // Añadir esta ruta
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;





