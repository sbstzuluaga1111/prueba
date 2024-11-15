import Vue from 'vue';
import Router from 'vue-router';

import PersonajesVista from '@/components/Personajes/PersonajesVista.vue';
import HomeVista from '@/components/HomeVista.vue';
import UniversoVista from '@/components/Universo/UniversoVista.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/inicio',
    },
    {
      path: '/personajes',
      name: 'Personajes',
      component: PersonajesVista
    },
    {
      path: '/inicio',
      name: 'Home',
      component: HomeVista
    },
    {
      path: '/universo',
      name: 'Universo',
      component: UniversoVista
    },
  ],
  mode: 'history'
});
