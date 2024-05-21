<template>
     <div class=" md:grid grid-cols-2 gap-96 gap-y-2 mr-10 ml-10   md:px-80 pt-10"  >

<div
    class=" w-96 mb-16   "   >


        <div
                        class="p-2 max-w-sm bg-gray-100   min-w-[300px]
                         border-[0.5px] ">
                         <div class="flex justify-end">

                         <router-link :to="{name:'editprofile' }" class="">


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-one">
  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
</svg>

</router-link></div>

<div class="flex">
  <img class="h-9 w-9 rounded-full" src="../assets/Avater3.png" alt=""
                                style="cursor: auto;">
<router-link :to="{name:'influencerProfileFromClient'}" class=" text-one hover:underline pt-1 pl-2">
    InfluencerName,

</router-link> &nbsp;

<p class=" pt-1">Applied </p>&nbsp;

<p class="pt-1"> to your</p>

&nbsp;
<router-link :to="{name:'influencerProfileFromClient'}" class="text-two hover:underline pt-1 ">
contest
</router-link></div>
<div class="flex pt-3">

<p class="text-gray-400">Description:</p>&nbsp;
<p class="text-sm pt-1">hgbjgyutfrdxcgbhjkhu cgffygjh fdxserdxf cfdrtgf cdrtf</p>
</div>






                    </div>
                    <div class="  min-w-[300px] h-[0.25px] bg-one "></div>
                    <div class="min-w-[300px] h-7 bg-gray-100 pt-1">
                        <div class="flex gap-x-32 ">

                            <p class="text-sm text-gray-400">12-23-2022</p>



    <p  class="text-sm underline text-one">10,000ETB</p>








</div>


                    </div>



</div>

</div>


</template>



<script>
    import userService from '../../services/user.service copy';
export default {
    data(){
        return{
            content:null,

        }
    },

    // created(){
    //     userService.getShortListApplication.then(
    //         response=>{
    //             this.content=response.data
    //         }
    //     )

    // }

}
</script>

<style>

</style>