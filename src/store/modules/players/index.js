import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      players: [
        // {
        //   id: 'p1',
        //   userName: 'rokas',
        //   firstName: 'Rokas',
        //   lastName: 'Kuliešius',
        // },
        // {
        //   id: 'p2',
        //   userName: 'šaras',
        //   firstName: 'Šarūnas',
        //   lastName: 'Šukevičius',
        // },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
