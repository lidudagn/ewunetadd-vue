<template>
  <div class=" md:overflow-y-auto md:w-full w-80 md:flex justify-center md:justify-center  px-4 pt-8 ">
<div class="border-solid border-1 border-one bg-gray-100  pl-7 pr-8">


<div class=" md:flex md:space-x-12">
<div>
<div class=" px-6   ">
<router-link :to="{name:'updateprofile2'}" class=" ">
<img src="../assets/clientphoto.png" alt="photo"
class=" mt-4  h-44 w-44  pl-0  rounded-full  border-one  "> <p class="md:px-12 px-5 text-[#82460A]">User Name</p></router-link>

</div>

<div class="flex pt-3">
<router-link :to="{name:'updateprofile2'}" class="flex ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-one">
<path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
<path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
</svg>
<span class="text-one">Edit profile</span>
</router-link>


<router-link :to="{name:'contest'}" class="flex px-6  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-one">
<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
</svg>
<span class="text-one">Add contest</span>
</router-link>
</div></div>
<br/>
<hr/>
<!-- <div class="h-10 w-[0.25px] bg-gray-800 "></div> -->
<div class="space-y-4 pt-12">


<div class="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-gray-400">
<path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
</svg>


<p class="text-gray-400">Lives in &nbsp; <span class=" text-two">
{{client.profile.city}},{{client.profile.country}}
</span> </p></div>

<div class="flex space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-gray-400">
<path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
</svg>


<p class="text-gray-400">Gender  &nbsp; <span class=" text-two">
{{client.profile.gender}}


</span></p></div>



<div class="flex space-x-2">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-gray-400">
<path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
<path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
</svg>


<p class="text-gray-400">Date of Birth &nbsp; <span class=" text-two">
{{client.profile.year}}
</span> </p></div>
<div  class="flex space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-gray-400">
<path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
</svg>


<span>
    <p class="text-gray-400">Contest</p>
   </span>
   &nbsp;
<span class="px-10">
   <div class="w-12 h-8  rounded-full border-2 border-two flex justify-center items-center">
   <p class=" text-two">123</p>

</div></span>
</div>






</div>






</div></div></div>
<div class=" md:grid grid-cols-2 gap-8 gap-y-2 mr-10 md:ml-24 md:px-80 pt-10"  >


<div
class=" w-64 mb-16   " v-for="content in contents.contestRead" :key="content.id"   >




    <div
                    class="p-6 max-w-sm bg-gray-100   min-w-[300px]
                     border-[0.5px] ">

                    <a href="#">
                        <h5 class="mb-2 text-xl font-semibold tracking-tight  ">
                          {{content.title}}

                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-poppins">
                      {{content.description}}

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
                      <router-link :to="{name:'updatecontest' , query:{id:content.id}}">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-one">
<path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
<path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
</svg>
</router-link>

<router-link :to="{name:'editprofile', query:{id:content.id} }">


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
import UserService from '../../services/user.service copy';
export default {
data(){
    return{
        client:'',
        contents:'',



    }
},

created() {


UserService.getUserContest().then(
response => {

this.contents = response.data;



},
error => {
this.contents =
  (error.response && error.response.data && error.response.data.message) ||
  error.message ||
  error.toString();

if (error.response && error.response.status === 403) {
  EventBus.dispatch("logout");
}
}
);


UserService.getUserProfile().then(
response => {
this.client = response.data;
console.log(contest)
},
error => {
this.client =
  (error.response && error.response.data && error.response.data.message) ||
  error.message ||
  error.toString();

if (error.response && error.response.status === 403) {
  EventBus.dispatch("logout");
}
}
);
}

}
</script>

<style>

</style>