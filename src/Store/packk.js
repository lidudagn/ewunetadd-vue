import axios from 'axios';
const API_URL = 'v1/package/readMyPackage';
import api from '../services/api'

const state = {
  packages: [],
  onepackage:{},
  loads:false,
  count:false,
  responses:null

  
}

const getters = {
  allpackages: (state) => {
    return state.packages
  },
  onepackage: (state) => {
    return state.onepackage
  },
  loads:(state) =>{
    return state.loads
  },
 count:(state) =>{
    return state.count
  },

 responses:(state) =>{
    return state.responses
  },
}

const  actions = {
  async fetchpackages({ commit }) {
    const response = await api.get(API_URL);
console.log('llllllhhhhhhhhhhhh')
    commit('setpackages', response.data);
  },
  async fetchpackage({ commit },id) {
    const response =  await api.get(`v1/package/readOnePackage?packageId=${id}`);
console.log('')
    commit('onepackage', response.data);
  },
  async deletepackage({ commit }, id) {
   
  const response =  await api.delete(`v1/package/deleteOnePackage?id=${id}`);
  const x = response.status
    commit('deleteit',response.status);
    console.log(x)

  },
  INCREMENT ({commit},state,payload){
  commit('INCREMENT_COUNT',state,payload)  
  },
  async updatepackage({ commit },id, onepackage,) {
  
    const response = await api.put(`v1/package/update?id=${id}`, onepackage);

  
  },

  
}

const mutations = {
   

  setpackages: (state, packages) => (state.packages = packages),
  deleteit: (state, responses) => (state.responses = responses),

  onepackage: (state,onepackage,loads,payload) =>{
    state.onepackage = onepackage,
state.loads=payload

  },
  INCREMENT_COUNT(state, payload) {      state.count = payload;    },
  
}



 
export default {
  state, 
  getters,
  actions, 
  mutations
}