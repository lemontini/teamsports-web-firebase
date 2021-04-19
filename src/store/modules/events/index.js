import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      events: [
        // {
        //   id: 'e1',
        //   title: 'Trečiadienio treniruotė',
        //   locationId: 'fe7bedfd-f12a-4756-bff0-748096916071',
        //   hostId: 'zq3mmf2ysCOmKdsFJBSCXz89wZ53',
        //   players: [],
        // },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
