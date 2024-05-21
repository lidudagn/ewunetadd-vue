
<template>


    <div class="grid place-items-center bg-[#ECECEC]">

        <div class="flex ">
            <div class="">
                <section class=" ">
                    <div class="flex flex-col items-center justify-center ">

                        <div class="w-full    ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                                <form class="  " @submit="onSubmit">

                                    <div class="">
                                        <div class="np-image-upload-picker"
                                            v-if="imageFile == null || imageFile.length == 0">

                                            <div class="w-full justify-center flex"><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXBx9D///+9w83Y3OHDydLIzdXt7/HN0tn3+Pnq7O/S1t319vfh5Ojd4OX8/P3r7fDhTC8lAAAKfElEQVR4nN2d67LrJgyFOWB8wZf9/m9bO44TOzEgoYVNumY6/dHdhC/chJCE+pddU1t3w2hcY21VVWr+x9rGmXHo6nbK//Uq54dP9WBspWepMy3/obJmqLNy5iJsu7FZyM7ZDpwLaWO6NlNLchC2nas83RYA1ZXpcnQmmnCqjWXTvSmtqcENwhJOnVPJeBukch2yTUjCBU9E96Z0f7hmoQhrI+y8D0hlelDLMIQDf2WJQ1rMaAUQTiNodH4xqhGwuIoJe5cH7wnpxINVSJiXD8IoIuyb3HwARgFhm73/3owCky6ZcDJX8T0YzeWEw4V4q4ZLCXt7ZQeu0jZtOiYRXjpAd4xJQzWBsL4Fb1XCyYNPeNkKeqaEbuQS9tWNfIsq7mxkEo53duAqPWYknG5YQr+lLcse5xDeucQcxVlwGIQFjNBNnJFKJ7zEyqZKN3DCyd4N9SHyZCQS9ncDnYi4bdAI/0oaoZs0zSFHIhxKBJwRSccNCmGhgEREAmGxgLRdI05Y0Db4LQJilLBoQApijLDgIboqOhcjhMUDxhHDhF35gDNi+H4jSFj/AuCMGDxqhAj73wCcFXIYBwinu9vNUMAMDxCWdpoIyaYQNuhWPMJKVuEvHP3nRS8hdp+YoRozdHXdt31fd4NppCENn1/g3TN8hMhldAmv+D7MtbDIhvVLfAuqhxC4ymjnX8z/kO5lz2rjIUStMtrGjKoB5qH0rDbnhCBzW1eUcIquAn3buRF+SoiZhJp85TdgVp3zqXhKCLmb0I7ump4w87GiEjrEt0Xs4U9hbHxHI0Q41nTDjfWBOGTP3G8nhIhvSrmthdwsUwiN/Gu4F2BPIcyo75/2ixBwZKL5MfMg6i/j6YtQPh2YawwY8Wvf/ySUf0dyDy6SmxpfX/9JKP0CSfTSIsBOFSaULzP0i71zyWfJx098JGzl80Aa8yo/1eij1+ZIKB4jxBuvkOQGx9GyORDKd4ozs4krsY163DEOhHLXDAAQME4Pa8G+TeIuFOyEe4l3rEMn7gnFXRjw6bEkXk/3nbgjlHchKtNFfJTad+KOULyQoroQcATfrXhvwqmQWbhIPhPfe+KbcBR+KGYh3Zol1duwUTk+VC7xaVh/E2KXaKnE3r73EeNFKF6hTx1dyZK25r3sbYTyrQI5SBHDdBtSCvaJ2NxWsf39+sU3QvnZGpuHLd67XmvNk1DukMVt96vEm/42qJ6EcucB4ty0F6xFKyHgujDNReqX3AB5uhtWQvkgBS80wCathPIhEY7aSRDghs/tCMUf9un+kQvgFFNvQsDvBd4sENvFc1w9CAG3PkUSmhch4OpOh9ubIMAotRshYsiX2Ifr4rAQIm6YyyTsnoSIe/si19LHfrEQIkIvoOffRZDg1molhPxaBdo0ah1ZChXoIbkXPROkpMHyuytIaAL8iA9q1eIdU6goPfT5ENYqBdlaFf6MD2nUYogozEIDP1yAInjnpUbBsiexR2DAAXjR/Lsr1GeBJyKqdMMwE0IiERXYqgFNncWqUbi0CuSOCCvwY2dCWCkP5DCFNar6p3BR+cDVFJgLMSlg+pY0HOotXL6O7hXw54KdL4C/uq5VB/swXCciU646hSxLBpqJ0MTOQUFztTHLKTItUI8Kc0rZPg+xJ2Lz441CmTSrAIYNzJxZ5RQ4kVI+TsGpq41C58JKz/rQWTPLwgmFLil4iQOr4BXmRFsGvgJABkKJaZOhAkCVgTAdMUc1qkxVENMGaqZqVFkYk5abPHVUsoxSleQgzlT2NReh0pZn3bS5ik5W8P3wLY6Nmq/SD37Hf4te2rjOWDXUou3Sg2iVxvNWdm/AZ4sP6XjF+DpzXWKHPR+eSNvBf2cz4WpG+GSwZ/xTad0MZz3ZDxeURJ3P+NeUj9eqGV9PdC2PeI1Npmc/PjVcRLjoUVxoeZfM+4hXDnVIf2mJ0jXS512idA+8tyhTE/DuqUhVyPvDImWBd8BlygHv8cvUCIzFKFL6DxdPU6Ye8TSgmKgypYFxbWVqjWu76eWfS2SA8aVF6hlf+j9eap4xwv9ju+0Z542wanQOyZu1xerLJuJ8qm2cM3g511QyR8Ar3yJ9Imrthj7nq9pTP7j0znzlzKRORNRrrzF1qQ65R4mA9Nw13aCTSPxKcxrvctcSjG9t4Q9oB5Xi+F/r5STmkCbWfpSIP9DWjMHEPOBrO3AV+1G0fR4wc7+oci6ffk28FfGQy807QaHTY+hiHYOeaa0JNRXuA+T14qGmAmeYwnMpOWrpgB91MeirKby0AE+MS4iN7Plv8lqMzsLjinrf+VWfhnp9ga2VlCLiVPyqMURcpm4eo4uI4/SrThQx3gOXUpEuUmzFSa0v0pZYQBdSO/H157yaezduhTtRJtRZzT1KEQN0wnaaCBfzp3UTCXYNvDREmgh9cVr7krBhlDFICcPUU780ukjBc+5TFTVPPDVoo50IrwyRqpgV7a0jHOtEeHWPVMW6wlsLOvZ/FrLQRJeaQD3v2HJ6KUZI4WYGarJHfMP3W92bgtZ3sK5++GzyI4TBtxHC/f8jhB9/y3mj5CcIo2+UhOyFnyCMvjMT2jF+gZDwVlBgsfkFQsJ7T4HF5hcIv/+W8+5a+YTEd9e8lk35hMS387wfUDwh+f1Dn6+ndELGG5aesgaFE3LeIfXt+2U4onzF3FhvyXo+44a77TN57th47wF7pmIRnpr2fIwy33T2meAaXVyer/OUdv/w4r6tru++ufDEKyS8re49ZdwUpvCUx80W8OQGCL35Qjdez/iyJQO/esi75DtIQSoJJckT/BV0cwb9Z757rJvWm97zRHn4zi/sIfT6NKobnMO+xkSGVMQH6kW8fKROvvDEWEtiXl5vIjT/5W2R/nzRwtGfOurH9ud6X3hR439dPm5Ixj31AcTmovCozhvuTbCUCXcRARfqJaZ46w8QpqwGlNuWEGKVffsPlEQgLXek+6TQjWTmcO9QVAJtIaDdmAVDWGgVTJLUefb4VbThQ7wTDFbh0pkYw3yKOHaot55TOP4hw1gdwnyWuh3T73UjKQ+6Qb2Vu2gaw/lAjGMq4+Y6VudFV4FKNCzVsQQSzi7FuZuPh8zpRm7n9CaezsXZoljRB1M8cUUrIxmt/Tz7Yt+hyVPwIWZ8BaEi0dxC1yUN19qEF5fn5zPtKG4ESU0KQtbajn8syn4gFh1iG1H8GBlqbS6tKzfUBMy+Gy01xzDBu5AQBfRHa8yG2ZhhKxB11KNclLOKkUGZYgUnxTlx08geSb22ccaM47jkvzbWVvxU3zSPe1okV5+W1bkSJSaE0osUIgiBT2yQleoYSo/Gu7TYhOBKSBBv2GaueLjjk5xdRBGVeatWvvhk5xZhzGjURr6bT0w492PWsRqvDpqfcJ6PJlMZRK0NwHeAiWzuyGYXgw9UsQEVu0051XHwlEG5RYDR6V0D6sjl+IVrFjT+fuocx44+pcPi/QMTLqpN+pycTyIG7kPPkUPRDi7uizihc10Ot2uuLJG2Gxvq6Wj+u2bMQrcoax5MWw/OPuoG+8hUZd18QM7ZiAsyfZaz/DCux96qWmol2+U0PA7d+dkfrP8AELeBvwZOOcwAAAAASUVORK5CYII="
                                                    alt="photo" id="pic" class="   h-44 w-44 pl-2  rounded-full   ">
                                            </div>

                                        </div>
                                        <div class="flex space-x-2 w-full justify-center"
                                            v-if="imageFile != null && imageFile.length != 0">
                                            <img class=" mt-10  h-auto w-44 pl-2  rounded-full  "
                                                :src=" hh.profile_pic" />
                                            <div class=" pt-44  ">

                                            </div>

                                        </div>
                                        <input type="file" style="display: none" ref="fileInput"
                                            @change="showImagePreview($event)" accept="image/* " />

                                        <div class="w-full justify-center flex mb-4">
                                            <button class="btn btn-info flex text-one "
                                                @click="$refs.fileInput.click()">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                                </svg>
                                                change profile picture</button>

                                        </div>
                                    </div>


                                    <div class=" flex-row justify-center p-12 w-[500px] bg-white ">
                                        <div class="">
                                            <div>
                                                <label for="first name"
                                                    class="block  text-sm font-medium text-gray-900 dark:text-one">
                                                    First name: </label>
                                                <input type="text" name="name" v-model="hh.f_name"
                                                    class="bg-white border-b mb-1 border-one textone sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                    required="">
                                            </div>
                                            <div class="">
                                                <label for="last name"
                                                    class="block text-sm font-medium text-gray-900 dark:text-one">
                                                    Last name:</label>
                                                <input type="text" name="name" v-model="hh.l_name"
                                                    class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                    required="">
                                            </div>
                                        </div>
                                        <div class="mt-4 flex space-x-6">
                                            <span class="text-one mt-2">Gender:</span>
                                            <div class="mt-2">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio" v-model="hh.gender"
                                                        name="accountType" value="Male">
                                                    <span class="ml-2 text-one">Male</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio " name="accountType"
                                                        v-model="hh.gender" value="Female">
                                                    <span class="ml-2 text-one ">Female</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio" name="accountType"
                                                        v-model="hh.gender" value="other">
                                                    <span class="ml-2 text-one">other</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div class="flex space-x-5">
                                            <label for="last name" class="block mt-5   text-gray-900 dark:text-one">
                                                Birthdate:</label>
                                            <input type="date" name="name" v-model=" hh.birth_day"
                                                class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                placeholder="+251.." required="">
                                        </div>


                                        <label class="block">
                                            <span class=" text-one">Country</span>
                                            <select @change="selectCategory($event)" v-model="hh.country"
                                                class="form-select block w-full mt-1 bg-[#ECECEC]">
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                            </select>
                                        </label>
                                        <label class="block">
                                            <span class=" text-one"> genre</span>
                                            <select @change="selectCategor($event)" v-model="  hh.genre"
                                                class="form-select block w-full mt-1 bg-[#ECECEC]">
                                                <option value="Fitness">Fitness</option>
                                                <option value="Comedy"> Comedy</option>
                                            </select>
                                        </label>
                                        <div>
                                            <label for="last name"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-one">
                                                City</label>
                                            <input type="text" name="name" v-model="hh.city"
                                                class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                placeholder="" required="">
                                        </div>

                                        <div>
                                            <label for="last name"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-one">
                                                BIO</label>
                                            <input type="text" name="name" v-model="hh.bio"
                                                class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                placeholder="bio" required="">
                                        </div>
                                        <div>
                                            <label for="last name"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-one">
                                                phone number</label>
                                            <input type="number" name="name" v-model="hh.phone"
                                                class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                placeholder="+251.." required="">
                                        </div>



                                        <div>
                                            <label for="last name"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-one">
                                                email</label>
                                            <input type="email" name="email" v-model="hh.email"
                                                class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                placeholder="example@gmail.com" required="">
                                        </div>
                                        <div>
                                            <label for="description"
                                                class="block mb-2 text-sm font-medium text-one">description</label>
                                            <textarea type="text" name="description" id="password"
                                                v-model="hh.short_description" placeholder="something about your self"
                                                class="bg-white  border-b border-one textone sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                required=""></textarea>
                                        </div>



                                    </div>
                                    <div class="flex w-full justify-center mt-4">
                                        <button type="submit"
                                            class="w-full text-[#ECECEC]   bg-gradient-to-r from-[#B67B46] to-[#82460A] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">save
                                        </button>
                                        <!-- <div class="text-3xl bg-red-600">{{hh.genre}} genre</div> -->
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    </div>


