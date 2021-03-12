import { createStore } from 'vuex';

import playersModule from './modules/players/index';

export default createStore({
  state() {
    return {
      userId: 'c3',
      dbUrl: 'https://insectnet-web-apps.firebaseio.com/teamsports',
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
    dbUrl(state) {
      return state.dbUrl;
    },
  },
  modules: { players: playersModule },
});
