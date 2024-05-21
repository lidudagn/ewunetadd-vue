<template>

    <div class="  md:flex block  h-screen overflow-y-auto w-screen overflow-x-hidden">
        <div class="mb-20 md:mb-0 ">
            <inprofile />
        </div>
        <div class="  ">
            <packages />
        </div>
    </div>
</template>

<script>
import packages from './influencerprofile/package.vue';
import inprofile from './influencerprofile/inprofile.vue';
export default {
    components: {
        inprofile, packages
    }
}
</script>

<style>

</style>