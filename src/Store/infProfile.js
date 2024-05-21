
const API_URL = 'v1/influencer/influencerProfile/read';
import api from '../services/api'
export default {
state : {
  profile: {},
  responses:null
  

},

 getters : {
  fullprofile: (state) => {
    return state.profile
  },
  createpak: (state) => {
    return state.responses
  },

},

 actions : {
  async fetchprofile({ commit }) {
    const response = await api.get(API_URL);
console.log( response.data,'eziga')
    commit('setprofile', response.data);

  },
  async createPackage ({commit},profile){
    const response = await api.post('v1/package',profile);
    console.log(response,'status of the response')
    commit('createpa', response.status);
  },
  async updatePackage ({commit}){
    const response = await api.put();
    console.log('updating package')
    commit('updatepackage', response.data.contests);
  },
  
},

 mutations : {
  setprofile: (state, profile) => (state.profile = profile),
  createpa:(state,responses)=>(state.responses = responses),
    removeTodo:(state,id) => state.packages = state.packages.filter((todo) => todo.id !== id),
}

}