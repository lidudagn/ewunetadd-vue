import api from './api';

class UserService {
  getUserProfile() {
    return api.get('/clientProfile/readMyProfile');
  }

  getUserContest() {
    return api.get('/contest/read');
  }

  getOneContest(id){
    return api.get('/contest/readOneContest?contestId='+id)

  }
  updateOneContest(id,data){
    console.log(data)
    return api.put('/contest/update?id='+id,data)
  }

  deleteContest() {
    return api.delete('/contest/deleteOneContest');
  }

 updateProfile( info){
    return api.put('/clientProfile/update',info)
  }

  getInfluencerPackage(id){
    return api.get('/package/readAllPackages')
    // return api.get('/package/filterPackageByInfluencerGenre?genre='+Comedy)
    //  return api.get('contest/mycontest')


  }

  getPackageByAscendingName(){
    return api.get('/package/sortPackageByInfluencerNameDesc')

  }
  getPackageByDiscendingName(){
    return api.get('/package/sortPackageByInfluencerNameAsc')
  }
  getPackageByPriceToHigh(){
    return api.get('/package/sortPackageByPriceAsc')

  }
  getPackageByPriceToLow(){
    return api.get('/package/sortPackageByPriceDesc')

  }
  createPackageShortList(id){
    return api.post('/shortListPackage/createPackageShortList?packageId='+id)
  }
  getShortListPackage(){
    return api.get('/shortListPackage/readAllShortListedPackages')

  }
  getOneInfluencerProfile(id){
    return api.get('/influencer/influencerProfile/readOneInfluencerProfile?influencerId='+id)

  }
  getFilteredTiktokersByGender(data){
    return api.get('/influencer/influencerProfile/filterInfluencerByGender?gender='+data)

  }
  getFilteredTiktokersByGenre(data){
    return api.get('/influencer/influencerProfile/filterInfluencerByGenre?genre='+data)

  }

  FilterVerifiedTiktokers(){
    return api.get('/influencer/influencerProfile/filterVerifiedInfluencer')

  }
  getFilteredPackagesByGenre(data){
    return api.get('/package/filterPackageByInfluencerGenre?genre='+data)

  }

  getFilteredPackagesByPrice(p,c){
    return api.get('/package/filterPackageByPrice?price='+p)

  }

  getFilteredPackagesByName(nm){
    return api.get('/package/filterPackageByInfluencerName?f_name='+nm)

  }

  deleteOneShortListPackage(id){
    return api.delete('/shortListPackage/deleteOneShortListedPackage?id='+id)

  }
 getApplicationsFromOneContest(data){

    return api.get('/contest/listApplicationsOfOneContest?id='+data)
  }

  sortApplicationsByPriceAscending(id){
    return api.get('contestApplication/sortApplicationsByPriceAsc?id='+id)
  }
  sortApplicationsByPriceDescending(id){
    return api.get('contestApplication/sortApplicationsByPriceDesc?id='+id)
  }
  sortApplicationsByRateAscending(id){
    return api.get('contestApplication/sortApplicationsByInfluencerRateAsc?id='+id)
  }

  sortApplicationsByRateDescending(id){
    return api.get('contestApplication/sortApplicationsByInfluencerRateDesc?id='+id)
  }

  sortApplicationsByNameAscending(id){
    return api.get('contestApplication/sortApplicationsByInfluencerNameAsc?id='+id)
  }
  sortApplicationsByNameDescending(id){
    return api.get('contestApplication/sortApplicationsByInfluencerNameDesc?id='+id)
  }

  getAllOfApplications(){
    const user=JSON.parse(localStorage.getItem("user"));
    const id=user.id
    return api.get('contestApplication/readAllApplicationsSentToCient?clientId='+id)
  }

  readContestFromApplication(id){
    return api.get('contest/readContestApplicationBelongsTo?contestId='+id)
  }

  addToShortListApplication(id){
    return api.post('shortListApplication/createApplicationShortList?applicationId='+id)
  }

  removeFromShortListApplication(id){
    return api.delete('shortListApplication/deleteOneShortListedApplication?id='+id)
  }



}

export default new UserService();