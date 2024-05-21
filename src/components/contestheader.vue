<template>
    <div class="flex">
        <form class="flex items-center w-60 m-4 h-7">
            <label class="sr-only ">Search</label>
            <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <!-- <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg> -->
                </div>
                <input type="text"
                    class=" border  text-sm rounded-lg focus:ring-one focus:border-one border-one  block w-full pl-10 p-2.5  "
                    placeholder="Search" required>
            </div>
            <button type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-whit rounded-lg border border-one hover:bg-one focus:ring-4 ">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </form>

        <!-- sort-->

        <!-- <form class=" h-10 mt-2">
            <label class=" flex w-60">
                <div class="flex pl-5 pr-5">
                    <select @change="selectCategory($event)" class="form-select block w-16 bg-white ">
                        <option class=" hover:bg-white" value="Option 1 ">name a-z</option>
                        <option class=" hover:bg-white" value="Option 1 ">name z-a</option>
                        <option value="Option 2">deadline ase</option>
                        <option value="Option 2">deadline des</option>
                    </select>
                    
                    <button type="submit"
                        class="h-10 p-2.5 ml-2 text-sm font-medium text-whit rounded-lg border border-one hover:bg-one focus:ring-4 ">
                        sort
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </label>
            </form> -->
        <button @click="toggle= !toggle" class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>

        </button>
        <div v-if="toggle==false" class="bg-[#ECECEC]   h-52 flex justify-center">
            <div class="flex p-4  space-x-7">
                <div class=" text-[12px]">
                    <label class="underline text-xl text-one">sort</label><br />
                    <label>price ase</label><br />
                    <label>price des</label><br />
                    <label>deadline des</label>
                </div>
                <div class="">
                    <label class="underline text-xl text-one">filter</label><br />
                    <input class="" type="date" /> deadline
                    <button class="text-[#a29d9d] rounded ml-3 px-4   bg-gradient-to-r from-[#B67B46] to-[#82460A] ">

                        filter
                    </button>
                    <br />
                    <div class="flex mt-6">
                        <input class="w-20" type="number" /> min
                        <input class="w-20" type="number" /> max
                        <button
                            class="text-[#a29d9d]  rounded ml-3 px-4   bg-gradient-to-r from-[#B67B46] to-[#82460A] ">

                            filter
                        </button>
                    </div>
                    <input class="w-20  mt-5 " type="number" /> min
                    <button class="text-[#a29d9d] rounded ml-3 px-4   bg-gradient-to-r from-[#B67B46] to-[#82460A] ">

                        filter
                    </button>
                    <br />
                    <input class="w-20 mt-4" type="number" /> max
                    <button class="text-[#a29d9d] rounded ml-3 px-4   bg-gradient-to-r from-[#B67B46] to-[#82460A] ">

                        filter
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: true,
            sortselect: '',
            sortselectt: ''
        }
    },
    methods: {
        selectCategory(event) {
            console.log(event.target.value);
            this.selected = event.target.value
        },
        selectCategor(event) {
            console.log(event.target.value);
            this.selected = event.target.value
        },
    },
}
</script>

<style>

</style>