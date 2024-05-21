<template>
<div class=" md:grid grid-cols-2 gap-36 gap-y-2 mr-10 md:ml-24 md:px-80 pt-10"  >


<div
class=" w-96 mb-16   " v-for="content in contents.shortListRead"  :key="content.id"   >



    <div
                    class="p-2 max-w-sm bg-gray-100   min-w-[300px]
                     border-[0.5px] ">
                     <div class="flex gap-x-64">
                <div class="flex">
                      <img src="../assets/Avater3.png" class="rounded-full h-9 w-9">
                      <router-link :to="{name:'userprofile'}" class="hover:underline text-one pl-2">
                       {{content.package.packages.f_name}}&nbsp;{{content.package.packages.l_name}}
                      </router-link></div>



                    </div>
                    <div class="w-[3000px] max-w-sm h-[0.25px] bg-gray-200 pr-10  mt-1"></div>



                        <h5 class="mb-2 text-xl font-semibold tracking-tight pt-3  ">
                          {{ content.package.package_name}}

                        </h5>

                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 font-poppins">
                    {{ content.package.package_des}}

                    </p>
                    <a href="#" class="inline-flex items-center text-one hover:underline">


                         {{content.package.package_price}}{{content.package.currency}}


                    </a>

                </div>
                <div class="  min-w-[300px] h-[0.25px] bg-gray-200 "></div>
                <div class="min-w-[300px] h-7 bg-gray-100 pt-1">
                    <div class="flex gap-x-72">


                        <p class="text-sm text-gray-400 ">12-23-2022</p>
                        <div>
                            <button  @click="delete(content.id)" >
                            <svg xmlns="http://www.w3.org/2000/svg"  @click="deleteOneShortListPackage(content.id)" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-one">
  <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
</svg></button>

                        </div>

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
            contents:[],
            fill:true

        }
    },
    created(){
        UserService.getShortListPackage().then(
            response=>{
                this.contents=response.data
                console.log(this.contents.shortListRead)
            }
        )


    },
    methods:{

        deleteOneShortListPackage(id){
            console.log('scghv')

            UserService.deleteOneShortListPackage(id).then(

            )
        }
    }

}
</script>

<style>

</style>