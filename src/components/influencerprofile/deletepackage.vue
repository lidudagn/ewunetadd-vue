<template>
    <div class="relative">

        <div class="z-0 absolute t-0 l-0 ml-8 mt-8  h-screen w-screen blur-[2px]">
            <fullprofile />

        </div>
        <div class="flex h-screen z-10 absolute w-full justify-center t-0 l-0 ml-6 mt-6 ">
            <div class="m-auto justify-center   p-4 rounded-2xl">
                <div class="p-4 mb-4 text-sm text-one  rounded-lg  bg-[#ECECEC]" role="alert">
                    <span class="font-medium">are you sure!</span> you want to delete
                    <div class="flex space-x-7 w-full justify-center">
                        <button @click="cancel"
                            class=" bg-gradient-to-r from-[#B67B46] to-[#82460A] text-[#ECECEC]  text-sm px-4 py-1 mt-4 rounded">
                            cancel</button>
                        <button @click="deleteme" class="  text-one  border-2  text-sm px-4 py-1 mt-4 rounded">
                            delete </button>

                    </div>

                    <div v-if="error"
                        class="mt-3 bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full"
                        role="alert">

                        {{this.error}}
                    </div>
                    <div v-if="sucess"
                        class=" mt-3 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert">
                        <span class="font-medium">{{this.sucess}}!</span>
                    </div>
                </div>

            </div>
        </div>

    </div>



</template>
<script>
import fullprofile from '../fullprofile.vue';
import { mapGetters, mapActions } from 'vuex';
import api from '../../services/api'
export default {
    components: {
        fullprofile
    },
    data() {
        return {
            id: '',
            sucess: '',
            error: ''
        }
    },

    methods: {
        ...mapActions(["fetchpackages", "deletepackage"]),
        cancel() {
            this.$router.push("/influencer/fullprofile")
        },
        deleteme() {
            try {
                this.id = this.$route.query.id
                const response = api.delete(`v1/package/deleteOnePackage?id=${this.id}`).then(response => {
                    if (response.status == 200) {
                        this.sucess = 'sucessfully deleted'
                        setTimeout(() => this.$router.push('/influencer/fullprofile'), 1000);
                    }
                });
            }
            catch (error) {
                console.log(error)
                this.error = 'an error occured while deleting this package'
            }
        },


    },


}
</script>