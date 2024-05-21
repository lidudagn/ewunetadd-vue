<template>
<div   class="fixed z-10 inset-0 overflow-y-auto " id="modal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0 backdrop-blur">
      <div class="fixed inset-0 transition-opacity ">
       <div class=" blur-[2px] ">
            <homePage  />
        </div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg ">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-poppins font-bold">Sign In</p>
            <!-- Modal Close Button -->
            <!-- <div class="modal-close cursor-pointer z-50" >
              <button class="btn" @click="display = !display"><i class="fas fa-times color-black" ></i></button>

            </div> -->

            <div class="modal-close cursor-pointer z-50" >
                 <router-link :to="{name: 'homePage'}" class="text-[#B67B46]"><i class="fas fa-times color-black" ></i></router-link>

            </div>
          </div>
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="py-1 px-1 transition text-xl font-poppins "  href="#"
              @click.prevent="tab='tiktoker'" :class="{'hover:text-[ #82460A] inline-block p-4 text-[#B67B46]  border-b-2 border-[#B67B46]  '
                :tab==='tiktoker' , 'hover:text-black' :tab==='client'} ">Tiktoker</a>
            </li>
            <li class="flex-auto text-center">
              <a class="block  py-1 px-1 transition text-xl font-poppins "  href="#"
              @click.prevent="tab='client'" :class="{' hover:text-[ #82460A]  inline-block p-4 text-[#B67B46] rounded-t-lg border-b-2 border-[#B67B46] active'
                :tab==='client' , 'hover:text-black': tab==='tiktoker'} ">Client</a>
            </li>
          </ul>

          <!-- signin tiktoker Form -->
          <app-tiktoker-form v-if="tab==='tiktoker'" />


          <!-- signin client  Form -->
         <app-public-form v-else/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
 import AppPublicForm from '../components/signIns/publicForm.vue' ;
import AppTiktokerForm from '../components/signIns/tiktokerForm.vue' ;
 import homePage from '../view/homePage.vue'
export default {
name: 'join',
data(){
  return{
 tab:'tiktoker' ,

  };
},
components:{
  AppPublicForm ,
   AppTiktokerForm,
  homePage
},
}
</script>

<style>

</style>