<template>
    <div class="mt-20">
        <p class="text-center font-bold  text-two font-poppins text-3xl pt-16 underline pb-10">How it works</p>
        <div class="w-full mt-10 flex ">

            <div class="w-1/2 md:block hidden">
                <img src="../../assets/image3.svg" class="" />
            </div>
            <div class="md:w-1/2 w-full ">
                <div>
                    <div v-for="(txt) in texts" :key="txt.id" class="flex mb-10 ml-10"> <svg
                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#cccccc">
                                    <path
                                        d="M82.85563,115.05188l-33.25781,-31.01375l4.68969,-5.02563l27.97688,26.08219l70.11687,-82.96312c-4.42094,-5.11969 -10.93812,-8.37156 -18.22125,-8.37156h-96.32c-13.30312,0 -24.08,10.77688 -24.08,24.08v96.32c0,13.30313 10.77688,24.08 24.08,24.08h96.32c13.30313,0 24.08,-10.77687 24.08,-24.08v-96.32c0,-3.41312 -0.72562,-6.665 -2.01562,-9.62125z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div class="bg-[#ECECEC] md:pl-10 pl-2 md:mr-20  mr-10 md:h-24 w-full rounded-xl">
                            <p class="p-3 font-poppins text-two text-sm"> {{ txt.message }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            texts: [
                { id: 1, message: ' A principal has a duty to correct a third party authority to act on the principal.' },
                { id: 1, message: 'an agency that is not created as an actual agency by a principal and an agent but that is imposed ' },
                { id: 1, message: 'the existence of the agency and is bound by the agecy acts in dealing with third party. ' }
            ]
        }
    },

}
</script>

<style>
</style>