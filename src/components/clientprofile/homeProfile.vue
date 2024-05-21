<template>




                <!-- <div class="flex gap-x-4 md:justify-end pl-4">

              <div class="relative pt-3   ">

            <button
              @click="filter = !filter"
              class="
                flex
                items-center
                pl-4
              w-24

             text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4
                focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700
                 dark:focus:ring-gray-600"

            >
              <span class="mr-4">Fitler </span>
              <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-100">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>


            </button>



            <div
              v-show="filter"
              class="

                py-2
                mt-2
                bg-white
                rounded-md
                shadow-xl

                 dark:text-gray-200

                w-44
              "
            >

            <label class="block">

<select  @change="filterByGenre($event)" v-model="genre"
    class="appearance-none form-select block w-36 pl-5 mt-1 focus:outline-none border-none focus:ring-0 focus:border-none
      bg-white text-gray-700 focus:text-one ">
    <option value="0" label="Genre"  disabled selected="selected">Genre </option>
    <option value="Comedy"> Comedy</option>
    <option value="Dance">Dance</option>
    <option value="Education">Education</option>
    <option value="Fitness">Fitness</option>
    <option value="Food">Food</option>
    <option value="Music">Music</option>

    <option value="Vlog"> Vlog</option>
    <option value="Other">Other</option>


</select>
</label>
<form @submit="filterByPrice">
              <div class="flex gap-x-0   ">
            <label class=" items-center ml-1 pt-1 ">
                                                    <input type="number"  class=" text-two
                                                    h-6 w-16 pt-1 border-none focus:border-none focus:ring-0 focus:outline-none"
                                                        v-model="price" placeholder="price" >

                                                </label>
                                                <label class="  items-center pt-1 ">
                                                  <select  v-model="currency" style="-webkit-appearance: none;  -moz-appearance: none;"
                                                class="form-select block w-14  h-6  border-none focus:outline-none
                                                focus:ring-0 focus:border-none  text-one " >
                                                <option value="0" label=" Ccy" selected disabled hidden>Ccy </option>
                                                <option value="ETB" label="ETB" >ETB</option>
                                                 <option value="USD" label="USD">USD</option>
                                           <option value="EURO" label="EURO">EURO</option>
                                            </select>
                                                </label>
                                                <div class="pt-1">
                                                  <button  type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                class="w-5 h-5">
  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23
   6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
</svg></button></div>

              </div></form>

             <div>
              <input type="text" @click="filterByName" v-model="name" class="border-none focus:ring-0 focus:border-none outline-none" placeholder="InfluencerName">
             </div>
            </div>




          </div></div> -->
          <div class="md:px-80 flex gap-x-5">
          <div class=" pt-2">
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
          w-40
          text-gray-700
        "
      >
        <button @click="lprice"
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
        <button @click="hprice"
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

        <button @click="assname"
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
        <button @click="disname"
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
  <div class=" pt-2">
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="view = !view"
        class="flex items-center p-2 text-gray-700  bg-gray-100 h-6"
      >
        <span class="mr-4">filterBy</span>
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
      <form
        v-show="view"
        class="
          absolute

          py-2
          mt-2
          bg-gray-200

          rounded-md
          shadow-xl
          w-40
          text-gray-700
        "
      >
        <input  type="text" @click="filterByName"
        placeholder="Name"
        v-model="name"
          class="
            block
            py-[1.5px]
             w-36
            ml-1

                outline-none
          focus:ring-0
          focus:border-one
          border-gray-300
          pl-2
         text-sm


          "
        >


        <input type="text" @click="filterByPrice"
        placeholder="price with currency"
        v-model="price"

          class="
            block
            px-4
            py-[1.5px]
            w-36
            ml-1
            pl-2
            mt-2
            outline-none
          focus:ring-0
          focus:border-one
          border-gray-300
            text-sm


          "
        >


        <select @click="filterByGenre($event)" v-model="genre"
          class="
            block
            w-36
            mt-2
            ml-1
            outline-none
          focus:ring-0
          focus:border-one
          border-gray-300

            py-[1.5px]
            text-sm


          "
        >
        <option label="Genre" value="Genre"  selected  disabled>Genre</option>

         <option label="Comedy" value="Comedy">Comedy</option>
         <Option label="Dance" value="Dance">Dance</Option>
         <option label="Education" value="Education">Education</option>
         <option label="Fitness" value="Fitness">Fitness</option>
         <option label="Food" value="Food">Food</option>
         <option label="Music" value="Music">Music</option>
         <option label="Vlog" value="Vlog">Vlog</option>
         <option label="Other" value="Other">Other</option>
       </select>

      </form>
    </div>
  </div></div>





