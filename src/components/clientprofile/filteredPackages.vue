<template>



<div class="flex gap-x-20"  v-for="content in contents.influencer " :key="content.id"  >
 <div class="items-center   "  >

                <div class=" container mx-auto md:pl-96 pl-4 pt-20">

<div class='' style='background-color:rgb(245 245 245)'>
    <div class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0"
        style="cursor: auto;">

        <a href="https://stackdiary.com/" class="group">

            <div class="aspect-w-3 aspect-h-2">

                <img class="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                    src="../assets/Avater3.png" alt="Featured Photo" style="cursor: auto;">

            </div>

        </a>

        <div class="sm:col-span-2 " style="cursor: auto;">


            <div class="mt-2 " style="cursor: auto;">




                    <h4 class="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary"
                        style="cursor: auto;">
                   {{content.packages.package_name}}
                         package_name

                  </h4>














                <p class="mt-1 text-sm font-normal text-skin-base leading-5" style="cursor: auto;">
                  <!-- Go to this step by
                            step guideline
                            process on how to certify for your weekly benefits:

                            Go to this step by
                            step guideline
                            process on how to certify for your weekly benefits: -->


                      {{content.packages.package_des}}

                   </p>




                <div class="mt-3 flex items-center font-sans pt-10" style="cursor: auto;">

                    <div class="shrink-0">





                            <img class="h-10 w-10 rounded-full " src="../assets/Avater3.png" alt=""
                                style="cursor: auto;">



                    </div>

                    <div class="">

                        <p class="text-sm ">
                          <!-- query:{id:content.packages.id} -->

                            <router-link :to="{name:'influencerProfileFromClient' ,query:{id:content.id} }"
                           class="hover:underline text-gray-700" style="cursor: auto;">



                   {{content.f_name}}  {{content.l_name}}
                            </router-link> </p>





                        <div class="flex md:space-x-96  text-sm text-skin-muted" style="cursor: auto;">

                            <time datetime="2022-02-01" style="cursor: auto;" class="pt-3 pl-6 text-one">
         <!-- {{content.createdAt}} -->
      {{content.packages.package_price}}  {{content.packages.currency}}

                          </time>

                          <div class="pt-6"><button class="focus:bg-one">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>




</button> </div>




                        </div></div>

                </div>

            </div>

        </div>

    </div>
</div>
</div></div>







</div>

</template>

<script>
import UserService from '../../services/user.service copy';
export default {
    data(){
        return{
            contents:[]
        }
    },
   created(){
    this.contents=JSON.parse(this.$route.params.content)
console.log(this.contents.influencer.packages)}



}
</script>

<style>

</style>