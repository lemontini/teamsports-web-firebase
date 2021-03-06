export default {
  locations(state) {
    return state.locations;
  },
  hasLocations(state) {
    return state.locations && state.locations.length > 0;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  },
  byId: state => id => {
    const location = state.locations.find(location => location.id === id);
    return location ? location : null;
  },
};
