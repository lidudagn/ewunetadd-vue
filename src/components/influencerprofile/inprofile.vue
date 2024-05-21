<template>
    <div v-for="pro in fullprofile" :key="pro"
        class="md:h-screen  md:overflow-y-hidden  w-full md:flex block justify-center md:justify-start  ">

        <div class=" font-poppins  m-4">
            <div class="  n">
                <img src="../../assets/kebb.jpg" class="w-48 rounded-full h-48 ml-4  justify-center " />

                <div class="w-60">


                    <div class="mt-4 mb-2">

                        <div class="mb-4 ">


                            <div class="flex space-x-10 font-poppins justify-center mt-4 ">


                                <div class="text-start flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class=" w-6 h-6   text-one">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                    </svg>
                                    <label class="text-start text-one text-sm ">{{ pro.follower }}</label>

                                </div>

                                <div class="text-start flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5  text-one">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <label class="text-start text-one text-sm">{{ pro.likes }}</label>
                                </div>

                            </div>


                        </div>
                        <hr />
                    </div>

                    <div class="  justify-start  text-one">
                        <label class=" text-xl font-semibold mt-24 text-one  font-poppins">
                            {{ pro.f_name }}
                            {{ pro.l_name }}

                        </label><br />
                        <small class="text-[10px] text-one">
                            {{ pro.bio }}
                        </small> <br />
                        <label class="text-sm font-poppins  font-extralight ">
                            {{ pro.short_description }}
                            jhhl
                        </label>
                    </div>
                    <div class="flex  justify-start  mt-3">


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-4 h-4 text-one">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-4 h-4 text-one">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-4 h-4 text-one">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-4 h-4 text-one">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 text-one">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg><br />


                    </div>

                    <div class="flex  justify-start  ">
                        <small class="text-[#d2cbcbea] text-center justify-center font-poppins text-sm">rating &nbsp;
                            1,537</small>
                    </div>



                    <div class="w-full   flex justify-center mt-3">
                        <router-link to="/influencer/editprofie"
                            class=" text-center flex bg-gradient-to-r from-[#B67B46] text-normal text-sm to-[#82460A] p-3 w-full justify-center text-[#ECECEC]  rounded-2xl">
                            edit
                            my profile
                        </router-link>
                    </div>

                    <button
                        class="mt-7 flex space-x-2 items-center  p-3 w-full justify-center text-one bg-[#ECECEC]  rounded-2xl">
                        <img src="../../assets/tik-tok.png" class="w-5 h-5 text-sm" />

                        <span class="text-sm">
                            my account
                        </span>
                    </button>

                </div>

                <router-view />

            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'inprofile',
    data() {
        return {
            profiless: this.fullprofile,
            lid: 123
        }
    },
    methods: {
        ...mapActions(["fetchprofile"]),

    },
    computed: mapGetters(["fullprofile"]),
    created() {
        this.fetchprofile()


    }

}
</script>

<style>

</style>