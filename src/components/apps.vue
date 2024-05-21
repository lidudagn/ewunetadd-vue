<template>
    <div class="">jkkhj</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions(["fetchapps"])
    },
    computed: mapGetters(["allapps"]),
    created() {

        try {


            let response = this.fetchapps().then(

            )
            if (response) {

                console.log(response, 'waiting the response')

            }
            else {
                console.log('not feching')
            }

        }
        catch (error) {
            console.log(error)
        }

    }
}

</script>

<style>

</style>

