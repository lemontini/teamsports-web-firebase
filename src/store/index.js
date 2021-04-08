import { createStore } from 'vuex';

import playersModule from './modules/players/index.js';
import locationsModule from './modules/locations/index.js';
import eventsModule from './modules/events/index.js';
import authModule from './modules/auth/index.js';

export default createStore({
  state() {
    return {
      dbUrl: 'https://insectnet-web-apps.firebaseio.com/teamsports',
    };
  },
  mutations: {},
  actions: {},
  getters: {
    dbUrl(state) {
      return state.dbUrl;
    },
  },
  modules: {
    players: playersModule,
    locations: locationsModule,
    events: eventsModule,
    auth: authModule,
  },
});
