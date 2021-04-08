import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      // lastFetch: null,
      events: [
        // {
        //   id: 'l1',
        //   name: 'SEB arena',
        //   address: 'Ąžuolyno g. 7, Vilnius',
        //   maxCourts: 4,
        // },
        // {
        //   id: 'l2',
        //   name: 'DELFI Sporto Centras',
        //   address: 'Ozo g. 4C, Vilnius',
        //   maxCourts: 8,
        // },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
