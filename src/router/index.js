import { createRouter, createWebHistory } from 'vue-router';

import PlayersList from '../views/players/PlayersList.vue';
import PlayerDetail from '../views/players/PlayerDetail.vue';

const routes = [
  { path: '/', redirect: '/players' },

  { path: '/players', name: 'Players', component: PlayersList },
  {
    path: '/players/:id',
    name: 'PlayerDetail',
    component: PlayerDetail,
    props: true,
  },

  { path: '/locations', name: 'Locations', component: null },

  { path: '/events', name: 'Events', component: null },

  { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
