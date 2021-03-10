import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      players: [
        { id: 'p1', username: 'rokas', name: 'Rokas', surname: 'Kuliešius' },
        { id: 'p2', username: 'šaras', name: 'Šarūnas', surname: 'Šukevičius' },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
