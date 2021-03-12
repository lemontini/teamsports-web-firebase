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
    // will be slow after the database increases.
    // better add a rootState data property [isLogged]
  },
  currentUser(_, getters, _2, rootGetters) {
    const players = getters.players;
    const userId = rootGetters.userId;
    return players.find(player => player.id === userId).userName;
    // will be slow after the database increases.
    // better add a rootState data property [currentUser]
  },
};
