<template>
  <div>

    <div class="">
      <p class="text-two font-poppins font-bold text-3xl mt-10 text-center">Work With US</p>
    </div>

    <div class="lg:flex">
      <div v-for="(name) in names" :key="name.id" class=" ">

        <div
          class="mt-12  border-one border-2 border-opacity-30 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#efdac1] hover:text-two duration-300   ml-10 mr-10 text-two bg-opacity-60 rounded-3xl">

          <div class=" w-full   ">

            <img :src=name.image class="rounded-3xl overflow-hidden w-full " />
          </div>
          <div class="b  ">

            <p class="  pr-10 text-start ml-10   font-extralight ">{{ name.message }}</p>


          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import imageone from '../../assets/images.jpg'
import imagetwo from '../../assets/wimg.webp'

export default {
  data() {
    return {
      image: imageone,

      names: [
        { id: 0, image: imageone, message: 'In the digital world, an impactful first impression can make you stand out among the enormous amount of content out there. Being memorable is hard, but worth it if you want a brand that will resonate with customers, colleagues, and investors.' },
        { id: 1, image: imagetwo, message: 'In the digital world, an impactful first impression can make you stand out among the enormous amount of content out there. Being memorable is hard, but worth it if you want a brand that will resonate with customers, colleagues, and investors.' },
        { id: 1, image: imagetwo, message: 'In the digital world, an impactful first impression can make you stand out among the enormous amount of content out there. Being memorable is hard, but worth it if you want a brand that will resonate with customers, colleagues, and investors.' }
      ],
      font1: 'pt-2',
      font2: 'pt-10',
      font: 'pt-20'
    };
  }

}
</script>


// 