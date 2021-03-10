export default {
  players(state) {
    return state.players;
  },
  hasPlayers(state) {
    return state.players && state.players.length > 0;
  },
};
