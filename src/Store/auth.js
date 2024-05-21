import AuthService from '../services/authService.js';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },

  forgetpassword({commit},user){
    console.log(user)
return AuthService.forgetpassword(user).then(
  response => {
    commit('forgetSuccess');
    return Promise.resolve(response.data);
  },
  error => {
    commit('forgetFailure');
    return Promise.reject(error);
  }

)
  },
  forgetpassword2({commit},user){
    return AuthService.forgetpassword2(user).then(
      response => {
        commit('forgetSuccess2');
        return Promise.resolve(response.data);
      },
      error => {
        commit('forgetFailure2');
        return Promise.reject(error);
      }

    )
      },

        forgetpassword2({commit},user){
    return AuthService.forgetpassword2(user).then(
      response => {
        commit('forgetSuccess2');
        return Promise.resolve(response.data);
      },
      error => {
        commit('forgetFailure2');
        return Promise.reject(error);
      }

    )
      },

  resetpassword({commit},user){
    return AuthService.resetpassword(user).then(
      response=>{
        commit('resetSuccess');
        return Promise.resolve(response.data);
      },
      error =>{
        commit('resetFailure');
        return Promise.reject(error);
      }
    )

  },

  refreshToken({ commit }, accessToken) {
    commit('refreshToken', accessToken);
  },
  register({ commit }, user) {
    return AuthService.register(user).then(
      response => {
        commit('registerSuccess');
        return Promise.resolve(response.data);
      },
      error => {
        commit('registerFailure');
        return Promise.reject(error);
      }
    );
  },
  clientProfile({commit},user){
    return AuthService.clientProfile(user).then(
      response=>{
        commit('profileSuccess');
        return Promise.resolve(response.data);
      },
      error=>{
        commit('profileFailure');
        return Promise.reject(error);
      }
    )
  },
  contest({commit},user){
    return AuthService.contest(user).then(
      response=>{
        commit('contestSuccess');
        return Promise.resolve(response.data);
      },
      error=>{
        commit('contestFailure');
        return Promise.reject(error);
      }
    )
  },


  deletecontest({commit},user){
    return AuthService.deletecontest(user).then(
      response=>{
        commit('deletecontestsuccess');
        return Promise.resolve(response.data)
      },
      error=>{
        commit('updateprofilefailure');
        return Promise.reject(error);
      }
    )
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    forgetFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    forgetSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    forgetFailure2(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    forgetSuccess2(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    resetSuccess(state) {
      state.status.loggedIn = true;
    },
    resetFailure(state) {
      state.status.loggedIn = false;
    },
    refreshToken(state, accessToken) {
      state.status.loggedIn = true;
      state.user = { ...state.user, accessToken: accessToken };
    },
    profileSuccess(state) {
      state.status.loggedIn = true;
    },
   profileFailure(state) {
      state.status.loggedIn = true;
    },
  }

};
