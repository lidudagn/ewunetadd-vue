<template>
    <!-- v-for="pro in fullprofile" :key="pro"  -->
    <button @click="action" class=" text-sm md:hidden block mt-2   border-l border-[0.25px]  ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 text-one">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

    </button>
    <div class="flex">
        <div v-for="pro in fullprofile" :key="pro" class="text-3xl  ">

            <aside class=" " aria-label="Sidebar">

                <div v-if="onof==true" class=" md:hidden  pr-3  h-screen  shadow ">

                    <div class="w-full ">
                        <div class=" w-full     justify-start ">
                            <Disclosure v-slot="{ open }">
                                <DisclosureButton
                                    class="flex w-full   rounded-lg  py-2 text-left text-sm font-medium text-[#bcbbbb]  justify-center focus:outline-none ">
                                    <div class="flex justify-center">
                                        <div class="relative w-12 h-12 rounded-full">
                                            <img class="rounded-full shadow-sm w-10 h-10" src="../../assets/kebb.jpg"
                                                alt="user image" />

                                        </div>
                                        <span
                                            class="text-[#a89e9e] text-center text-[12px]   font-poppins font-extralight pt-2 ">{{pro.f_name}}
                                        </span> &nbsp;
                                    </div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>


                                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class=" text-onen" />
                                </DisclosureButton>
                                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <div
                                        class="flex space-x-2 bg-[#ECECEC] text-one h-10 justify-center p-2 rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4  text-one">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>

                                        <router-link to="/fullprofile"
                                            class="focus:outline-none focus:border-[#c08d59] text-[12px]  text-one visible font-poppins ">
                                            edit profile
                                        </router-link>
                                    </div>

                                    <vr />

                                </DisclosurePanel>
                            </Disclosure>

                        </div>
                        <hr />
                    </div>
                    <ul class="space-y-2 mt-2">
                        <li>
                            <a href="#"
                                class="flex items-center h-10 pl-4 pt-1 text-base font-normal rounded-lg   hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-4 h-4 ">
                                    <path fill-rule="evenodd"
                                        d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                                        clip-rule="evenodd" />
                                    <path fill-rule="evenodd"
                                        d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                                        clip-rule="evenodd" />
                                </svg>



                                <router-link to="/dashbord"
                                    class="flex-1 ml-3 whitespace-nowrap text-[12px]   focus:outline-none focus:border-[#c08d59]">
                                    Dashbord
                                </router-link>

                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center pl-4 pt-1 text-base  font-normal h-10 rounded-lg  hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                </svg>

                                <router-link to='/allcontest'
                                    class="flex-1 ml-3 whitespace-nowrap text-[12px]   focus:outline-none focus:border-[#c08d59]">
                                    Contest
                                </router-link>

                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center pl-4 pt-1 text-base  font-normal h-10 rounded-lg  hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                </svg>

                                <router-link to='/contestapplications'
                                    class="flex-1 ml-3 whitespace-nowrap text-[12px]   focus:outline-none focus:border-[#c08d59]">
                                    Contest
                                </router-link>

                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center pl-4 pt-1 text-base font-normal  rounded-lg hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3  ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>



                                <router-link to="/chat"
                                    class="text-[12px] focus:outline-none pl-3 focus:border-[#c08d59] text-[#bcbbbb]   hover:text-one visible font-poppins ">
                                    Inbox
                                </router-link>
                                <span
                                    class="inline-flex justify-center items-center p-2 ml-3 w-3 h-3 text-sm font-medium  rounded-full bg-[#bcbbbb] text-[12px] text-one">3</span>
                            </a>
                        </li>

                        <li>

                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center h-10 pl-4 pt-1 text-base font-normal  rounded-lg   hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>



                                <router-link to="/signout"
                                    class="focus:outline-none text-[12px] pl-3 focus:border-[#c08d59] text-[#bcbbbb]   hover:text-one visible font-poppins ">
                                    Log Out
                                </router-link>
                            </a>
                        </li>



                    </ul>
                </div>
                <div class=" py-4 pr-3  md:h-screen h-full shadow pt-10 hidden md:block">

                    <div class="w-full  ">
                        <div class=" w-full     justify-start ">
                            <Disclosure v-slot="{ open }">
                                <DisclosureButton
                                    class="flex w-full   rounded-lg  py-2 text-left text-sm font-medium text-[#bcbbbb]  justify-center focus:outline-none ">
                                    <div class="flex justify-center">
                                        <div class="relative w-12 h-12 rounded-full">
                                            <img class="rounded-full shadow-sm w-10 h-10" src="../../assets/kebb.jpg"
                                                alt="user image" />

                                        </div>
                                        <span
                                            class="text-[#a89e9e] text-center   font-poppins font-extralight pt-2 ">{{pro.f_name}}
                                            {{pro.l_name}}
                                        </span> &nbsp;
                                    </div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>


                                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class=" text-onen" />
                                </DisclosureButton>
                                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <div
                                        class="flex space-x-2 bg-[#ECECEC] text-one h-10 justify-center p-2 rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5  text-one">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>

                                        <router-link to="influencer/fullprofile"
                                            class="focus:outline-none focus:border-[#c08d59]   text-one visible font-poppins ">
                                            edit profile
                                        </router-link>
                                    </div>

                                    <vr />

                                </DisclosurePanel>
                            </Disclosure>

                        </div>
                        <hr />
                    </div>
                    <ul class="space-y-2 mt-2">
                        <li>
                            <a href="#"
                                class="flex items-center h-10 pl-4 pt-1 text-base font-normal rounded-lg   hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 ">
                                    <path fill-rule="evenodd"
                                        d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                                        clip-rule="evenodd" />
                                    <path fill-rule="evenodd"
                                        d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                                        clip-rule="evenodd" />
                                </svg>



                                <router-link to="/dashbord"
                                    class="flex-1 ml-3 whitespace-nowrap   focus:outline-none focus:border-[#c08d59]">
                                    Dashbord
                                </router-link>

                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center pl-4 pt-1 text-base  font-normal h-10 rounded-lg  hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                </svg>

                                <router-link to='/allcontest'
                                    class="flex-1 ml-3 whitespace-nowrap   focus:outline-none focus:border-[#c08d59]">
                                    Contest
                                </router-link>

                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center pl-4 pt-1 text-base font-normal h-10 rounded-lg hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5  ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>



                                <router-link to="/chat"
                                    class="focus:outline-none focus:border-[#c08d59] text-[#bcbbbb]   hover:text-one visible font-poppins ">
                                    Inbox
                                </router-link>
                                <span
                                    class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium  rounded-full bg-[#bcbbbb] text-one">3</span>
                            </a>
                        </li>

                        <li>

                        </li>
                        <li>
                            <div
                                class="flex items-center h-10 pl-4 pt-1 text-base font-normal  rounded-lg   hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>



                                <router-link to='/contestapplications'
                                    class="focus:outline-none focus:border-[#c08d59] text-[#bcbbbb]   hover:text-one visible font-poppins ">
                                    applications
                                </router-link>

                            </div>
                            <a href="#"
                                class="flex items-center h-10 pl-4 pt-1 text-base font-normal  rounded-lg   hover:bg-[#bcbbbb] text-[#bcbbbb] hover:text-one">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>



                                <router-link to="/influencer/apps"
                                    class="focus:outline-none focus:border-[#c08d59] text-[#bcbbbb]   hover:text-one visible font-poppins ">
                                    Log Out
                                </router-link>
                            </a>
                        </li>


                    </ul>
                </div>
            </aside>

        </div>


    </div>

</template>

<script>
import {
    Menu,
    MenuButton,
    MenuItems, MenuItem, Disclosure,
    DisclosureButton, DisclosurePanel
} from '@headlessui/vue'
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            onof: false
        }
    },
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    },
    methods: {
        ...mapActions(["fetchprofile"]),
        action() {
            console.log(this.onof)
            return this.onof = !this.onof

        }
    },
    computed: mapGetters(["fullprofile"]),
    created() {
        this.fetchprofile()


    }
}
</script>

<style>

</style>
