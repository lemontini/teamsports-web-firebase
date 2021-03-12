export default {
  async registerPlayer(context, data) {
    const userId = context.rootGetters.userId;
    const playerData = {
      // id: context.rootGetters.userId,
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    const response = await fetch(
      `${context.rootGetters.dbUrl}/players/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(playerData),
      }
    );

    // const responseData = await response.json();
    if (!response.ok) {
      // eroor ...
    }

    context.commit('registerPlayer', {
      ...playerData,
      id: userId,
    });
  },

  async loadPlayers(context) {
    const response = await fetch(`${context.rootGetters.dbUrl}/players.json`);
    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }

    console.log(responseData);

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

    console.log(players);

    context.commit('setPlayers', players);
  },
};
