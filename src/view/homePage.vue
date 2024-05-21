<template>
    <div class="font-poppins  bg-white ">

        <headerr />



    </div>

    <home />
    <service />
    <work />
    <contact />



</template>

<script>

import work from '../components/home/work.vue'
import contact from '../components/home/contact.vue'
import home from '../components/home/home.vue'
import headerr from '../components/home/headerr.vue'
import service from '../components/home/service.vue'
export default {
    components: {
        home,
        headerr, service, contact, work
    }
}
</script>

<style>
</style>