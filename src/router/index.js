import { createRouter, createWebHistory } from 'vue-router';

import PlayersList from '../views/players/PlayersList.vue';
import PlayerDetail from '../views/players/PlayerDetail.vue';
import PlayerRegistration from '../views/players/PlayerRegistration.vue';

import LocationsList from '../views/locations/LocationsList.vue';
import LocationDetail from '../views/locations/LocationDetail.vue';
import LocationRegistration from '../views/locations/LocationRegistration.vue';

import NotFound from '../views/NotFound.vue';

import UserAuth from '../views/auth/UserAuth.vue';
import store from '../store/index.js';

const routes = [
  { path: '/', redirect: '/players' },

  {
    path: '/players',
    name: 'Players',
    component: PlayersList,
    children: [{ path: ':id', component: PlayerDetail, props: true }],
  },
  // { path: '/players/:id', component: PlayerDetail, props: true },
  {
    path: '/register',
    component: PlayerRegistration,
    meta: { requiresAuth: true },
  },

  {
    path: '/locations',
    component: LocationsList,
    children: [
      { path: ':id', component: LocationDetail, props: true },
      {
        path: 'register',
        component: LocationRegistration,
        meta: { requiresAuth: true },
      },
    ],
  },

  { path: '/events', component: null },

  { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },

  { path: '/:notFound(.*)', component: NotFound },
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
