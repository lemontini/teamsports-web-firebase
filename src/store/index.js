import { createStore } from 'vuex';

import playersModule from './modules/players/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { players: playersModule },
});