</template>
  
<script>
import { mapActions, } from 'vuex';
import api from '../services/api'

export default {
    data() {
        return {
            hh: {

                city: '',

                f_name: '',
                l_name: '',
                profile_pic: '',
                gender: '',
                birth_day: '',
                country: '',
                bio: '',
                phone: '',
                email: '',
                short_description: '',
                genre: '',


            },



        }
    },
    computed: {



    },
    methods: {


        // ...mapActions(["addprofile"]),
        async onSubmit(event) {



            event.preventDefault();


            console.log(this.hh)
            // this.addprofile(this.hh)
            // addprofile({ commit }, hh)
            // console.log(hh, "sjsh")

            const response = await api.post('v1/influencer/influencerProfile', this.hh)
                .then(response => {
                    if (response.status == 201) {
                        setTimeout(() => this.$router.push('/verifyemail'), 1000);
                    }

                    console.log(response.status)
                });





        },





        selectCategory(event) {
            console.log(event.target.value);
            this.selected = event.target.value
        },
        selectCategor(event) {
            console.log(event.target.value);
            this.selected = event.target.value
        },

        onUpload() {

        },
        showImagePreview(event) {
            this.file = event.target;
            if (this.file.files && this.file.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.imageFile = e.target.result;
                };
                reader.readAsDataURL(this.file.files[0]);
            }
        },

    },
    created() {

    },

}
</script>
  
<style>

</style>