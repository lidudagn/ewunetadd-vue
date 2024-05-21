import axios from 'axios';

import influncerToken from '../services/influncerToken';
const API_URL = 'http://192.168.1.3:7000/api/v1/influncer/influencerSignInAuth';
export default {
state : {
 
my:
{
  accessToken:'',
  refreshToken:''
}


},
getters : {
  allstatus: (state) => {
    return state.my
  }
},
actions : {
 
  refreshToken({ commit }, accessToken) {
    commit('refreshToken', accessToken);
  }
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
  refreshToken(state, accessToken) {
    state.status.loggedIn = true;
    state.user = { ...state.user, accessToken: accessToken };
  }
}

 


}