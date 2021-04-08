export default {
  registerEvent(state, payload) {
    state.events.push(payload);
  },
  setEvents(state, payload) {
    state.events = payload;
  },
  // setFetchTimestamp(state) {
  //   state.lastFetch = new Date().getTime();
  // },
};