<div class=" md:grid grid-cols-2 gap-28 gap-y-1 mr-10 ml-10 md:px-80 pt-7 "  >


<div   v-for="content in contents.readPackage " :key="content.id"
    class="    md:w-96 w-80   mb-16   "   >

    <div
                    class="p-2 max-w-sm bg-gray-100   min-w-[300px]
                     border-[0.5px] ">
                     <div class="flex gap-x-44">
                <div class="flex">
                      <img src="../assets/Avater3.png" class="rounded-full h-9 w-9">
                      <router-link :to="{name:'influencerProfileFromClient', query:{id:content.influencerId}}" class="hover:underline text-one pl-2">
                {{content.packages.f_name}} &nbsp;  {{content.packages.l_name}}
                      </router-link></div>


                    </div></div>
    <div class="min-w-[300px] "></div>

        <!--img-->

        <div
                        class="p-6 max-w-sm bg-gray-100   min-w-[300px]
                         border-[0.5px] ">

                        <a href="#">
                            <h5 class="mb-2 text-xl font-semibold tracking-tight  ">{{content.package_name}}
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-poppins">Go to this step by
                            {{content.package_des}}</p>
                        <a href="#" class="inline-flex items-center text-one hover:underline">


                            {{content.package_price}}{{content.currency}}

                        </a>

                    </div>
                    <div class="  min-w-[300px] h-[0.25px] bg-one max-w-sm"></div>
                    <div class="min-w-[300px] max-w-sm h-10 bg-gray-100 pt-2">
                        <div class="flex md:gap-x-72 gap-x-56 ">
                            <div  class="flex">
                             <p class="text-sm"> 12-02-2020</p></div>


<div >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" @click="lists(content.id)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 border-
gray-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></div>





</div>


                    </div>



</div>

</div>


</template>

<script>
    import UserService from '../../services/user.service copy';
    import { ref } from 'vue';
export default {
    // setup() {
    //   let showMenu = ref(false);
    //   let show = ref(false);
    //   const toggleNav = () => (showMenu.value = !showMenu.value);
    //   return { showMenu, show, toggleNav };
    // },

    data(){
        return{
            contents:null,
            filter:false,
            genre:0,
            price:'',
            currency:0,
            name:'',
            show:false,
            view:false


        }
    },
    created(){
        UserService.getInfluencerPackage().then(
      response => {
        this.contents = response.data;




      });


    },
    methods:{

        assname(){

            UserService.getPackageByAscendingName().then(
                response => {
                  this.show=false
        this.contents = response.data;
         } )

        },
        filterByGenre(event){
  const selected=event.target.value
  console.log(selected)

  UserService.getFilteredPackagesByGenre(selected).then(
    response=>{
      this.contents=response.data
      this.$router.push({ name: 'filteredPackages', params: { content: JSON.stringify(this.contents)} })

    }
  )



 },
 filterByPrice(user){
 const price=this.price
 const currency=this.currency


  UserService.getFilteredPackagesByPrice(price,currency).then(
    response=>{
      this.contents=response.data
      console.log(this.content)

    }
  )



 },
 filterByName(user){
 const name=this.name




  UserService.getFilteredPackagesByName(name).then(
    response=>{
      this.contents=response.data
      console.log(this.content)

    }
  )



 },
        disname(){
            UserService.getPackageByDiscendingName().then(
                response => {
                  this.show=false
        this.contents = response.data;
         } )

        },
        lprice(){
            UserService.getPackageByPriceToHigh().then(
                response => {
                  this.show=false
        this.contents = response.data;
         } )

        },
        hprice(){
            UserService.getPackageByPriceToLow().then(
                response => {
                  this.show=false
        this.contents = response.data;
         } )

        },
        lists(id){
          UserService.createPackageShortList(id).then(
          console.log('yes')
          )
        },

    }

}
</script>

<style>

</style>