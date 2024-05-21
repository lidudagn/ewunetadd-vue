

<template>
    <div class=" z-50 flex h-screen w-screen  absolute justify-center  backdrop-blur-[2px] bg-[#ECECEC] ">
        <div class="h-screen flex flex-col justify-center ">


            <img src="../assets/load (2).gif" />
            <div> <br />


            </div>


        </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import axios from 'axios';
// import router from '../router';
import influncerToken from '../services/influncerToken';
export default {
    data() {
        return {
            code: this.$route.query
        }
    },

    computed: {
        ...mapGetters(["allstatus"]),


    },
    methods: {
        ...mapActions(["tiktoker"]),

        async tiktoker() {

            await axios.post('http://ewenetad.mirchaye.info/api/v1/influencer/influencerSignInAuth', this.code)
                .then((response) => {

                    if (response.data) {
                        influncerToken.setUser(response.data.payload);


                        // console.log(alltoken)
                        if (response.status == 201) {
                            this.$router.push("/influencerform")

                        }
                        else {
                            this.$router.push("/influencer")
                        }
                    }

                    // return response.data;
                });

        },

    },



    created() {
        this.allstatus.code = this.code.code
        console.log(this.$route.query);
        const x = this.$route.query

        console.log(x.code)
        this.tiktoker();


    }
}
</script>

<style>

</style>
