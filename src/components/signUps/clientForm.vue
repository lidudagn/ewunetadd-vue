<template>

<div v-if="message" class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full h-10" role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
  </svg>
Sorry, There is something wrong, please try again
</div>

<div v-if="message && success" class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full h-10" role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
Registerd successfuly,check u'r email and activate it
</div>

<br/>
  <vee-form :validation-schema="schema"  @submit="handlesubmit">


    <div class="mb-3">
      <span
        class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i class="fas fa-user"></i></span>
      <vee-field type="text" name="name" v-model="f_name" :required="required" placeholder="FirstName" class="px-2 py-2 placeholder-slate-300
        text-slate-600 relative  bg-white rounded text-sm border
        border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0 w-full pl-10" />
      <ErrorMessage class="text-red-600" name="name" />
    </div>

    <div class="mb-3">
      <span
        class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i class="fas fa-user"></i></span>
      <vee-field type="text" name="LastName" v-model="l_name" placeholder="LastName"
       class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border
        border-slate-300
      outline-none focus:outline-none focus:border-one focus:ring-0 w-full pl-10" />
      <ErrorMessage class="text-red-600" name="LastName" />


    </div>

    <!-- email -->

    <div class="mb-3">
      <span class="z-10 h-full leading-snug font-normal  text-center text-slate-300 absolute rounded
        text-base items-center justify-center w-8 pl-3 py-2 "><i class="fa fa-envelope"></i></span>
      <vee-field type="email" name="email" class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border
         border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0 w-full pl-10
         " placeholder="Email" v-model="email" />
      <ErrorMessage class="text-red-600" name="email" />
    </div>

    <!-- phone number -->
    <div class="mb-3 outlined">
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute rounded
    text-base items-center justify-center w-8 pl-3 py-2 "> <i class="fa fa-address-book"></i></span>
      <vee-field type="number" name="PhoneNumber" v-model="phone" class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white
        rounded text-sm border
         border-slate-300 outline-none focus:outline-none w-full pl-10 focus:border-one focus:ring-0 "
        placeholder="phoneNumber" />
      <ErrorMessage class="text-red-600" name="PhoneNumber" />
    </div>

    <!-- Password -->
    <div class="mb-3">

      <span class="z-10 h-full leading-snug font-normal  text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center
        w-8 pl-3 py-2">
        <i class="fas fa-lock"></i></span>
      <vee-field v-if="showPassword" type="password" placeholder="Password" v-model="password" name="password" class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
      text-sm border
       border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0 w-full pl-10" />
      <vee-field v-else type="text" placeholder="Password" v-model="password" name="password" class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
      text-sm border
       border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0 w-full pl-10" />
      <span class=" h-full font-normal absolute text-center text-slate-300
           bg-transparent rounded
       text-base items-center justify-center  right-8 pt-1.5  ">
        <button @click="toggleshow"><i class="fas"
            :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
        </button></span>
      <ErrorMessage class="text-red-600" name="password" />

    </div>
    <!-- Confirm Password -->
    <div class="mb-3">

      <span
        class="z-10 h-full leading-snug font-normal  text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i class="fas fa-key"></i></span>
      <vee-field type="password" v-if="showComfirm" placeholder="Confirm Password" name="confirm_password"
        v-model="confirm" class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
       text-sm border border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0
        w-full pl-10" />
      <vee-field type="text" v-else placeholder="Confirm Password" name="confirm_password" v-model="confirm" class="px-2 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
       text-sm border border-slate-300 outline-none focus:outline-none focus:border-one focus:ring-0
        w-full pl-10" />

      <span class=" h-full font-normal absolute text-center text-slate-300
           bg-transparent rounded
       text-base items-center justify-center  right-8 pt-1.5  ">
        <button @click="toggleComfirm"><i class="fas"
            :class="{ 'fa-eye-slash': showComfirm, 'fa-eye': !showComfirm }"></i>
        </button></span>

      <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>






    <!-- TOS -->
    <!-- <div class="mb-3 pl-6">
      <vee-field type="checkbox" name="tos"  class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block" />
      <label class="inline-block font-poppins">Accept terms </label>
      <ErrorMessage class="text-red-600" name="tos" />
    </div> -->

    <div class="flex items-center justify-center">
      <button type="submit" class=" justify-center bg-gradient-to-r from-[#B67B46] to-[#82460A]

 text-xl font-poppins mt-2 w-full h-10 text-center
   rounded-xl   text-white
      hover:text-[#75491d] ">
        Create
      </button>
      <hr />


    </div>


    <br />
    <div class="w-full h-[0.25px] bg-gray-200 pl-24 pr-24"></div>
    <div class="flex font-poppins pt-6  ">
      Already have account? &nbsp;
      <router-link :to="{ name: 'signin' }" class="text-[#B67B46]">Sign in</router-link>
    </div>

  </vee-form>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import creating from './creating.vue'
// import axios from 'axios';
export default {
  components: {
    creating
  },
  data() {
    return {
      schema: {
        name: 'required',
        LastName: 'required',
        email: 'required|min:3|max:100|email',
        PhoneNumber: 'required',
        password: 'required|min:6|max:100',
        confirm_password: 'passwords_mismatch:@password',
        // tos: 'tos',


      },
      f_name: '',
      l_name: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      showPassword: true,
      showComfirm: true,
      success:'',
        message:'',


    }
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    ...mapGetters([
      'loading'
    ])

  },
  mounted() {
    // if (this.loggedIn) {
    //    this.$router.push("/clientprofile");
    // }
  },
  methods: {
    ...mapActions(['load']),



    toggleshow() {
      this.showPassword = !this.showPassword;
    },
    toggleComfirm() {
      this.showComfirm = !this.showComfirm;
    },
    handlesubmit(user) {
        this.message = false;
      this.success = false;


      const data = {
        f_name: this.f_name,
        l_name: this.l_name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirm: this.confirm,
      };



      this.$store.dispatch("auth/register", data).then(

        (response) => {
          this.message=response.data
          this.success = true;

          // f_name = this.f_name,
          //   l_name = this.l_name,
          //   email = this.email,
          //   phone = this.phone,
          //   password = this.password,
          //   confirm = this.confirm,

          // this.loading = false;
          // this.load(true)

        },
        (error) => {
          // this.load(false)


           this.message= (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.msg ||
            error.toString();

            this.message=true


          this.success=false
        }
      );
      console.log(data)

    },
  },



};
</script>

<style>
</style>