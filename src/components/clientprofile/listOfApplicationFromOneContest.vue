<template>
<div class="md:px-80 pt-2">
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-center p-2 text-gray-700  bg-gray-100 h-6"
      >
        <span class="mr-4">SortBy</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="
          absolute

          py-2
          mt-2
          bg-gray-200

          rounded-md
          shadow-xl
          w-44
          text-gray-700
        "
      >
        <button @click="priceLowToHigh(this.$route.query.id)"
          class="
            block
            px-4
            py-2
            text-sm
            hover:bg-gray-400

          "
        >
         Price(low to high)
        </button>
        <button @click="priceHighToLow(this.$route.query.id)"
          class="
            block
            px-4
            py-2
            text-sm
            hover:bg-gray-400
          "
        >
          price(high to low)
        </button>
        <button @click="RateHighToLow(this.$route.query.id)"
          class="
            block
            px-4
            py-2
            text-sm
            hover:bg-gray-400
          "
        >
         rate(high to low)
        </button>
        <button @click="RateLowToHigh(this.$route.query.id)"
          class="
            block
            px-4
            py-2
            text-sm
            hover:bg-gray-400
          "
        >
         rate( low to high )
        </button>
        <button @click="nameAscending(this.$route.query.id)"
          class="
            block
            px-4
            py-2
            text-sm
            hover:bg-gray-400
          "
        >
         name( A to Z )
        </button>
        <button @click="nameDescending(this.$route.query.id)"
          class="
            block
            px-4
            py-2
            text-sm
            hover:bg-gray-400
          "
        >
         name(Z to A )
        </button>
      </div>
    </div>
  </div>


  <div class=" md:grid grid-cols-2 gap-20 gap-y-2 mr-10 ml-10   md:px-80 pt-10"  >
           <div v-for="content in contents.contests.application" :key="content.id">

<div
    class=" w-96 mb-16   "  >



        <div
                        class="p-2 max-w-sm bg-gray-100   min-w-[300px]
                         border-[0.5px] ">
                         <div class="flex justify-end">

                         <button class="" @click="addToShortListApplication(content.id)">


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
</svg>


</button></div>

<div class="flex">
  <img class="h-9 w-9 rounded-full" src="../assets/Avater3.png" alt=""
                                style="cursor: auto;">
<router-link :to="{name:'influencerProfileFromClient',query:{id:content.influencerId}}" class=" text-one hover:underline pt-1 pl-2">
 {{content.applicant.f_name}}

</router-link> &nbsp;

<p class=" pt-1">Applied </p>&nbsp;

<p class="pt-1"> to your</p>

&nbsp;
<router-link :to="{name:'readContestBelongsToApplication' , query:{id:content.contestId}}" class="text-two hover:underline pt-1 ">
contest
</router-link></div>
<div class="flex pt-3">

<p class="text-gray-400">Description:</p>&nbsp;
<p class="text-sm pt-1">{{content.description}}</p>
</div>






                    </div>
                    <div class="  min-w-[300px] h-[0.25px] bg-one "></div>
                    <div class="min-w-[300px] h-7 bg-gray-100 pt-1">
                        <div class="flex gap-x-32 ">

                            <p class="text-sm text-gray-400">12-23-2022</p>



    <p  class="text-sm underline text-one">{{content.price}}{{content.currency}}</p>








</div>



</div></div>



</div>


</div>



</template>

<script>
import UserService from '../../services/user.service copy'
export default {

data(){
    return{
        contents:null,
        show:false
    }
},
created(){
    console.log(this.$route.query.id)
    UserService.getApplicationsFromOneContest(this.$route.query.id).then(
        response=>
        this.contents=response.data
    )

},
methods:{
  addToShortListApplication(id){

UserService.addToShortListApplication(id).then(
    response=>{

    }
)

},
nameAscending(id){
    UserService.sortApplicationsByNameAscending(id).then(
        response=>{
            this.contents=response.data
        }
    )


},
RateLowToHigh(id){

UserService.sortApplicationsByRateDescending(id).then(
    response=>{
        this.contents=response.data
    }
)


},
priceHighToLow(id){

UserService.sortApplicationsByPriceDescending(id).then(
    response=>{
        this.contents=response.data
    }
)


},
nameDescending(id){
    UserService.sortApplicationsByNameDescending(id).then(
        response=>{
            this.contents=response.data
        }
    )


},
RateHighToLow(id){

UserService.sortApplicationsByRateAscending(id).then(
    response=>{
        this.contents=response.data
    }
)


},

        priceLowToHigh(id){
            UserService.sortApplicationsByPriceAscending(id).then(
                response=>{
                    this.contents=response.data
                }
            )
        }
    },







}
</script>

<style>

</style>