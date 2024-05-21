<template>
    <div class="flex w-screen  overflow-x-hidden">
        <div class="md:w-2/12   ">
            <sidebar />
        </div>
        <div class="md:w-10/12  ">
            <div class="">
                <!-- <fullprofile /> -->
                <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut">
                    <router-view />
                </transition>

            </div>

        </div>


    </div>
</template>

<script>
import sidebar from '../components/influencerprofile/sidebar.vue';
import fullprofile from '../components/fullprofile.vue';
export default {
    components: {
        sidebar,
        fullprofile

    }
}
</script>

<style>
.v-leave-active {
    transition: opacity 20s ease;
}

.v-enter-active {
    transition: opacity 20s ease;
}
</style>