import axios from 'axios';
import influncerToken from '../services/influncerToken';
const API_URL = 'http://192.168.1.7:7000/api/v1/influencer/influencerSignInAuth';
export default {
state : {
 
my:
{
code:'',
}


},
getters : {
  allstatus: (state) => {
    return state.my
  }
},
actions : {
  async tiktoker({ commit }) {
  const file={
    code:this.getters.allstatus.code,
   

  }
 console.log(this.getters.allstatus.client_key ,'meee')
 console.log(file,'fx')
     await axios.post(API_URL,file) .then((response) => {
      if (response.data.accessToken) {
        influncerToken.setUser(response.data);
      }

      return response.data;
    });
    
  }
}



 


}