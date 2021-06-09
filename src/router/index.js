import { createRouter, createWebHistory } from 'vue-router';

import PlayersList from '../views/players/PlayersList.vue';
import PlayerDetail from '../views/players/PlayerDetail.vue';
import PlayerRegistration from '../views/players/PlayerRegistration.vue';

import LocationsList from '../views/locations/LocationsList.vue';
import LocationDetail from '../views/locations/LocationDetail.vue';
import LocationRegistration from '../views/locations/LocationRegistration.vue';

import EventsList from '../views/events/EventsList.vue';
import EventDetail from '../views/events/EventDetail.vue';
import EventRegistration from '../views/events/EventRegistration.vue';

import NotFound from '../views/NotFound.vue';

import UserAuth from '../views/auth/UserAuth.vue';
import store from '../store/index.js';

const routes = [
  { path: '/', redirect: '/players' },

  {
    path: '/players',
    name: 'Players',
    component: PlayersList,
    children: [
      { path: ':id', component: PlayerDetail, props: true },
      {
        path: 'register',
        component: PlayerRegistration,
        meta: { requiresAuth: true },
      },
      // { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    ],
  },

  {
    path: '/locations',
    name: 'Locations',
    component: LocationsList,
    children: [
      { path: ':id', component: LocationDetail, props: true },
      {
        path: 'register',
        component: LocationRegistration,
        meta: { requiresAuth: true },
      },
      // { path: 'auth', component: UserAuth, meta: { requiresUnauth: true } },
    ],
  },

  {
    path: '/events',
    name: 'Events',
    component: EventsList,
    children: [
      { path: ':id', component: EventDetail, props: true },
      {
        path: 'register',
        component: EventRegistration,
        meta: { requiresAuth: true },
      },
      // { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    ],
  },

  { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },

  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next();
  } else {
    next();
  }
});

export default router;
