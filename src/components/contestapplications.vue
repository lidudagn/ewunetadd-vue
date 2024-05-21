<template>
    <div class="h-screen overflow-y-auto">

        <div v-for="con in applications" :key="con" class="flex justify-center ">
            <div v-motion-roll-visible-bottom class=" w-full px-40 py-10 ">
                <div class="relative group ">
                    <div
                        class=" absolute -inset-1   bg-gradient-to-r from-gray-300 to-white  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="w-full relative px-7 py-6 bg-[#ECECEC] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <div class="flex justify-center w-full">


                            <div class=" p-6  hover-trigger bg-transparent  w-full  ">

                                <a href="#">
                                    <h5 class="mb-2  font-semibold tracking-tight  text-one">
                                        {{con.application.contests.f_name}}
                                        {{con.application.contests.l_name}}
                                    </h5>
                                </a>


                                <p
                                    class="mb-3 font-normal text-[15px]  text-sm text-gray-500 dark:text-gray-400 font-poppins">
                                    {{con.description}}

                                </p>

                                <div class="inline-flex items-center text-one hover:underline ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                    {{con.price}}
                                    <span class=" text-[15px] lowercase">{{con.currency}}</span>
                                </div>
                                <div class="flex w-full justify-end ">
                                    <router-link :to="{name:'oneconapp' , query:{id:con.id}}" class="items-center mt-4
                    bg-gradient-to-r from-[#B67B46] to-[#82460A]   px-8 py-2    text-white  rounded-xl">seeMore
                                    </router-link>
                                    <!-- :to="{name:'deletepackage' , query:{id:po.id}} -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
import contestheader from './contestheader.vue';

import api from '../services/api'
export default {
    data() {
        return {
            applications: []
        }
    },
    components: {
        contestheader
    },
    methods: {


    },

    created() {
        api.get('v1/contestApplication/readMyApplications')
            .then(response => {

                this.applications = response.data.contestApplicationRead

                console.log(response.data)
            })
            .catch(e => {
                this.$router.push('/error')


            });
    }

}
</script>
    
<style>

</style>