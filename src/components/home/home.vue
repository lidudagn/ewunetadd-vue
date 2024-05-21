<template>
    <div class="pt-0 relative ">
        <!-- <img src="../../assets/landing_bg.svg" class="absolute w-full h-auto top-0 -z-10 p-0 m-0"/> -->


        <div class=" w-full md:flex   bg-[#ECECEC] pt-5
         ">
            <div class="md:hidden w-full">

                <img src="../../assets/image1.svg " class="pt-16" />
            </div>
            <div
                class="md:w-1/2  w-full md:pl-10 md:pr-10 pl-5 pr-5 flex flex-col   justify-center items-center md:items-start md:pt-40  ">



                <p class="   text-two font-poppins  font-bold  text-4xl tracking-tight pb-6 ">your sucess is
                    our
                    mission
                </p>


                <p class="font-poppins  pr-10 font-thin text-sm">The Storyline agent will contact you from a
                    station - you
                    will get a
                    notification about an important mission offer - however, you will need to travel to the agent's

                    accept and complete the mission in the usual way. You cannot work for a Storyline agent unless
                    you've received an offer from that Agent. </p>



                <router-link :to="{name: 'signup'}"
                    class="items-center
                    bg-gradient-to-r from-[#B67B46] to-[#82460A] pl-16 mr-4 pr-16   mt-4 items-cente  text-white p-1 rounded-xl">
                    join </router-link>


            </div>
            <div class="md:w-1/2 md:block hidden">

                <img src="../../assets/image1.svg" class="pt-16 w-full" />

            </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ECECEC" fill-opacity="1"
                d="M0,224L34.3,218.7C68.6,213,137,203,206,176C274.3,149,343,107,411,101.3C480,96,549,128,617,160C685.7,192,754,224,823,224C891.4,224,960,192,1029,154.7C1097.1,117,1166,75,1234,74.7C1302.9,75,1371,117,1406,138.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
        </svg>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>