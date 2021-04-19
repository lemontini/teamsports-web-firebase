export default {
  events(state) {
    return state.events;
  },
  hasEvents(state) {
    return state.events && state.events.length > 0;
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
    return state.events.find(event => event.id === id);
  },
};
