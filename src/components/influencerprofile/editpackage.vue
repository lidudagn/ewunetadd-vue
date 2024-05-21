<template>
    <div class="relative">

        <div class="z-0 absolute t-0 l-0 ml-8 mt-8  h-screen w-screen blur-[2px]">
            <fullprofile />

        </div>

        <div class="flex h-screen z-10 absolute w-full justify-center t-0 l-0 ml-6 mt-6 ">
            <div class="m-auto justify-center  w-96 bg-[#ECECEC] p-4 rounded-2xl">
                <form @submit.prevent="handlesave">
                    <div class="w-full text-center "> <label class=" text-center text-xl font-semibold text-one">Enter
                            your
                            Package
                        </label></div>

                    <label class="text-one text- font-extralight ml-4">package name</label>
                    <div class="w-full flex justify-center mb-4">

                        <input v-model="onepackage.package_name" type="text" class="w-80 py-2 placeholder-slate-300 text-slate-600 relative  bg-white rounded
 text-sm border border-slate-300 outline-none
focus:outline-none focus:border-[#c08d59]  px-3 " placeholder="package name" />
                    </div>
                    <label class="text-one text- font-extralight ml-4">package</label>
                    <div class="w-full flex justify-center mb-4"> <textarea v-model="onepackage.package_des" class=" h-28 w-80 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded
 text-sm border border-slate-300 outline-none
focus:outline-none focus:border-[#c08d59]  px-3 " placeholder="package"></textarea></div>

                    <label class="text-one text- font-extralight ml-4">
                        package price
                    </label>

                    <div class="w-full  flex ml-4 space-x-4 ">
                        <input v-model=" onepackage.package_price" type="text" class="w-44 py-2 placeholder-slate-300 text-slate-600
                     relative bg-white rounded
 text-sm border border-slate-300 outline-none
focus:outline-none focus:border-[#c08d59]  px-3 " placeholder="package price" />
                        <div class="">
                            <small class="text-one">currency</small>
                            <select @change="selectCategory($event)" v-model="onepackage.currency"
                                class=" bg-white form-select block w-full mt-1 bg-[#ECECEC]">
                                <option value="ETB">ETB</option>
                                <option value="USD($)"> USD($)</option>
                                <option value="EURO"> EURO</option>
                                <option value="POUND"> POUND</option>

                            </select>
                        </div>


                    </div>


                    <div class="w-full  flex justify-center ">
                        <button type="submit"
                            class="
                    bg-gradient-to-r from-[#B67B46] to-[#82460A]  py-2 px-20 my-4 items-cente  text-white p-1 rounded-xl">
                            save</button>


                    </div>
                    <div v-if="error"
                        class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full"
                        role="alert">

                        {{this.error}}
                    </div>
                    <div v-if="sucess"
                        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert">
                        <span class="font-medium">{{this.sucess}}!</span>
                    </div>
                </form>
                <!-- <button @click="INCREMENT_COUNT(false)">Increment {{ this.count }} </button>
                        <button @click="INCREMENT (true)">descriment{{ this.count }} </button> -->
            </div>

        </div>

    </div>



</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
import fullprofile from '../fullprofile.vue';
import api from '../../services/api'

export default {
    components: { fullprofile },
    data() {
        return {

            id: '',
            error: '',
            sucess: '',
            onepackage: ''

        }
    },
    computed: {

        ...mapGetters({
            loads: 'loads', onepackage: 'onepackage', count: 'count'

        }
        ),


    },

    methods: {
        ...mapMutations(['INCREMENT_COUNT']),

        ...mapActions(['fetchpackage', 'updatepackage', 'INCREMENT']),
        async handlesave(event) {

            event.preventDefault();
            const pack = {
                package_name: this.onepackage.package_name,
                package_price: this.onepackage.package_price,
                package_des: this.onepackage.package_des,
                currency: this.onepackage.currency

            }
            const id = this.onepackage.id


            try {

                const response = await api.put(`v1/package/update?id=${id}`, pack)

                if (response.status == 200) {


                    this.sucess = response.data.msg

                    setTimeout(() => this.$router.push('/influencer/fullprofile'), 1000);

                }
                else {

                    this.sucess = response.data.msg

                }

            }
            catch (error) {
                console.log(error,)
                this.error = 'please enter the correct information'
            }
        },
        selectCategory(event) {
            console.log(event.target.value);
            this.currency = event.target.value
        },

    },
    created() {

        this.id = this.$route.query.id
        api.get(`v1/package/readOnePackage?packageId=${this.id}`)
            .then(response => {

                this.onepackage = response.data.readPackage


            })
            .catch(e => {
                this.$router.push('/error')


            });


    },
}
</script>

<style>

</style>