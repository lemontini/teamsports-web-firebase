export default {
  registerLocation(state, payload) {
    state.locations.push(payload);
  },
  setLocations(state, payload) {
    state.locations = payload;
  },
  // setFetchTimestamp(state) {
  //   state.lastFetch = new Date().getTime();
  // },
};
