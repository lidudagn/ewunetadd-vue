<template>




<div class="fixed z-10 inset-0 overflow-y-auto " id="modal">
       <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
         sm:block sm:p-0">
         <div class="fixed inset-0 transition-opacity">
           <div class="blur-[2px]">


           </div>
         </div>

         <!-- This element is to trick the browser into centering the modal contents. -->
         <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

         <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
            transform transition-all sm:my-8 sm:align-middle sm:max-w-lg
           relative shadow dark:bg-gray-700 ">
           <div class="py-4 text-left px-6">
             <!--Title-->


             <!-- email -->
             <div class="grid place-items-center">
<div class="relative p-4 w-full max-w-md h-full md:h-auto">

            <button  @click.prevent="cancel" type="button" class="absolute top-1 right-1 text-gray-400 bg-transparent hover:bg-gray-200
             hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800
              dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <!-- <span class="sr-only">Close modal</span> -->
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this contest?</h3>
                <button  @click.prevent="deleteContest(this.$route.query.id)" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button   @click.prevent="cancel"  type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500
                 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>

          </div></div></div></div></div></div></div>



</template>
<script>
import post from './post.vue'
import UserService from '../../services/user.service copy'
  import { ref } from 'vue';
  export default {
    data(){
      return{
        openfilterDropdown:false
      }
    },
    setup() {
      let showMenu = ref(false);
      let show = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, show, toggleNav };
    },
    components:{
      post,
    },
    methods:{
      cancel(){
      this.$router.push('/post')

    },
        deleteContest(id){

                // this.$confirm("Are you sure,you realy want to delete this contest?").then(() =>{


                // confirm('are you sure ?')
                this.$store.dispatch("auth/deletecontest",id ).then(
                    response=>{
                        console.log('success')
                        this.$router.push('/post')
                    }
                )
            // })
        }
    },

  };
</script>
