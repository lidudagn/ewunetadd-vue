<template>
    <!-- <div class="">
        <div v-motion-roll-left class=" bg-green-700 text-gray-300 px-40 py-10">Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem, nulla nobis aliquam a fugit voluptatum ut dolorum. Neque, voluptate. Magni
            eveniet nihil veritatis delectus dignissimos officiis mollitia laborum perspiciatis dolores.</div>
        <div v-motion-roll-right class=" bg-blue-300 text-gray-500 px-40 ">Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aliquam voluptas facilis ea veniam eius officia expedita dolores, optio quos. Hic quod
            deleniti quam beatae eveniet mollitia, inventore qui maiores vel!</div>

    </div> -->

    <div class="h-screen overflow-y-auto ">
        <div v-motion-roll-left class="w-full justify-start ">
            <div class='pr-40 pl-10   py-10'>
                <div class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 bg-white shadow-xl px-30 "
                    style="cursor: auto;">

                    <a class="group">

                        <div class="aspect-w-3 aspect-h-2">

                            <img class="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                                src="../assets/logo3.jpg" alt="Featured Photo" style="cursor: auto;">

                        </div>

                    </a>

                    <div class="sm:col-span-2" style="cursor: auto;">

                        <div class="flex items-center space-x-3" style="cursor: auto;">




                        </div>

                        <div class="mt-2" style="cursor: auto;">

                            <a href="https://laravel.cm/articles/traquer-un-champ-validation-conditionelle-react-hook-form-5"
                                class="group">

                                <h4 class="text-one text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary"
                                    style="cursor: auto;">{{ contest.title }}</h4>

                            </a>

                            <p class="mt-1 text-sm text-gray-400 font-poppins text-skin-base leading-5"
                                style="cursor: auto;">
                                {{ contest.description }}
                            </p>

                            <div class="flex items-center font-sans bg" style="cursor: auto;">

                                <div class="shrink-0 mt-4   ">

                                    <a href="#">

                                        <span class="sr-only">eva decor</span>

                                        <img class="h-10 w-10 rounded-full" src="../assets/logo1.jpg" alt=""
                                            style="cursor: auto;">

                                    </a>

                                </div>

                                <div class="ml-3">

                                    <p class="text-sm text-gray-400 font-poppins mt-4 text-skin-inverted">

                                        <a href="#" class="hover:underline" style="cursor: auto;">
                                            {{client.f_name}} {{client.l_name}}
                                        </a>

                                    </p>

                                    <div class=" text-sm text-skin-muted" style="cursor: auto;">

                                        <time class="text-gray-400 font-poppins" datetime='01-02-2022'
                                            style="cursor: auto;">post:
                                            {{contest.createdAt}}</time>




                                    </div>
                                    <div class="text-gray-400 font-poppins" style="cursor: auto;">
                                        deadline: {{contest.deadline}}</div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
        <div v-motion-roll-right class="pl-44 pr-12 pb-10 ">
            <div class="relative group  ">
                <div
                    class=" absolute -inset-1   bg-gradient-to-r from-gray-300 to-white  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                </div>
                <div
                    class="w-full relative px-7 py-6 bg-[#ECECEC] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div class="flex justify-center w-full">


                        <div class=" p-6  hover-trigger bg-transparent  w-full  ">



                            <p
                                class="mb-3 font-normal text-[15px]  text-sm text-gray-500 dark:text-gray-400 font-poppins">
                                {{oneapp.description}}

                            </p>

                            <div class="inline-flex items-center text-one hover:underline ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                                {{oneapp.price}}
                                <span class=" text-[15px] lowercase">{{oneapp.currency}}</span>
                            </div>
                            <div class="flex w-full justify-end ">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/api'
export default {
    data() {
        return {
            oneapp: {},
            contest: {},
            client: {},
            id: ''
        }
    },
    created() {
        this.id = this.$route.query.id
        api.get(`v1/contestApplication/readOneApplications?applicationId=${this.id}`)
            .then(response => {

                this.oneapp = response.data.contestApplicationRead
                this.contest = response.data.contestApplicationRead.application
                this.client = response.data.contestApplicationRead.application.contests
                console.log(response.data)
            })
            .catch(e => {
                // this.$router.push('/error')
                console.log(e)

            });
    }

}
</script>

<style>

</style>