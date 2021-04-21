export default {
  players(state) {
    return state.players;
  },
  hasPlayers(state) {
    return state.players && state.players.length > 0;
  },
  isPlayer(_, getters, _2, rootGetters) {
    const players = getters.players;
    const userId = rootGetters.userId;
    return players.some(player => player.id === userId);
    // might get slow after the database increases.
    // better add a rootState data property [isLogged]
  },
  currentUser(_1, getters, _2, rootGetters) {
    const players = getters.players;
    const userId = rootGetters.userId;
    return players.find(player => player.id === userId).userName;
    // might get slow after the database increases.
    // better add a rootState data property [currentUser]
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
  byId: (_, getters) => id => {
    return getters.players.find(player => player.id === id);
  },
};
