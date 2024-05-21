<template>

<div>
  <div class="relative flex min-h-screen font-poppins">


<div class="bg-gray-300 px-2 py-4 w-64 space-y-6 z-40
fixed inset-y-0 left-0 md:relativ md:-translate-x-0  transform -translate-x-full transition duration-200 ease-in-out
   "  :class="{'relative -translate-x-0':showSidebar}">


<div class=" rounded-full  ">
  <router-link :to="{name:'userprofile'}" class=" ">
   <img src="../src/assets/clientphoto.png" alt="photo"
 class=" mt-10  h-auto  w-40  pl-2  rounded-full  "> <p class="px-10 text-[#82460A]">User Name</p></router-link>

</div>


  <nav>


    <router-link :to="{name:'homeProfile'}"  class="group flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" class="w-6 h-6 text-[#82460A]">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>

<span class="group-hover:text-[#82460A] ">Home</span>
</router-link>


    <router-link :to="{name:'dashboard'}"  class="group flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#82460A]">
  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clip-rule="evenodd" />
</svg>


<span class="group-hover:text-[#82460A] ">Dahboared</span>
</router-link>

  <router-link :to="{name:'userprofile'}"  class="group flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 text-[#82460A]">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg>

<span class="group-hover:text-[#82460A] ">Profile</span>
</router-link>


 <router-link :to="{name:'chat'}"   class="flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#82460A]">
  <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0
   003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75
   3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75
   0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25
    0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>

<span  class="group-hover:text-[#82460A]">Chat</span>
</router-link>






  <router-link :to="{name:'contestApplication'}" class="flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#82460A]">
  <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
  <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" />
</svg>
<span class="group-hover:text-[#82460A]">Application</span>
</router-link>


  <router-link :to="{name:'post'}"  class="flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#82460A]">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
</svg>

<span class="group-hover:text-[#82460A]">Post</span>
</router-link>

  <router-link :to="{name:'editprofile'}"  class="flex items-center space-x-2 px-3 py-4 hover:bg-[#B67B46] rounded hover:text-[#82460A]">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#82460A]">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
</svg>
<span class="group-hover:text-[#82460A]">Contact Admin</span>
</router-link>
</nav>
</div>

 <!-- <div class="flex flex-col flex-grow bg-gray-200"></div> -->


<div class="  flex flex-col flex-grow bg-[#ECECEC]">


  <div class="sticky top-0 flex justify-between bg-white  shadow-2xl border-b-2 px-4 sm:justify-end sm:px-6 z-30 ">

 <button class="sm:hidden"  @click="showSidebar=!showSidebar">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
</svg>

 </button>






















 <div class="flex justify-end  pb-4 pt-4">
<div class="relative flex items-center text-gray-400 focus-within:text-gray-600 px-80  ">
<svg xmlns="http://www.w3.org/2000/svg" class="absolute ml-3 h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24"
 stroke="currentColor" stroke-width="2">
 <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>

