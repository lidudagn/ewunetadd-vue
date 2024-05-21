<template>

  <div class="grid place-items-center">
    <div v-show="message"  class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center h-10 w-full" role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
  </svg>
  Wrong password or email-check it out!
</div>

    <vee-form :validation-schema="schema"  @submit="handleLogin">
    <div class="mb-3">
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  rounded
      text-base items-center justify-center w-8 pl-3 py-2 "><i class="fa fa-envelope"></i></span>
      <vee-field type="email" name="email" v-model="email" class="px-20 py-2 placeholder-slate-300 text-slate-600   bg-white rounded
 text-sm border border-slate-300 outline-none
focus:outline-none focus:border-one focus:ring-0 pl-10 relative" placeholder="Enter Email" /><br/>
       <ErrorMessage class="text-red-600" name="email" />
    </div>

    <!-- password -->
    <div class="mb-3">

      <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute
        bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i class="fas fa-lock"></i></span>
      <vee-field type="password" v-if="showPassword" placeholder="Enter Password" v-model="password" name="password"
      class="px-20 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border border-slate-300 outline-none
      focus:outline-none focus:border-one focus:ring-0  pl-10 " />

      <vee-field type="text" v-else placeholder="Enter Password" v-model="password" name="password" class="px-20 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none
      focus:outline-none focus:border-one focus:ring-0 pl-10 " />
      <span class=" h-full font-normal  text-center text-slate-300
           absolute bg-transparent rounded
       text-base items-center justify-center  right-16 pt-1.5  ">
        <button @click="toggleShow">
          <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
        </button></span><br/>

       <ErrorMessage class="text-red-600" name="password" />

    </div>


  <!-- signin button -->
  <div class="flex items-center justify-center">
    <button type="submit"  class=" justify-center text-xl font-poppins w-60 h-10
   text-center  mt-2  text-white rounded-xl
    bg-gradient-to-r from-[#B67B46] to-[#82460A]  hover:text-[#75491d] ">
      SignIn
    </button>
  </div>
  </vee-form>
  </div>

  <br />


  <div class="flex">
    <div class="mr-10 font-poppins">
      <input type="checkbox" class="focus:ring-0 focus:text-one text-one" /><label> Remember Me</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>

    <router-link :to="{ name: 'forgetpassword' }" class="text-[#75491d] font-poppins">forgot password?</router-link>
    <!-- <a  href="#" class="text-[#75491d]">forgot password?</a> -->

  </div>
  <br />
  <div class="w-full h-[0.25px] bg-gray-200 pl-24 pr-24"></div><br />
  <div class="grid place-items-center font-poppins">

    <label>Not a member yet?</label>
    <!-- <a href="#" class="text-[#7540091d]">join</a> -->
    <router-link :to="{ name: 'signup' }" class="text-[#B67B46]">join</router-link>
  </div>




</template>

<script>
import clientprofile from '../../clientprofile.vue'
export default {

  data() {
    return {
      showPassword: true,
      password: '',
      email:'',
      loading: false,
      message:false,

      schema: {
      password: 'required|min:6',

        email: 'required|min:3|max:100|email'}



    };
  },
  computed: {

    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    // if (this.loggedIn) {
    //   this.$router.push("/profile");
    // }
  },
  methods: {
    handleLogin(user) {
      // console.log( this.$store.auth/token)
      this.message=false

      const login={
      email:this.email,
       password:this.password}
      this.loading = true;



      this.$store.dispatch("auth/login", login).then(



       this.$router.push("/dashboard")

      // (error) => {
      //   this.message =true


      //   if (error.response && error.response.status === 403) {
      //     EventBus.dispatch("logout");
      //   }
      // }
    );
    },

      toggleShow() {
        this.showPassword = !this.showPassword;
      }




    },













};
</script>
