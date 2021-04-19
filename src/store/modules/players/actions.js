import db from '../../../firebaseDB';

export default {
  async registerPlayer(context, data) {
    const userId = context.rootGetters.userId;
    const playerData = {
      // id: context.rootGetters.userId,
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    // const token = context.rootGetters.token;

    // const newPlayer = db.ref('teamsports/players').push();
    db.ref('teamsports/players')
      .child(userId)
      .set(playerData);
    // (await newPlayer).set(playerData);

    // const response = await fetch(
    //   `${context.rootGetters.dbUrl}/players/${userId}.json?auth=` + token,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(playerData),
    //   }
    // );

    // const response = await db
    //   .ref(`teamsports/players/${userId}`)
    //   .set(playerData);

    // // const responseData = await response.json();
    // if (!response.ok) {
    //   // eroor ...
    // }

    context.commit('registerPlayer', {
      ...playerData,
      id: userId,
    });
  },

  async loadPlayers(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    // const response = await fetch(`${context.rootGetters.dbUrl}/players.json`);
    // const responseData = await response.json();

    // if (!response.ok) {
    //   const error = new Error(responseData.message || 'Failed to fetch!');
    //   throw error;
    // }

    // const locations = [];
    // db.ref('teamsports/locations').once('value', responseData => {
    //   responseData.forEach(location => {
    //     locations.push({
    //       id: location.key,
    //       name: location.val().name,
    //       address: location.val().address,
    //       maxCourts: location.val().maxCourts,
    //     });
    //   });
    //   context.commit('setLocations', locations);
    //   context.commit('setFetchTimestamp');
    // });

    const players = [];
    db.ref('teamsports/players').once('value', responseData => {
      responseData.forEach(player => {
        players.push({
          id: player.key,
          userName: player.val().userName,
          firstName: player.val().firstName,
          lastName: player.val().lastName,
        });
      });
      context.commit('setPlayers', players);
      context.commit('setFetchTimestamp');
    });

    // for (const key in responseData) {
    //   const player = {
    //     id: key,
    //     userName: responseData[key].userName,
    //     firstName: responseData[key].firstName,
    //     lastName: responseData[key].lastName,
    //   };
    //   players.push(player);
    // }

    // context.commit('setPlayers', players);
    // context.commit('setFetchTimestamp');
  },
};
