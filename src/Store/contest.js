
import api from '../services/api'

const API_URL = 'v1/contest/allcontests';
export default {
state : {
  contest: {},
 
  apps:{},
},

 getters : {
  allcontest: (state) => {
    return state.contest
  },
  allapps: (state) => {
    return state.apps
  }
},

 actions : {
  async fetchcontest({ commit }) {
    const response = await api.get(API_URL);

    commit('setcontest', response.data.contests);
  },
  async fetchapps({ commit }) {
    const response = await api.get('v1/contestApplication/readMyApplications');

    commit('setapps', response.data);
  },
  async contestapp({ commit },id,pack){

    const response = await api.post(`v1/contestApplication?contestId=${id}`,pack);

    console.log('creating new package')
    // commit('', response.data.contests);
  },
},

 mutations : {
   
    setcontest(state, contest) 
    {state.contest = contest},
   setapps: (state, apps) => (state.apps = apps),
}

}