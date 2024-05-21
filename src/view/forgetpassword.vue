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
              <label>Enter your Email address and our system wiil</label><br />
              <label>send you a link to reset your password</label>
            </div>

            <br />


            <div class="mb-3">
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute rounded
        text-base items-center justify-center w-8 pl-3 py-2 "><i class="fa fa-envelope"></i></span>
              <input type="email" name="email" class="px-20 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded
 text-sm border border-slate-300 outline-none
focus:outline-none focus:border-[#c08d59]  pl-10 rounded relative" placeholder="Enter Email" />
              <!-- <ErrorMessage class="text-red-600" name="email" /> -->
            </div>
            <div class="flex items-center justify-center">
              <button type="submit" class=" justify-center text-xl font-poppins w-60 h-10
   text-center  mt-2  text-white rounded-xl
    bg-gradient-to-r from-[#B67B46] to-[#82460A]  hover:text-[#75491d] ">
                Submit
              </button>
            </div>
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

export default {
  name: 'forgetpassword',

  components: {
    homePage,
  }

}
</script>
<style>
</style>