// import db from '../../../firebaseDB';

export default {
  async registerPlayer(context, data) {
    const userId = context.rootGetters.userId;
    const playerData = {
      // id: context.rootGetters.userId,
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `${context.rootGetters.dbUrl}/players/${userId}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(playerData),
      }
    );

    // const response = await db
    //   .ref(`teamsports/players/${userId}`)
    //   .set(playerData);

    // const responseData = await response.json();
    if (!response.ok) {
      // eroor ...
    }

    context.commit('registerPlayer', {
      ...playerData,
      id: userId,
    });
  },

  async loadPlayers(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(`${context.rootGetters.dbUrl}/players.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const players = [];

    for (const key in responseData) {
      const player = {
        id: key,
        userName: responseData[key].userName,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
      };
      players.push(player);
    }

    context.commit('setPlayers', players);
    context.commit('setFetchTimestamp');
  },
};
