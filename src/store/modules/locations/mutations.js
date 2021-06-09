export default {
  registerLocation(state, payload) {
    state.locations.push(payload);
  },
  setLocations(state, payload) {
    state.locations = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  removeLocation(state, payload) {
    const index = state.locations
      .map(item => {
        return item.id;
      })
      .indexOf(payload);
    state.locations.splice(index, 1);
  },
};
