// import uuid from 'uuid';
import { db } from '../../../firebaseDB';

export default {
  async registerLocation(context, data) {
    // const userId = context.rootGetters.userId;
    // const token = context.rootGetters.token;

    let locationData = {
      name: data.name,
      address: data.address,
      maxCourts: data.maxCourts,
    };

    // console.log(locationData.id);

    // const response = await fetch(
    //   `${context.rootGetters.dbUrl}/locations/${uuid.v4()}.json?auth=` + token,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(locationData),
    //   }
    // );

    // // const responseData = await response.json();
    // if (!response.ok) {
    //   // error ...
    // }

    const newLocation = db.locations.push();
    newLocation.set(locationData);

    locationData.id = newLocation.key;

    context.commit('registerLocation', locationData);
  },

  async loadLocations(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    // const response = await fetch(`${context.rootGetters.dbUrl}/locations.json`);
    // const responseData = await response.json();

    // if (!response.ok) {
    //   const error = new Error(responseData.message || 'Failed to fetch!');
    //   throw error;
    // }

    // let responseData = null;
    const locations = [];
    await db.locations.once('value', responseData => {
      responseData.forEach(location => {
        locations.push({
          id: location.key,
          name: location.val().name,
          address: location.val().address,
          maxCourts: location.val().maxCourts,
        });
      });
      context.commit('setLocations', locations);
      context.commit('setFetchTimestamp');
    });
  },
};
