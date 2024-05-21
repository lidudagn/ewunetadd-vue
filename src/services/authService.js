import axios from 'axios';
import api from './api'
import TokenService from "./token.service"


const API_URL = 'http://192.168.1.7:7000/api/v1/auth/';

class AuthService {
  login(user) {

return api.post( '/auth/signin', user)
.then(response => {


if (response.data) {
localStorage.setItem('user', JSON.stringify(response.data.payload));
// localStorage.setItem('user2', JSON.stringify(response.data.payload.refreshToken));



}

console.log(response.data)
});
  }

  logout() {
    TokenService.removeUser();
  }

  register(user) {
    console.log(user, "hereee")
    return api.post('/auth/signup', user);
  }

  forgetpassword(user){
    console.log(user)

    return api.post('auth/forgetPassword', user);
  }

  forgetpassword2(user){
    console.log(user)

    return api.post('/auth/forgetPasswordReset', user);
  }


  resetpassword(user){
    // console.log(user)

    console.log(af)
    return api.post('/auth/resetPassword',user);

  }

  contest(user){
    console.log(user)
    return api.post('/contest',user );

}


clientProfile(user){
  console.log(user)
  return api.post('/clientProfile',user );

}



deletecontest(id){
  console.log(id)
  let a=id



  return api.delete('/contest/deleteOneContest?id='+a)
}

  newpack(pack){
let y = null
   api.post("v1/package" ,pack ) .then(response => {

console.log(response.status,'response data')
  y = response
  });

  return y;

  }
}

export default new AuthService();
