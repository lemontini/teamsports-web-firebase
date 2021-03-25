import { createRouter, createWebHistory } from 'vue-router';

import PlayersList from '../views/players/PlayersList.vue';
import PlayerDetail from '../views/players/PlayerDetail.vue';
import PlayerRegistration from '../views/players/PlayerRegistration.vue';

import LocationsList from '../views/locations/LocationsList.vue';
import LocationDetail from '../views/locations/LocationDetail.vue';

import UserAuth from '../views/auth/UserAuth.vue';
import store from '../store/index.js';

const routes = [
  { path: '/', redirect: '/players' },

  { path: '/players', name: 'Players', component: PlayersList },
  { path: '/players/:id', component: PlayerDetail, props: true },
  {
    path: '/register',
    component: PlayerRegistration,
    meta: { requiresAuth: true },
  },

  { path: '/locations', component: LocationsList },
  { path: '/locations/:id', component: LocationDetail, props: true },

  { path: '/events', component: null },

  { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },

  { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/players');
  } else {
    next();
  }
});

export default router;
