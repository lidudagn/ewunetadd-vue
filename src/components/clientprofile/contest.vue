<template>


        <div class="grid md:place-items-center bg-[#ECECEC]">

<div class="flex ">
    <div class="">
        <section class=" ">
            <div class="flex flex-col items-center justify-center ">

                <div class="w-full    ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

<form  @submit.prevent="handlesubmit" class="  min-h-screen " >




<div class=" flex-row justify-center p-12 md:w-[500px] w-[280px] bg-white ">
                                        <div class="">


                                            <div class="relative z-0 mb-6 w-full group ">
       <input type="text" name="floating_full_name" id="floating_full_name" v-model="title"
       class="block py-2.5 px-0 md:w-96 w-44 text-sm  bg-transparent border-0 border-b
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
                                              <span> DeadLine:</span>
                                            <input type="date" name="birthday" v-model="deadline"
                                                class="bg-white h-8 mt-1 border-b border-one text-one sm:text-sm
                                                 focus:ring-0 focus:border-one block md:w-96 w-44  focus:outline-none"
                                               >
                                              </label></div>



                                        <label class="block pt-5">
                                            <span class=" text-black">currency:</span>
                                            <select  v-model="currency"
                                                class="form-select block w-full mt-1 h-8 bg-[#ECECEC]
                                                focus:outline-none focus:ring-0 focus:border-one border-one text-one">
                                                <option value="0" label="Select a currency ... "  disabled selected="selected">Select a currency ... </option>
                                                <option value="ETB" label="ETB" >ETB</option>
                                                 <option value="USD($)" label="USD($)">USD($)</option>
                                           <option value="EURO" label="EURO">EURO</option>
                                            </select>
                                        </label>
                                        <label class="block pt-5">
                                            <span class=" text-black">Min_price:</span>
                                          <input type="number" v-model="min_price" class="form-select block w-full mt-1 h-8
                                           border-one bg-[#ECECEC] focus:ring-0 focus:border-one text-one">
                                        </label>

                                        <label class="block pt-5">
                                            <span class=" text-black">Max_price:</span>
                                          <input type="number" v-model="max_price" class="form-select block w-full mt-1 h-8 border-one bg-[#ECECEC] focus:ring-0 focus:border-one text-one">
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
      " v-model="description"></textarea>

                                        <!-- <input type="teaxtarea" v-model="description" class="form-select block w-full mt-1 border-one bg-[#ECECEC]  py-24 focus:ring-0 focus:border-one"> -->
                                        </label>

                                    </div>
                                    <div class="flex w-full justify-center mt-4">
                                        <button type="submit"
                                            class="w-full text-[#ECECEC]   bg-gradient-to-r from-[#B67B46] to-[#82460A] hover:bg-primary-700 focus:ring-one focus:border-one focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">save
                                        </button>
                                    </div>

                                </form>
                                </div></div></div></section></div></div></div>




    </template>

    <script>
    export default {
        name:'contest' ,
        data(){
          return{
            title:'' ,
            deadline:'',
            currency:0,
            min_price:'',
            max_price:'',
            description:'',
          }
        },
        methods:{
          handlesubmit(user){

            const  data={
              title:this.title,
              deadline:this.deadline,
              currency:this.currency,
              min_price:this.min_price,
              max_price:this.max_price,
              description:this.description,
            };
            this.$store.dispatch("auth/contest", data)


          },

        }

    }
    </script>

    <style>

    </style>