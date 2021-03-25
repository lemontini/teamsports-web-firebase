export default {
  locations(state) {
    return state.locations;
  },
  hasLocations(state) {
    return state.locations && state.locations.length > 0;
  },
};
