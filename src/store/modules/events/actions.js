import uuid from 'uuid';

export default {
  async registerEvent(context, data) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    let eventData = {
      title: data.title,
      locationId: data.locationId,
      hostId: userId,
      players: data.players,
    };

    console.log(eventData.id);

    const response = await fetch(
      `${context.rootGetters.dbUrl}/events/${uuid.v4()}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(eventData),
      }
    );

    // const responseData = await response.json();
    if (!response.ok) {
      // error ...
    }

    context.commit('registerEvent', eventData);
  },

  async loadEvents(context) {
    // if (!payload.forceRefresh && !context.getters.shouldUpdate) {
    //   return;
    // }

    const response = await fetch(`${context.rootGetters.dbUrl}/events.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const events = [];

    for (const key in responseData) {
      const event = {
        id: key,
        title: responseData[key].title,
        hostId: responseData[key].hostId,
        locationId: responseData[key].locationId,
        players: responseData[key].players,
      };
      events.push(event);
    }

    context.commit('setEvents', events);
    context.commit('setFetchTimestamp');
  },
};
