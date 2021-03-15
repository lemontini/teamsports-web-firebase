export default {
  registerPlayer(state, payload) {
    state.players.push(payload);
  },
  setPlayers(state, payload) {
    state.players = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
