import { createStore } from 'vuex';

import playersModule from './modules/players/index';
import authModule from './modules/auth/index';

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
    auth: authModule,
  },
});
