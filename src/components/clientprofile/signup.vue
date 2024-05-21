<template>
<div   class="fixed z-10 inset-0 overflow-y-auto " id="modal">
    <div class="flex items-end justify-center min-h-screen md:pt-4  px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class=" blur-[2px]">
            <homePage/>
        </div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class=" md:text-2xl font-poppins font-bold">Create Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" >
              <router-link :to="{name: 'homePage'}" class="text-[#B67B46]"><i class="fas fa-times color-black" ></i></router-link>

            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="block  py-1 px-1 transition text-xl font-poppins"  href="#"
              @click.prevent="tab='client'" :class="{'hover:text-[#82460A] inline-block p-4 text-[#B67B46]  border-b-2 border-[#B67B46]'
                :tab==='client' , 'hover:text-black' :tab==='tiktoker'} ">Client</a>
            </li>
            <li class="flex-auto text-center">
              <a class="block  py-1 px-1 transition text-xl font-poppins "  href="#"
              @click.prevent="tab='tiktoker'" :class="{' hover:text-[#82460A]  inline-block p-4 text-[#B67B46]  border-b-2 border-[#B67B46]'
                :tab==='tiktoker' , 'hover:text-black': tab==='client'} ">Tiktoker</a>
            </li>
          </ul>

          <!-- client Form -->
          <app-client-form v-if="tab==='client'" />


          <!-- Registration Form -->
         <app-influencer-form v-else/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
import AppClientForm from '../components/signUps/clientForm.vue' ;
import AppInfluencerForm from '../components/signUps/influencerForm.vue' ;
import homePage from '../view/homePage.vue'
export default {
name: 'sign_in',
data(){
  return{
 tab:'client' ,

  };
},
components:{
  AppClientForm ,
   AppInfluencerForm,
   homePage
},
}
</script>

<style>

</style>