import uuid from 'uuid';

export default {
  async registerLocation(context, data) {
    // const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    let locationData = {
      name: data.name,
      address: data.address,
      maxCourts: data.maxCourts,
    };

    console.log(locationData.id);

    const response = await fetch(
      `${context.rootGetters.dbUrl}/locations/${uuid.v4()}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(locationData),
      }
    );

    // const responseData = await response.json();
    if (!response.ok) {
      // error ...
    }

    context.commit('registerLocation', locationData);
  },

  async loadLocations(context) {
    // if (!payload.forceRefresh && !context.getters.shouldUpdate) {
    //   return;
    // }

    const response = await fetch(`${context.rootGetters.dbUrl}/locations.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const locations = [];

    for (const key in responseData) {
      const location = {
        id: key,
        name: responseData[key].name,
        address: responseData[key].address,
        maxCourts: responseData[key].maxCourts,
      };
      locations.push(location);
    }

    context.commit('setLocations', locations);
    // context.commit('setFetchTimestamp');
  },
};
