import { createStore } from "vuex";
import { auth } from "./auth.js";
import  packk  from './packk.js'
import  contest  from './contest.js'
import infProfileCreate from "./infProfileCreate.js";
import tiktok from "./tiktok.js";
import infProfile from "./infProfile.js";
const store = createStore({

  state: {
    loading:false
  },
mutations: {
    LOAD(state,value){
        state.loading=value
    }
},
actions: {
load({commit},value){
  commit('LOAD',value)
}
},
getters: { 
   loading: (state) => state.loading,
},
  modules: {
    auth, packk, contest, infProfileCreate,tiktok,infProfile
  },
});

export default store;
