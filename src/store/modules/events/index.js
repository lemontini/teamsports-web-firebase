import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      events: [
        {
          id: 'e1',
          title: 'Trečiadienio treniruotė',
          locationId: null,
          hostId: null,
          players: [],
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
