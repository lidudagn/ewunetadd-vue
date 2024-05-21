import axios from 'axios';
import api from '../services/api.js'

export default {
    state : {
    
      },
      
       getters : {
     
      },

 actions : {
    async addprofile({commit},hh){
       console.log(hh, "sjsh")
     
     const response=    await api.post('v1/influencer/influencerProfile' ,hh  ) 
//      .then(data => {
    
//    console.log(response.data)
// })
.catch(err => console.log('error'))


        // commit('addprofile',response.data)
    },
    async updateprofile({commit},tt){
      console.log(tt, "sjsh")
    
    const response=    await api.put('v1/influncer/influencerProfile/update' ,tt  ) 
//      .then(data => {
   
//    console.log(response.data)
// })
.catch(err => console.log('error'))


       // commit('addprofile',response.data)
   }

},

 mutations : {
  
}

}