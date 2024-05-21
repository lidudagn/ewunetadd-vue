<template>

    <div class="md:h-screen overflow-y-auto md:p-6 ">
        <div class="md:grid md:grid-cols-2 gap-7 mt-7 md:px-0  ">
            <div v-for="po in packages" :key="po" v-motion-pop-visible
                class=" md:px-6 md:w-[350px] w-60 p-6 mb-10 md:mb-0 hover-trigger bg-transparent rounded-lg   shadow-md   border-[0.5px] border-one border-opacity-30">

                <div class="flex md:space-x-40  space-x-28">
                    <div class=""><svg class="mb-2 w-10 h-10 text-one" aria-hidden="true" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                clip-rule="evenodd"></path>
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg></div>

                    <div class=". ">
                        <div class="  flex  ">
                            <router-link :to="{ name: 'editpackage', query: { id: po.id } }" class=""> <svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-one ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </router-link>


                            <router-link :to="{ name: 'deletepackage', query: { id: po.id } }">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-one  ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </router-link>

                        </div>
                    </div>

                </div>

                <a href="#">
                    <h5 class="mb-2  font-semibold tracking-tight  text-one">{{ po.package_name }}
                    </h5>
                </a>


                <p class="mb-3 font-normal text-[15px]  text-sm text-gray-500 dark:text-gray-400 font-poppins">
                    {{ po.package_des }}

                </p>

                <div class="inline-flex items-center text-one hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                    {{ po.package_price }}
                    <span class=" text-[15px] lowercase">{{ po.currency }}</span>
                </div>

            </div>
            <div
                class=" p-6 md:px-0 px-6  md:w-[350px] w-60 mb-12 bg-white bg-transparent rounded-lg  justify-center shadow-md  border-[0.5px] border-one border-opacity-30">
                <div class="">
                    <router-link to="/newPackage" class="flex flex-col justify-center items-center mt-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-10 h-10 text-one">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import api from '../../services/api'
export default {
    data() {
        return {
            packages: [],
            error: ''
        }
    },
    created() {
        api.get('v1/package/readMyPackage')
            .then(response => {

                this.packages = response.data.readPackage

                console.log(response.data)
            })
            .catch(e => {
                // this.$router.push('/error')


            });
    }


}
</script>

<style>
.hover-trigger .hover-target {
    display: none;
}

.hover-trigger:hover .hover-target {
    display: block;
}
</style>