<input type="text" placeholder="Search Tiktokers" class=" py-2  placeholder-gray-500 bg-gray-100
 text-black pr-3 pl-10  w-56 border-none outline-none border focus:border-[#c08d59] focus:ring-0">
 <div class="h-10 w-[0.25px] bg-gray-300 "></div>
 <ul

        class="
          flex-col

          space-y-4

          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >

        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button type="button"
              @click="show = !show"
              class="
                flex
                items-center

                  bg-gray-100
                text-gray-500


                 pl-1


      h-10

                focus:outline-none

              "
            >
              <span class="mr-2  ">Filtter by</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round"
   d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>

            </button>

            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="
                py-2
                mt-2
                bg-white
                rounded-md
                shadow-xl
                lg:absolute lg:right-0
                w-44
                text-gray-700


              "
            >
              <!-- <button  @click="view=!view"
                to="/"
                class="
                  block
                  px-4
                  py-2

                  text-gray-700

                  hover:bg-gray-100
                "
              >
                Gender
          </button> -->
          <!-- <div v-if="view" class="flex  bg-gray-200 ">
            <label class="inline-flex items-center ml-3 ">
                                                    <input type="radio" @click="byGender" class="form-radio text-two focus:ring-one
                                                    focus:ring-0 h-3 w-3" name="accountType"
                                                        v-model="gender" value="female">
                                                    <span class="ml-2 text-one text-sm ">female</span>
                                                </label>
                                                <label class="inline-flex  items-center ml-6">
                                                    <input type="radio" @click="byGender" class="form-radio text-two focus:ring-one
                                                    focus:ring-0 w-3 h-3" name="accountType"
                                                        v-model="gender" value="male">
                                                    <span class="ml-2 text-one text-sm ">male</span>
                                                </label>
              </div> -->

<!--
              <button @click="genre=!genre"
                class="
                  block
                  px-4
                  py-2

                  hover:bg-gray-100

                "
              >
               Genre
              </button> -->



              <label class="block">

<select  @change="byGender($event)" v-model="gender"
    class="appearance-none form-select block w-36 pl-5 mt-1 focus:outline-none border-none focus:ring-0 focus:border-none
      bg-white text-gray-700 focus:text-one ">
    <option value="0" label="Gender"  disabled selected="selected">Gender </option>
    <option value="Female"> Female</option>
    <option value="Male">Male</option>
    <option value="RatherNotToMention">Other</option>

</select>
</label>

                <label class="block">

                                            <select  @change="filter($event)" v-model="genre"
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






              <button @click=" verifiedTiktokers"
                class="
                  block
                  px-4
                  py-2

                  hover:bg-gray-100

                "
              >
              verifiedInfluencer
              </button>
            </div>
          </div>
        </li>

      </ul>




 </div>



 <button data-tooltip-target="tooltip-animation" type="button"  @click="listPackage"
 class="text-white   focus:outline-none focus:ring-gray-100  text-center py-2.5 pr-2 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
  class="w-6 h-6  fill-one">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></button>
<div id="tooltip-animation" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    ListPackages
    <div class="tooltip-arrow" data-popper-arrow></div>

</div>


<!-- <button data-tooltip-target="tooltip-default" type="button" class="text-white focus:outline-none  focus:ring-gray-100   py-2.5 text-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
  class="w-6 h-6  fill-one">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
  ListPackages
    <div class="tooltip-arrow" data-popper-arrow></div>
</div> -->


<button data-tooltip-target="tooltip-default" type="button" @click="listApplication" class="text-white
  focus:outline-none focus:ring-gray-100    py-2.5 text-center
   "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
  stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-one">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
</button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    ListApplication
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>






<!-- <div class="px-2 items-center p-2"><router-link :to="{name:'shortListPackage'}">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
  class="w-6 h-6  fill-one">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></router-link>

</div> -->


 <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>



<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow
 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">

      <li>
        <router-link :to="{name:'resetpassword'}"  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Password</router-link>
      </li>

     <li>
        <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="logout">Log Out</button>
    </li>

    </ul>

</div>
</div>


  </div>




  <router-view />







</div>


</div>




  </div>
</template>

<script>
     import {ref} from 'vue'
     import UserService from './services/user.service copy'
export default {
    name:'clientprofile',

    data(){
      return{
        profile:'',
        show:false,
        view:false,
        genre:0,
       gender:0,
       content:null,



      }
    },

    setup(){
    const showSidebar=ref(false);
    return{
       showSidebar,

       }

   },
  //  created(){
  //   UserService.getUserProfile().then(
  //     response => {
  //       this.profile = response.data;
  //       console.log(contest)
  //     },
  //     error => {
  //       this.contest =
  //         (error.response && error.response.data && error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       if (error.response && error.response.status === 403) {
  //         EventBus.dispatch("logout");
  //       }
  //     }
  //   );
  // },

  methods:{
    logout(){
      this.$store.dispatch("auth/logout").then(
        this.$router.push("/")
      )
    },
    listApplication(){
      this.$router.push('shortListApplication')
    },
    listPackage(){
      this.$router.push('shortListPackage')
    },
 filter(event){
  const selected=event.target.value
  console.log(selected)

  UserService.getFilteredTiktokersByGenre(selected).then(
    response=>{
      this.content=response.data
      console.log(this.content)
      this.$router.push({ name: 'filteredTiktokers', params: { content: this.content} })
    }
  )



 },
 verifiedTiktokers(){

  UserService.FilterVerifiedTiktokers().then(
    response=>{
      this.content=response.data
      this.$router.push({ name: 'filteredTiktokers', params: { content: this.content} })
    }
  )

 },

    byGender(event){
      console.log('dddddd')
      const data=event.target.value

      UserService.getFilteredTiktokersByGender(data).then(
        (response)=>{
        this.content=response.data
        console.log(this.content)
        this.$router.push({ name: 'filteredTiktokers', params: { content: JSON.stringify(this.content)} })
        })
    }
  },






   }


</script>

<style>

</style>