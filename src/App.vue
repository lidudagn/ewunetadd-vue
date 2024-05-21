
<template>
  <div class=" ">


    <div v-if="!loading && erroMessage" class="w-full h-full flex justify-center">
      <error />
    </div>
    <div v-if="count" class=" w-full h-screen flex justify-center ">
      <img class=" w-68 h-64" src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" />
    </div>

    <!-- <div class="">ewreewewe{{count}}</div> -->
    <div class=" ">
      <router-view />
    </div>


  </div>
</template>

<script>
import spinner from './components/spinner.vue';
import error from './components/error.vue'
import { mapGetters } from 'vuex'
import { RouterLink, RouterView } from 'vue-router'

import homePage from './view/homePage.vue';
export default {

  components: {
    homePage, error, spinner
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      count: 'count'

    }


    )
  },
  created() {

  },

}
</script>

<style>

</style>