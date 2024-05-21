<template>


        <div class="grid md:place-items-center bg-[#ECECEC]">

<div class="flex ">
    <div class="">
        <section class=" ">
            <div class="flex flex-col items-center justify-center ">


                <div class="w-full    ">

                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <div v-if="message" class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full h-10" role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
{{message}}
</div>



<form  @submit.prevent="updateContest" class=" min-h-screen  " >





<div class=" flex-row justify-center p-12 md:w-[500px] w-[280px] bg-white ">
                                        <div class="">


                                            <div class="relative z-0 mb-6 w-full group ">
       <input type="text" name="floating_full_name" id="floating_full_name" v-model="oneContest.contestRead.title"
       class="block py-2.5 px-0 md:w-96  w-44 text-sm  bg-transparent border-0 border-b
        border-[#82460A] appearance-none text-black dark:text-white dark:border-gray-600 dark:focus:border-[#82460A]
        focus:outline-none focus:ring-0 focus:border-[#82460A] peer" placeholder=" "/>
       <label for="floating_full_name" class="peer-focus:font-medium absolute text-sm
        text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-focus:left-0 peer-focus:text-[#82460A] peer-focus:dark:text-[#82460A] peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Title</label>
   </div>


                                        </div>



                                        <div class="flex space-x-5 pt-5">
                                            <label for="birthday" class="block mt-5   text-gray-900 dark:text-one">
                                               DeadLine:
                                            <input type="date" name="birthday" v-model="oneContest.contestRead.deadline"
                                                class="bg-white  border-b border-one text-one sm:text-sm
                                                 focus:ring-0 focus:border-one block md:w-96 w-44 h-8 p-2.5 mt-1   focus:outline-none"
                                               >
                                              </label></div>



                                        <label class="block pt-5">
                                            <span class=" text-black">currency:</span>
                                            <select  v-model="oneContest.contestRead.currency"
                                                class="form-select block w-full mt-1 h-8 bg-[#ECECEC] text-one border-one focus:ring-0 focus:border-one ">
                                                <option value="0" label="Select a currency ... "  disabled selected="selected">Select a currency ... </option>
                                                <option value="ETB" label="ETB">ETB</option>
                                                 <option value="USD" label="USD">USD</option>
                                           <option value="EURO" label="EURO">EURO</option>
                                            </select>
                                        </label>
                                        <label class="block pt-5">
                                            <span class=" text-black">Min_price:</span>
                                          <input type="number" v-model="oneContest.contestRead.min_price" class="form-select block border-one w-full h-8 mt-1 bg-[#ECECEC] text-one focus:ring-0 focus:border-one">
                                        </label>

                                        <label class="block pt-5">
                                            <span class=" text-black">Max_price:</span>
                                          <input type="number" v-model="oneContest.contestRead.max_price" class="form-select block border-one w-full h-8 mt-1 bg-[#ECECEC] text-one focus:ring-0 focus:border-one">
                                        </label>

                                        <label class="block pt-5">
                                            <span class=" text-black">Description:</span>
                                            <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-one
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-one focus:ring-one focus:outline-none
      " v-model="oneContest.contestRead.description"></textarea>
                                        </label>

                                    </div>
                                    <div class="flex w-full justify-center mt-4">
                                        <button type="submit"
                                            class="w-full text-[#ECECEC]   bg-gradient-to-r from-[#B67B46] to-[#82460A] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5
                                            text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update
                                        </button>
                                    </div>


                                </form>
                                </div></div></div></section></div></div></div>




    </template>

    <script>
      import UserService from '../../services/user.service copy';
    export default {
      props:["id"],
        name:'contest' ,
        data(){
          return{

            oneContest:null,
            id:'',
            message:'',
          }
        },
        created() {

         UserService.getOneContest(this.$route.query.id).then(
      response => {

        this.oneContest = response.data;

      },
      error => {
        this.oneContest =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        if (error.response && error.response.status === 403) {
          EventBus.dispatch("logout");
        }
      }
    );



    },
        methods:{
          updateContest(user){


            const  data={
              title:this.oneContest.contestRead.title,
              deadline:this.oneContest.contestRead.deadline,
              currency:this.oneContest.contestRead.currency,
              min_price:this.oneContest.contestRead.min_price,
              max_price:this.oneContest.contestRead.max_price,
              description:this.oneContest.contestRead.description,
            };
            console.log(data)
            UserService.updateOneContest(this.$route.query.id, data).then(response => {
          console.log(response.data);

          this.message = response.data.msg;
        })
        .catch(e => {
          console.log(e);
        });


          }

        }

    }
    </script>

    <style>

    </style>