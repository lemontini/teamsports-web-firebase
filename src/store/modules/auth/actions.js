import { auth } from '../../../firebaseDB';

export default {
  async login(context, payload) {
    const responseData = await auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .catch(error => {
        console.log(error);
        throw new Error(error.message);
      });
    return context.dispatch('auth', responseData);
  },

  async signup(context, payload) {
    const responseData = await auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .catch(error => {
        console.log(error);
      });
    return context.dispatch('auth', responseData);
  },

  async logout(context) {
    await auth.signOut();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },

  async auth(context, responseData) {
    const token = await responseData.user.getIdToken();

    localStorage.setItem('token', token);
    localStorage.setItem('userId', responseData.user.uid);

    context.commit('setUser', {
      token: token,
      userId: responseData.user.uid,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },

  // async auth(context, payload) {
  //   const mode = payload.mode;
  //   let url =
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD099rOOSoe-kY7BNG6Cs0bav-6brXnlug';

  //   if (mode === 'signup') {
  //     url =
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD099rOOSoe-kY7BNG6Cs0bav-6brXnlug';
  //   }

  //   const response = await fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: payload.email,
  //       password: payload.password,
  //       returnSecureToken: true,
  //     }),
  //   });
  //   const responseData = await response.json();

  //   if (!response.ok) {
  //     console.log(responseData);
  //     const error = new Error(
  //       responseData.message || 'Failed to authenticate. Check your login data.'
  //     );
  //     throw error;
  //   }

  //   const expiresIn = responseData.expiresIn * 1000;
  //   // const expiresIn = 5000; // for testing purposes - autoLogout after 5 sec.
  //   const expirationDate = new Date().getTime() + expiresIn;

  //   localStorage.setItem('token', responseData.idToken);
  //   localStorage.setItem('userId', responseData.localId);
  //   localStorage.setItem('tokenExpiration', expirationDate);

  //   timer = setTimeout(function() {
  //     context.dispatch('autoLogout');
  //   }, expiresIn);

  //   context.commit('setUser', {
  //     token: responseData.idToken,
  //     userId: responseData.localId,
  //     // tokenExpiration: expirationDate,
  //   });
  // },
};
