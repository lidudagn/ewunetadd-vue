<template>
<div class=" md:grid grid-cols-2 gap-8 gap-y-2 mr-10 md:ml-24 md:px-80 pt-10"  >


<div
class=" w-64 mb-16   "    >



    <div
                    class="p-2 max-w-sm bg-gray-100   min-w-[300px]
                     border-[0.5px] ">
                     <div class="flex gap-x-44">
                <div class="flex">
                      <img src="../assets/Avater3.png" class="rounded-full h-9 w-9">
                      <router-link :to="{name:'userprofile'}" class="hover:underline text-one pl-2">
                       Afrah
                      </router-link></div>
                      <router-link :to="{name:'listOfApplicationFromOneContest' , query:{id:content.id}}">

                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-one">
  <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clip-rule="evenodd" />
</svg></router-link>


                    </div>
                    <div class="w-[280px] h-[0.25px] bg-gray-200 pr-10  mt-1"></div>



                        <h5 class="mb-2 text-xl font-semibold tracking-tight pt-3  ">
                          {{content.readContest.title}}

                        </h5>

                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-poppins">
                      {{content.readContest.description}}

                    </p>
                    <a href="#" class="inline-flex items-center text-one hover:underline">


                        <!-- {{content.package_price}}{{content.currency}} -->


                    </a>

                </div>
                <div class="  min-w-[300px] h-[0.25px] bg-one "></div>
                <div class="min-w-[300px] h-7 bg-gray-100 pt-1">
                    <div class="flex gap-x-44 ">

                        <p class="text-sm text-gray-400">12-23-2022</p>


<div class="mt-0 flex gap-x-1 justify-end">
                      <router-link :to="{name:'updatecontest' , query:{id:content.readContest.id}}">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-one">
<path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
<path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
</svg>
</router-link>

<router-link :to="{name:'editprofile', query:{id:content.readContest.id} }">


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-one">
<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
</svg>

</router-link></div>




</div>


                </div>



</div>

</div>


</template>

<script>
import UserService from '../../services/user.service copy'
export default {
    data(){
        return{
            content:''
        }
    },
    created(){
        UserService.readContestFromApplication(this.$route.query.id).then(
            response=>{
                this.content=response.data
            }
        )
    }

}
</script>

<style>

</style>