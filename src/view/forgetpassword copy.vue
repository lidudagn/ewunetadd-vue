<template>

  <div class="fixed z-10 inset-0 overflow-y-auto " id="modal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="blur-[2px]">
          <homePage />
        </div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg  ">
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-poppins font-bold ">Forget Password</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50">
              <router-link :to="{ name: 'homePage' }" class="text-[#B67B46]"><i class="fas fa-times color-black"></i>
              </router-link>

            </div>
          </div><br />
          <!-- email -->
          <div class="grid place-items-center">
            <div class="font-poppins">
              <div v-if="message" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">{{message}}</strong>
  <span class="block sm:inline">message</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>

<div v-if="message && success"  class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
  please! check your email
</div>



              <label>Enter your Email address and our system wiil</label><br />
              <label>send you a link to reset your password</label>
            </div>

            <br />

            <vee-form :validation-schema="schema" @submit="handlesubmit" >
            <div class="mb-3">
              <span class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute rounded
        text-base items-center justify-center w-8 pl-3 py-2 "><i class="fa fa-envelope"></i></span>
              <vee-field type="email" name="email" v-model="email" class="px-20 py-2 placeholder-slate-300 text-slate-600  bg-white
 text-sm border border-slate-300 outline-none
focus:outline-none focus:border-one  focus:ring-0 pl-10 rounded relative" placeholder="Enter Email" /><br/>
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <div class="flex items-center justify-center">
              <button type="submit" class=" justify-center text-xl font-poppins w-60 h-10
   text-center  mt-2  text-white rounded-xl
    bg-gradient-to-r from-[#B67B46] to-[#82460A]  hover:text-[#75491d] ">
                Submit
              </button>
            </div>
         </vee-form>
            <br />


            <div class="w-full h-[0.25px] bg-gray-200 pl-24 pr-24"></div>
            <br />
            <router-link :to="{ name: 'signin' }" class="text-[#B67B46] font-poppins">Back to signin</router-link>

          </div>


        </div>
      </div>
    </div>
  </div>

</template>
<script>

import homePage from '../view/homePage.vue';
import axios from 'axios'

export default {
  name: 'forgetpassword',
  data(){
    return{
 email:'' ,
 message:'',
 success:'',

 schema: {


       email: 'required|min:3|max:100|email'}

    }
  },
  methods:{
  handlesubmit(user){

    const email={
      email:this.email,

    };

    this.$store.dispatch("auth/forgetpassword", email).then(
      response => {

       this.message="please!check you'r email"
       this.success=true

      },
      error => {
        this.message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        // if (error.response && error.response.status === 403) {
        //   EventBus.dispatch("logout");
        // }
      }
    );






 }
  },

  components: {
    homePage,
  },


}
</script>
<style>
</style>