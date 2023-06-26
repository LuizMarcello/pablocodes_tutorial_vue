import {
  createWebHistory,
  createRouter
} from 'vue-router';

import Home from "../pages/Home.vue"

/* Existem: "Declaração" de função, com valor "literal" */

/* Esta é uma "expressão" de função, com "arrow-function" */
/* Ativando então o "lazy-load" */
const lazyLoad = (view) => import(`../pages/${view}.vue`)

/* Um array de objetos de rotas, com todas as rotas usadas */
/*
Os componentes utilizados no roteamento
tem que sempre virem da pasta "views".
*/
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/equipe',
    name: 'Equipe',
    component: lazyLoad("Equipe")
  },

  {
    path: '/equipe/:id',
    name: 'Funcionario',
    component: lazyLoad("Funcionario")
  },

  /* Quando a rota não existe, vai para esta página específica */
  {
    path: '/:pathMatch(.*)',
    component: lazyLoad("PaginaNaoEncontrada")
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;