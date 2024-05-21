<template>
    <div class=" h-screen overflow-y-auto  ">
        <contestheader />

        <div v-for="cont in contests" :key="cont.id" class="container mx-auto px-20">

            <div v-motion-roll-visible-once-bottom class=''>
                <div class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 bg-white shadow-xl px-30 "
                    style="cursor: auto;">

                    <a href="https://stackdiary.com/" class="group">

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
                                    style="cursor: auto;">{{ cont.title }}</h4>

                            </a>

                            <p class="mt-1 text-sm text-gray-400 font-poppins text-skin-base leading-5"
                                style="cursor: auto;">
                                {{ cont.description }}
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
                                            {{cont.contests.f_name}} {{cont.contests.l_name}}
                                        </a>

                                    </p>

                                    <div class="flex space-x-1 text-sm text-skin-muted text-skin-base"
                                        style="cursor: auto;">

                                        <!-- <time class="text-gray-400 font-poppins" datetime='01-02-2022'
                                            style="cursor: auto;">post:
                                            {{cont.createdAt}}</time>

                                        <span aria-hidden="true">·</span>

                                        <span class="text-gray-400 font-poppins" style="cursor: auto;">
                                            deadline: {{cont.deadline}}</span> -->
                                        <p class="text-sm text-gray-400 font-poppins mt-4 text-skin-inverted">

                                            <time href="#" class="hover:underline" style="cursor: auto;">
                                                post:
                                                {{cont.createdAt}} &nbsp;&nbsp; deadline: {{cont.deadline}}
                                            </time>

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="flex w-full  mt-4 justify-end">
                            <router-link :to="{name:'contestapp' , query:{id:cont.id}}" class="items-center mt-4
                    bg-gradient-to-r from-[#B67B46] to-[#82460A]   px-8 py-2    text-white  rounded-xl">
                                apply </router-link>

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
            contests: [],
            client: ''
        }
    },
    components: {
        contestheader
    },



    created() {
        api.get('v1/contest/allcontests')
            .then(response => {

                this.contests = response.data.contests
                this.client = response

                console.log(response.data)
            })
            .catch(e => {
                // this.$router.push('/error')


            });
    }

}
</script>

<style>
li>ul {
    transform: translatex(100%) scale(0)
}

li:hover>ul {
    transform: translatex(101%) scale(1)
}

li>button svg {
    transform: rotate(-90deg)
}

li:hover>button svg {
    transform: rotate(-270deg)
}


.group:hover .group-hover\:scale-100 {
    transform: scale(1)
}

.group:hover .group-hover\:-rotate-180 {
    transform: rotate(180deg)
}

.scale-0 {
    transform: scale(0)
}

.min-w-32 {
    min-width: 8rem
}

.container {
    margin-top: 5rem;
    max-width: 50%;
}

.space-y-4 {
    padding: 25px;
}
</style>