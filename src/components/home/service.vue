<template>

    <div class="">
        <p class="text-center font-bold  text-two font-poppins text-3xl pt-16 underline pb-16">Work With Us</p>
        <!-- <p class="text-center   text-one font-poppins text-sm  pt-2 pb-16 pl-16 pr-16">Leverage agile frameworks to
            provide
            a
            robust synopsis for high level overviews. Iterative approaches to
            corporate strategy foster collaborative thinking to further the overall value proposition.</p> -->
        <div class="md:flex gap-x-10 gap-y-10 mr-10 ml-10">

            <div v-for="(feature) in features" :key="feature.id"
                class="  bgg-[#ECECEC] md:w-3/12 w-full  bg-[#ECECEC] rounded-tr-3xl  border-one mb-16 border-opacity-75 ">
                <div class="h "><img :src=feature.image class="overflow-hidden w-full h-28 " /></div>
                <dev class="text-2xl text-two text-start ">
                    <!--img-->

                    <div class="">
                        <p class="   font-poppins  ml-4">{{ feature.first }}</p>
                        <div class="pl-5 pr-5">
                            <p class=" text-sm"> {{ feature.message }}
                            </p>
                        </div>
                    </div>
                </dev>

            </div>

        </div>
    </div>
</template>

<script>
import image1 from '../../assets/connect.webp'
import image2 from '../../assets/searching-data-4085824-3385493.png'
import image3 from '../../assets/ambassador.jpg'
import image4 from '../../assets/securee.jpg'
export default {
    data() {
        return {
            features: [
                { id: 1, image: image1, first: 'create connection', message: ' which in turn allows visitors to easily access information from the homepage. ' },
                { id: 2, image: image2, first: 'to discover influncer', message: ' to create a professional-looking agency website. In other words, you won’t have to write a single line of code at any ' },
                { id: 3, image: image3, first: 'brand ambassador', message: ' material, contracts for publication space, and sometimes undertakes market research on behalf of its clients.' },
                { id: 4, image: image4, first: 'secure service', message: ' that is clean and easy-to-understand, which in turn allows visitors to easily access information from the homepage. ' },
            ]
        }
    },

}
</script>

<style>
</style>