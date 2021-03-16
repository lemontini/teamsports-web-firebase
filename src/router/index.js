import { createRouter, createWebHistory } from 'vue-router';

import PlayersList from '../views/players/PlayersList.vue';
import PlayerDetail from '../views/players/PlayerDetail.vue';
import PlayerRegistration from '../views/players/PlayerRegistration.vue';
import UserAuth from '../views/auth/UserAuth.vue';

const routes = [
  { path: '/', redirect: '/players' },

  { path: '/players', name: 'Players', component: PlayersList },
  {
    path: '/players/:id',
    name: 'PlayerDetail',
    component: PlayerDetail,
    props: true,
  },
  {
    path: '/register',
    name: 'PlayerRegistration',
    component: PlayerRegistration,
  },

  { path: '/locations', name: 'Locations', component: null },

  { path: '/events', name: 'Events', component: null },

  { path: '/auth', component: UserAuth },

  { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
