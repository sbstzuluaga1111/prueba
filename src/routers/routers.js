import Vue from 'vue';
import Router from 'vue-router';

import Personajes from '../views/PersonajesVista.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/personajes',
      name: 'Personajes',
      component: Personajes
    },
  ],
  mode: 'history'
});
