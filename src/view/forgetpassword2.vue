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
            <p class="text-2xl font-poppins font-bold ">New Password</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50">
              <router-link :to="{ name: 'homePage' }" class="text-[#B67B46]"><i class="fas fa-times color-black"></i>
              </router-link>

            </div>
          </div><br />
          <!-- email -->
          <div class="grid place-items-center">


<vee-form :validation-schema="schema" @submit="handlesubmit">
    <div class="mb-3">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute
        bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i class="fas fa-lock"></i></span>
      <vee-field type="password" v-if="showPassword" placeholder="New Password" v-model="new_password" name="password"
      class="px-40 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border border-slate-300 outline-none
      focus:outline-none focus:border-one focus:ring-0  pl-10 " />

      <vee-field type="text" v-else placeholder="New Password" v-model="new_password" name="password" class="px-40 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none
      focus:outline-none focus:border-one focus:ring-0  pl-10 " />
      <span class=" h-full font-normal absolute text-center text-slate-300
            bg-transparent rounded
       text-base items-center justify-center  right-10 pt-1.5  ">
        <button @click="toggleshow">
          <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
        </button></span><br/>
        <ErrorMessage class="text-red-600" name="password" />
    </div>

    <!-- password -->
    <div class="mb-3">

      <span class="z-10 h-full leading-snug font-normal  text-center text-slate-300 absolute
        bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i class="fas fa-lock"></i></span>
        <vee-field type="password" v-if="showComfirm" placeholder="Confirm Password" name="confirm_password"
        v-model="confirm_password" class=" px-40 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
       text-sm border border-slate-300 outline-none focus:outline-none focus:border-[#c08d59] focus:ring-0
        w-full pl-10" />
      <vee-field type="text" v-else placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="px-40 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
       text-sm border border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0
        w-full pl-10" />
      <span class=" h-full font-normal absolute text-center text-slate-300
            bg-transparent rounded
       text-base items-center justify-center  right-10 pt-1.5  ">
        <button @click=" toggleComfirm">
          <i class="fas" :class="{ 'fa-eye-slash': showComfirm, 'fa-eye': !showComfirm }"></i>
        </button></span><br/>

       <ErrorMessage class="text-red-600" name="confirm_password" />

    </div>

    <div class="flex items-center justify-center">
      <button type="submit" class=" justify-center bg-gradient-to-r from-[#B67B46] to-[#82460A]

 text-xl font-poppins mt-2 w-full h-10 text-center
   rounded-xl   text-white focus:border-one focus:ring-0
      hover:text-[#75491d] ">
        Change
      </button>
      <hr />


    </div>




  </vee-form>
  </div></div></div></div></div>


  </template>
  <script>

  import homePage from '../view/homePage.vue';
  import axios from 'axios'

  export default {
    name: 'forgetpassword2',
    data(){
      return{
   new_password:'',
   confirm_password:'',
   showPassword: true,
      showComfirm: true,


   schema: {


         password: 'required|min:6|max:100' ,
         confirm_password:'passwords_mismatch:@password'
        }

      }
    },
    methods:{
    handlesubmit(user){
      const data={
        new_password:this.new_password,
        confirm_password:this.confirm_password,
      }
      this.$store.dispatch("auth/forgetpassword2", data)



   },
   toggleshow() {
      this.showPassword = !this.showPassword;
    },
    toggleComfirm() {
      this.showComfirm = !this.showComfirm;
    },
    },

    components: {
 homePage,
    }

  }
  </script>
  <style>
  </style>