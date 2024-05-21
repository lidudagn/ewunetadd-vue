import { createRouter, createWebHistory } from 'vue-router'
import signin from '../view/signin.vue'
import homePage from '../view/homePage.vue'
import signup from '../view/signup.vue'
// import forgetPassword from '../view/forgetPassword.vue'
import creating from '../../src/components/signUps/creating.vue'
import influencer from '../view/influencer.vue'
import editpackage from '../components/influencerprofile/editpackage.vue'
import newPackage from '../components/influencerprofile/newPackage.vue'
import Package from '../components/influencerprofile/package.vue'
import deletepackage from '../components/influencerprofile/deletepackage.vue'
import allcontest from '../components/allcontest.vue'
import influencerform from '../view/influencerform.vue'
import spinner from '../components/spinner.vue'
import fullprofile from '../components/fullprofile.vue'
import editprofie from '../view/influencerformupdate.vue'
import contestapp from '../components/contesstapp.vue'
import contestapplications  from '../components/contestapplications.vue'
import apps from '../components/apps.vue'
import verifyemail from '../components/verifyemail.vue'
import error from '../components/error.vue'
import oneconapp from '../components/onecontapplication.vue'


// import clientprofile from '../clientprofile.vue'
import forgetPassword from '../view/forgetPassword.vue'
import forgetPassword2 from '../view/forgetPassword2.vue'

import resetpassword from '../components/clientprofile/resetpassword.vue'
// import creating from '../../src/components/signUps/creating.vue'
import clientprofile from '../clientprofile.vue'
import userprofile from '../components/clientprofile/userprofile.vue'
 import editprofile from '../components/clientprofile/editprofile.vue'
import post from '../components/clientprofile/post.vue'
import contest from '../components/clientprofile/contest.vue'
import dashboard from '../components/clientprofile/dashboard.vue'
import updateprofile2 from '../components/clientprofile/updateprofile2.vue'
import updatecontest from '../components/clientprofile/updatecontest.vue'
import homeProfile from '../components/clientprofile/homeProfile.vue'
import shortListPackage from '../components/clientprofile/shortListPackage.vue'
import listTiktokers from '../components/clientprofile/listTiktokers.vue'
import filteredTiktokers from '../components/clientprofile/filteredTiktokers.vue'
import filteredPackages from '../components/clientprofile/filteredPackages.vue'
import contestApplication from '../components/clientprofile/contestApplication.vue'
import chat from '../components/clientprofile/chat.vue'


import shortListApplication from '../components/clientprofile/shortListApplication.vue'
import influencerProfileFromClient from '../components/clientprofile/influencerProfileFromClient.vue'
 import listOfApplicationFromOneContest from '../components/clientprofile/listOfApplicationFromOneContest.vue'
import readContestBelongsToApplication from'../components/clientprofile/readContestBelongsToApplication.vue'
const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: homePage
          },
          {
            path: '/creating',
            name: 'creating',
            component: creating
          },
          {
            path: '/sign_in',
            name: 'signin',
            component: signin
          },

          {
            path: '/sign_up',
            name: 'signup',
            component: signup
          },
          {
            path: '/forgetpassword',
            name: 'forgetpassword',
            component: forgetPassword
          },
          {
            path: '/forgetpassword2',
            name: 'forgetpassword2',
            component: forgetPassword2
          },

          {
            path: '/influencer/fullprofile',
            name: ' influencer',
            component:  influencer,
            children:[
            {path: '/influencer/fullprofile',
            name: 'fullprofile',
            component:fullprofile},
            {
              path: '/allcontest',
              name: 'allcontest',
              component:allcontest
            },
            {
              path: '/influencer/editprofie',
              name: 'editprofie',
              component:editprofie
            },
            {
              path: '/influencer/apps',
              name: 'apps',
              component:apps
            },
            {
              path: 'contestapp',
              name: 'contestapp',
              component: contestapp
            },
            {
              path: '/contestapplications',
              name: 'contestapplication',
              component: contestapplications
            },
            {
              path: '/ioneconapp',
              name: 'oneconapp',
              component:oneconapp
            },

            ]
          },
          {
            path: '/newPackage',
            name: '  newPackage',
            component:   newPackage
          },

          {
            path: '/editpackage',
            name: ' editpackage',
            component:  editpackage
          },
          {
            path: '/Package',
            name: 'Package',
            component: Package
          },
          {
            path: '/Package/newPackage',
            name: 'newPackage',
            component: newPackage
          },
          {
            path: '/Package/editpackage',
            name: 'editpackage',
            component: editpackage
          },
          {
            path: '/Package/deletepackage',
            name: 'deletepackage',
            component: deletepackage
          },

          {
            path: '/influencer/contestapp',
            name: 'contestapp',
            component: contestapp
          },
          {
            path: '/influencerform',
            name: 'influencerform',
            component:influencerform
          },

          {
            path: '/spinner',
            name: 'spinner',
            component:spinner
          },
          {
            path: '/verifyemail',
            name: 'verifyemail',
            component:verifyemail
          },
          {
            path: '/error',
            name: 'error',
            component:error
          },
          {
            path: '/resetpassword',
            name: 'resetpassword',
            component: resetpassword
          },
          {
            path: '/clientprofile',
            name: 'clientprofile',
            component: clientprofile
           ,children:[
            {
              path: '/userprofile',
              name: 'userprofile',
              component: userprofile
             },{
              path:'/editprofile',
              name:'editprofile',
              component:editprofile,
            },
            {
              path:'/post',
              name:'post',
              component:post,
            },
            {
              path:'/contest',
              name:'contest',
              component:contest,
            },
            {
              path:'/dashboard',
              name:'dashboard',
              component:dashboard,
            },
            {
              path:'/updatecontest',
              name:'updatecontest',
              component:updatecontest,
            },
            {
              path:'/updateprofile2',
              name:'updateprofile2',
              component:updateprofile2,
            },
            {
              path:'/homeProfile',
              name:'homeProfile',
              component:homeProfile,
            },
            {
              path:'/shortListPackage',
              name:'shortListPackage',
              component:shortListPackage,
            },
            {
              path:'/shortListApplication',
              name:'shortListApplication',
              component:shortListApplication,
            },
            {
            path:'/influencerProfileFromClient',
            name:'influencerProfileFromClient',
            component:influencerProfileFromClient,
          },
          {
            path:'/listTiktokers',
            name:'listTiktokers',
            component:listTiktokers,
          },
          {
            path:'/filteredTiktokers',
            name:'filteredTiktokers',
            component:filteredTiktokers,
          },
          {
            path:'/filteredPackages',
            name:'filteredPackages',
            component:filteredPackages,
          },
          {
            path:'/contestApplication',
            name:'contestApplication',
            component:contestApplication,
          },
          {
            path:'/listOfApplicationFromOneContest',
            name:'listOfApplicationFromOneContest',
            component:listOfApplicationFromOneContest,
          },
          {
            path:'/readContestBelongsToApplication',
            name:'readContestBelongsToApplication',
            component:readContestBelongsToApplication,
          },
          {
            path:'/chat',
            name:'chat',
            component:chat,
          },



           ]}

    ]
  })

  export default router
