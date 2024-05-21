import axios from 'axios';
import api from '../services/api'
 class packagess{
    static API_URL = 'http://192.168.1.7:7000/api/v1/auth';
// static getAllpackages(){
//   return axios.get(API_URL + 'pa');
// }
 getpackage(){
    return axios.get(API_URL + 'package');
  }
  createPackage(packagee) {
    return axios.post(API_URL + 'package',packagee);
  }
  updatePackage(packagee,packageeId) {
    return axios.put(API_URL + 'package' + {packageeId},packagee);
  }
  deletePackage(packageeId) {
    return axios.delete(API_URL + 'package' + {packageeId});
  }
}
export default new packagess();

