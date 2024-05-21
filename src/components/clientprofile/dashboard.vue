<template>


    <div class="grid md:place-items-center bg-[#ECECEC] ">


        <div class="flex ">

            <div class="">
                <section class=" ">
                    <div class="flex flex-col items-center justify-center ">

                        <div class="w-full    ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <div class="md:mr-0 mr-10">
                                        <div class="np-image-upload-picker"
                                            v-if="imageFile == null || imageFile.length == 0">

                                            <div class="w-full justify-center flex"><img
                                                    src="../../assets/Avater3.png" alt="photo" id="pic" class="   h-44 w-44 pl-2  rounded-full   ">
                                            </div>

                                        </div>
                                        <div class="flex space-x-2 w-full justify-center"
                                            v-if="imageFile != null && imageFile.length != 0">
                                            <img class=" mt-10  h-auto w-44 pl-2  rounded-full  " :src="imageFile" />
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

                                <div class="md:px-20 px-0  mt-4 flex md:space-x-6 space-x-3 ">

                                            <span class="text-black mt-2 ">Type:</span>
                                            <div class="mt-2">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio text-two bg-gray-100 focus:ring-0"  v-model="type"
                                                        name="Type" value="Individual" @click="showform">
                                                    <span class="ml-2 text-one">Individual</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" name="Type"
                                                        v-model="type" value="Company" @click="view">
                                                    <span class="ml-2 text-one ">Company</span>
                                                </label>

                                            </div></div>



                                <form  @submit.prevent="handleProfile" class="  "  v-if="visible">




<div class=" flex-row justify-center md:p-12 md:w-[500px] w-[290px]  bg-white ">
                                        <div class="">


                                            <div class="relative z-0 mb-6 md:w-full  group ">
       <input type="text" name="floating_full_name" id="floating_full_name" v-model="name"
       class="block py-2.5 px-0 md:w-96 w-72 text-sm  bg-transparent border-0 border-b
        border-[#82460A] appearance-none text-black dark:text-white dark:border-gray-600 dark:focus:border-[#82460A]
        focus:outline-none focus:ring-0 focus:border-[#82460A] peer" placeholder=" "/>
       <label for="floating_full_name" class="peer-focus:font-medium absolute text-sm
        text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-focus:left-0 peer-focus:text-[#82460A] peer-focus:dark:text-[#82460A] peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >User name</label>
   </div>
                                            <!-- <div>
                                                <label for="first name"
                                                    class="block  text-sm font-medium text-gray-900 dark:text-one">
                                                    User name: </label>
                                                <input type="text" name="name" v-model="fname"
                                                    class="bg-white border-b mb-1 border-one textone sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                                                    required="">
                                            </div> -->

                                        </div>
                                        <div class="mt-4 md:flex space-x-6 pt-5">
                                            <span class="text-black mt-2">Gender:</span>
                                            <div class="mt-2 ">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" v-model="gender"
                                                        name="accountType" value="Male">
                                                    <span class="ml-2 text-one">male</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" name="accountType"
                                                        v-model="gender" value="Female">
                                                    <span class="ml-2 text-one ">female</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" name="accountType"
                                                        v-model="gender" value="Rather Not To Mention">
                                                    <span class="ml-2 text-one">other</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div class="md:flex space-x-5 pt-5">
                                            <label for="birthday" class="block mt-5   text-gray-900 dark:text-one">
                                                Birthdate:</label>
                                            <input type="date" name="birthday" v-model="year"
                                                class="bg-white block py-2.5 px-0 md:w-full w-64 text-sm text-one bg-transparent border-0 border-b-2
                                                 border-one appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-one peer"
                                               >
                                        </div>


<label class="block pt-5">
                                            <span class=" text-black ">Country:</span>
                                            <select  v-model="country"
                                                class="form-select block md:w-full w-72 mt-1 bg-[#ECECEC] focus:outline-none focus:ring-one focus:border-one text-one ">
                                                <option value="0" label="Select a country ... "  disabled selected="selected">Select a country ... </option>

<option value="AF" label="Afghanistan" >Afghanistan</option>
<option value="AX">Aland Islands</option>
<option value="AL">Albania</option>
<option value="DZ">Algeria</option>
<option value="AS">American Samoa</option>
<option value="AD">Andorra</option>
<option value="AO">Angola</option>
<option value="AI">Anguilla</option>
<option value="AQ">Antarctica</option>
<option value="AG">Antigua and Barbuda</option>
<option value="AR">Argentina</option>
<option value="AM">Armenia</option>
<option value="AW">Aruba</option>
<option value="AU">Australia</option>
<option value="AT">Austria</option>
<option value="AZ">Azerbaijan</option>
<option value="BS">Bahamas</option>
<option value="BH">Bahrain</option>
<option value="BD">Bangladesh</option>
<option value="BB">Barbados</option>
<option value="BY">Belarus</option>
<option value="BE">Belgium</option>
<option value="BZ">Belize</option>
<option value="BJ">Benin</option>
<option value="BM">Bermuda</option>
<option value="BT">Bhutan</option>
<option value="BO">Bolivia</option>
<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
<option value="BA">Bosnia and Herzegovina</option>
<option value="BW">Botswana</option>
<option value="BV">Bouvet Island</option>
<option value="BR">Brazil</option>
<option value="IO">British Indian Ocean Territory</option>
<option value="BN">Brunei Darussalam</option>
<option value="BG">Bulgaria</option>
<option value="BF">Burkina Faso</option>
<option value="BI">Burundi</option>
<option value="KH">Cambodia</option>
<option value="CM">Cameroon</option>
<option value="CA">Canada</option>
<option value="CV">Cape Verde</option>
<option value="KY">Cayman Islands</option>
<option value="CF">Central African Republic</option>
<option value="TD">Chad</option>
<option value="CL">Chile</option>
<option value="CN">China</option>
<option value="CX">Christmas Island</option>
<option value="CC">Cocos (Keeling) Islands</option>
<option value="CO">Colombia</option>
<option value="KM">Comoros</option>
<option value="CG">Congo</option>
<option value="CD">Congo, Democratic Republic of the Congo</option>
<option value="CK">Cook Islands</option>
<option value="CR">Costa Rica</option>
<option value="CI">Cote D'Ivoire</option>
<option value="HR">Croatia</option>
<option value="CU">Cuba</option>
<option value="CW">Curacao</option>
<option value="CY">Cyprus</option>
<option value="CZ">Czech Republic</option>
<option value="DK">Denmark</option>
<option value="DJ">Djibouti</option>
<option value="DM">Dominica</option>
<option value="DO">Dominican Republic</option>
<option value="EC">Ecuador</option>
<option value="EG">Egypt</option>
<option value="SV">El Salvador</option>
<option value="GQ">Equatorial Guinea</option>
<option value="ER">Eritrea</option>
<option value="EE">Estonia</option>
<option value="ET">Ethiopia</option>
<option value="FK">Falkland Islands (Malvinas)</option>
<option value="FO">Faroe Islands</option>
<option value="FJ">Fiji</option>
<option value="FI">Finland</option>
<option value="FR">France</option>
<option value="GF">French Guiana</option>
<option value="PF">French Polynesia</option>
<option value="TF">French Southern Territories</option>
<option value="GA">Gabon</option>
<option value="GM">Gambia</option>
<option value="GE">Georgia</option>
<option value="DE">Germany</option>
<option value="GH">Ghana</option>
<option value="GI">Gibraltar</option>
<option value="GR">Greece</option>
<option value="GL">Greenland</option>
<option value="GD">Grenada</option>
<option value="GP">Guadeloupe</option>
<option value="GU">Guam</option>
<option value="GT">Guatemala</option>
<option value="GG">Guernsey</option>
<option value="GN">Guinea</option>
<option value="GW">Guinea-Bissau</option>
<option value="GY">Guyana</option>
<option value="HT">Haiti</option>
<option value="HM">Heard Island and Mcdonald Islands</option>
<option value="VA">Holy See (Vatican City State)</option>
<option value="HN">Honduras</option>
<option value="HK">Hong Kong</option>
<option value="HU">Hungary</option>
<option value="IS">Iceland</option>
<option value="IN">India</option>
<option value="ID">Indonesia</option>
<option value="IR">Iran, Islamic Republic of</option>
<option value="IQ">Iraq</option>
<option value="IE">Ireland</option>
<option value="IM">Isle of Man</option>
<option value="IL">Israel</option>
<option value="IT">Italy</option>
<option value="JM">Jamaica</option>
<option value="JP">Japan</option>
<option value="JE">Jersey</option>
<option value="JO">Jordan</option>
<option value="KZ">Kazakhstan</option>
<option value="KE">Kenya</option>
<option value="KI">Kiribati</option>
<option value="KP">Korea, Democratic People's Republic of</option>
<option value="KR">Korea, Republic of</option>
<option value="XK">Kosovo</option>
<option value="KW">Kuwait</option>
<option value="KG">Kyrgyzstan</option>
<option value="LA">Lao People's Democratic Republic</option>
<option value="LV">Latvia</option>
<option value="LB">Lebanon</option>
<option value="LS">Lesotho</option>
<option value="LR">Liberia</option>
<option value="LY">Libyan Arab Jamahiriya</option>
<option value="LI">Liechtenstein</option>
<option value="LT">Lithuania</option>
<option value="LU">Luxembourg</option>
<option value="MO">Macao</option>
<option value="MK">Macedonia, the Former Yugoslav Republic of</option>
<option value="MG">Madagascar</option>
<option value="MW">Malawi</option>
<option value="MY">Malaysia</option>
<option value="MV">Maldives</option>
<option value="ML">Mali</option>
<option value="MT">Malta</option>
<option value="MH">Marshall Islands</option>
<option value="MQ">Martinique</option>
<option value="MR">Mauritania</option>
<option value="MU">Mauritius</option>
<option value="YT">Mayotte</option>
<option value="MX">Mexico</option>
<option value="FM">Micronesia, Federated States of</option>
<option value="MD">Moldova, Republic of</option>
<option value="MC">Monaco</option>
<option value="MN">Mongolia</option>
<option value="ME">Montenegro</option>
<option value="MS">Montserrat</option>
<option value="MA">Morocco</option>
<option value="MZ">Mozambique</option>
<option value="MM">Myanmar</option>
<option value="NA">Namibia</option>
<option value="NR">Nauru</option>
<option value="NP">Nepal</option>
<option value="NL">Netherlands</option>
<option value="AN">Netherlands Antilles</option>
<option value="NC">New Caledonia</option>
<option value="NZ">New Zealand</option>
<option value="NI">Nicaragua</option>
<option value="NE">Niger</option>
<option value="NG">Nigeria</option>
<option value="NU">Niue</option>
<option value="NF">Norfolk Island</option>
<option value="MP">Northern Mariana Islands</option>
<option value="NO">Norway</option>
<option value="OM">Oman</option>
<option value="PK">Pakistan</option>
<option value="PW">Palau</option>
<option value="PS">Palestinian Territory, Occupied</option>
<option value="PA">Panama</option>
<option value="PG">Papua New Guinea</option>
<option value="PY">Paraguay</option>
<option value="PE">Peru</option>
<option value="PH">Philippines</option>
<option value="PN">Pitcairn</option>
<option value="PL">Poland</option>
<option value="PT">Portugal</option>
<option value="PR">Puerto Rico</option>
<option value="QA">Qatar</option>
<option value="RE">Reunion</option>
<option value="RO">Romania</option>
<option value="RU">Russian Federation</option>
<option value="RW">Rwanda</option>
<option value="BL">Saint Barthelemy</option>
<option value="SH">Saint Helena</option>
<option value="KN">Saint Kitts and Nevis</option>
<option value="LC">Saint Lucia</option>
<option value="MF">Saint Martin</option>
<option value="PM">Saint Pierre and Miquelon</option>
<option value="VC">Saint Vincent and the Grenadines</option>
<option value="WS">Samoa</option>
<option value="SM">San Marino</option>
<option value="ST">Sao Tome and Principe</option>
<option value="SA">Saudi Arabia</option>
<option value="SN">Senegal</option>
<option value="RS">Serbia</option>
<option value="CS">Serbia and Montenegro</option>
<option value="SC">Seychelles</option>
<option value="SL">Sierra Leone</option>
<option value="SG">Singapore</option>
<option value="SX">Sint Maarten</option>
<option value="SK">Slovakia</option>
<option value="SI">Slovenia</option>
<option value="SB">Solomon Islands</option>
<option value="SO">Somalia</option>
<option value="ZA">South Africa</option>
<option value="GS">South Georgia and the South Sandwich Islands</option>
<option value="SS">South Sudan</option>
<option value="ES">Spain</option>
<option value="LK">Sri Lanka</option>
<option value="SD">Sudan</option>
<option value="SR">Suriname</option>
<option value="SJ">Svalbard and Jan Mayen</option>
<option value="SZ">Swaziland</option>
<option value="SE">Sweden</option>
<option value="CH">Switzerland</option>
<option value="SY">Syrian Arab Republic</option>
<option value="TW">Taiwan, Province of China</option>
<option value="TJ">Tajikistan</option>
<option value="TZ">Tanzania, United Republic of</option>
<option value="TH">Thailand</option>
<option value="TL">Timor-Leste</option>
<option value="TG">Togo</option>
<option value="TK">Tokelau</option>
<option value="TO">Tonga</option>
<option value="TT">Trinidad and Tobago</option>
<option value="TN">Tunisia</option>
<option value="TR">Turkey</option>
<option value="TM">Turkmenistan</option>
<option value="TC">Turks and Caicos Islands</option>
<option value="TV">Tuvalu</option>
<option value="UG">Uganda</option>
<option value="UA">Ukraine</option>
<option value="AE">United Arab Emirates</option>
<option value="GB">United Kingdom</option>
<option value="US">United States</option>
<option value="UM">United States Minor Outlying Islands</option>
<option value="UY">Uruguay</option>
<option value="UZ">Uzbekistan</option>
<option value="VU">Vanuatu</option>
<option value="VE">Venezuela</option>
<option value="VN">Viet Nam</option>
<option value="VG">Virgin Islands, British</option>
<option value="VI">Virgin Islands, U.s.</option>
<option value="WF">Wallis and Futuna</option>
<option value="EH">Western Sahara</option>
<option value="YE">Yemen</option>
<option value="ZM">Zambia</option>
<option value="ZW">Zimbabwe</option>
                                            </select>
                                        </label>
                                        <label class="block pt-5">
                                            <span class=" text-black">city:</span>
                                            <select  v-model="city"
                                                class="form-select block md:w-full w-72 mt-1 bg-[#ECECEC] focus:outline-none focus:ring-one focus:border-one  text-one">
                                                <option value="0" label="Select a city ... " class="text-one" disabled selected>Select a city ... </option>
                                                <option value="Fitness">fitness</option>
                                                <option value="Comedy" > comedy</option>
                                            </select>
                                        </label>

                                    </div>
                                    <div class="flex w-full justify-center mt-4">
                                        <button type="submit"
                                            class="md:w-full w-[290px] text-[#ECECEC]
                                            bg-gradient-to-r from-[#B67B46] to-[#82460A] hover:bg-primary-700 focus:ring-0
                                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm
                                            px-5 py-2.5 text-center dark:bg-primary-600 md:mr-0 mr-6

                                             dark:hover:bg-primary-700 dark:focus:ring-primary-800">save
                                        </button>
                                    </div>

                                </form>




                                <form  @submit.prevent="handleProfile" class="   " v-if="show">




<div class=" flex-row justify-center md:p-12  md:w-[500px] w-[290px] bg-white ">
                                        <div class="">


                                            <div class="relative z-0 mb-6 w-full group ">
       <input type="text" name="floating_full_name" id="floating_full_name" v-model="name"
       class="block py-2.5 px-0 md:w-96 w-72 text-sm  bg-transparent border-0 border-b
        border-[#82460A] appearance-none text-black dark:text-white dark:border-gray-600 dark:focus:border-[#82460A]
        focus:outline-none focus:ring-0 focus:border-[#82460A] peer" placeholder=" "/>
       <label for="floating_full_name" class="peer-focus:font-medium absolute text-sm
        text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-focus:left-0 peer-focus:text-[#82460A] peer-focus:dark:text-[#82460A] peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Company name</label>
   </div>


                                        </div>
                                        <div class="mt-4 md:flex space-x-6 pt-5">
                                            <span class="text-black mt-2">Gender:</span>
                                            <div class="mt-2">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" v-model="gender"
                                                        name="accountType" value="Male">
                                                    <span class="ml-2 text-one">male</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" name="accountType"
                                                        v-model="gender" value="Female">
                                                    <span class="ml-2 text-one ">female</span>
                                                </label>
                                                <label class="inline-flex items-center ml-6">
                                                    <input type="radio" class="form-radio text-two focus:ring-one focus:ring-0" name="accountType"
                                                        v-model="gender" value="Rather Not To Mention" checked>
                                                    <span class="ml-2 text-one">other</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div class="md:flex space-x-5 pt-5">
                                            <label for="birthday" class="block mt-5   text-gray-900 dark:text-one">
                                                startDate:</label>
                                            <input type="date" name="birthday" v-model="year"
                                                class="bg-white  block py-2.5 px-0 md:w-full w-64 text-sm text-one bg-transparent border-0 border-b-2
                                                 border-one appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-one peer"
                                               >
                                        </div>


<label class="block pt-5">
                                            <span class=" text-black ">Country:</span>
                                            <select  v-model="country"
                                                class="form-select block md:w-full w-72 mt-1 bg-[#ECECEC] focus:outline-none focus:ring-one focus:border-one text-one">
                                                <option value="0" label="Select a country ... "  disabled selected="selected">Select a country ... </option>

<option value="AF" label="Afghanistan">Afghanistan</option>
<option value="AX">Aland Islands</option>
<option value="AL">Albania</option>
<option value="DZ">Algeria</option>
<option value="AS">American Samoa</option>
<option value="AD">Andorra</option>
<option value="AO">Angola</option>
<option value="AI">Anguilla</option>
<option value="AQ">Antarctica</option>
<option value="AG">Antigua and Barbuda</option>
<option value="AR">Argentina</option>
<option value="AM">Armenia</option>
<option value="AW">Aruba</option>
<option value="AU">Australia</option>
<option value="AT">Austria</option>
<option value="AZ">Azerbaijan</option>
<option value="BS">Bahamas</option>
<option value="BH">Bahrain</option>
<option value="BD">Bangladesh</option>
<option value="BB">Barbados</option>
<option value="BY">Belarus</option>
<option value="BE">Belgium</option>
<option value="BZ">Belize</option>
<option value="BJ">Benin</option>
<option value="BM">Bermuda</option>
<option value="BT">Bhutan</option>
<option value="BO">Bolivia</option>
<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
<option value="BA">Bosnia and Herzegovina</option>
<option value="BW">Botswana</option>
<option value="BV">Bouvet Island</option>
<option value="BR">Brazil</option>
<option value="IO">British Indian Ocean Territory</option>
<option value="BN">Brunei Darussalam</option>
<option value="BG">Bulgaria</option>
<option value="BF">Burkina Faso</option>
<option value="BI">Burundi</option>
<option value="KH">Cambodia</option>
<option value="CM">Cameroon</option>
<option value="CA">Canada</option>
<option value="CV">Cape Verde</option>
<option value="KY">Cayman Islands</option>
<option value="CF">Central African Republic</option>
<option value="TD">Chad</option>
<option value="CL">Chile</option>
<option value="CN">China</option>
<option value="CX">Christmas Island</option>
<option value="CC">Cocos (Keeling) Islands</option>
<option value="CO">Colombia</option>
<option value="KM">Comoros</option>
<option value="CG">Congo</option>
<option value="CD">Congo, Democratic Republic of the Congo</option>
<option value="CK">Cook Islands</option>
<option value="CR">Costa Rica</option>
<option value="CI">Cote D'Ivoire</option>
<option value="HR">Croatia</option>
<option value="CU">Cuba</option>
<option value="CW">Curacao</option>
<option value="CY">Cyprus</option>
<option value="CZ">Czech Republic</option>
<option value="DK">Denmark</option>
<option value="DJ">Djibouti</option>
<option value="DM">Dominica</option>
<option value="DO">Dominican Republic</option>
<option value="EC">Ecuador</option>
<option value="EG">Egypt</option>
<option value="SV">El Salvador</option>
<option value="GQ">Equatorial Guinea</option>
<option value="ER">Eritrea</option>
<option value="EE">Estonia</option>
<option value="ET">Ethiopia</option>
<option value="FK">Falkland Islands (Malvinas)</option>
<option value="FO">Faroe Islands</option>
<option value="FJ">Fiji</option>
<option value="FI">Finland</option>
<option value="FR">France</option>
<option value="GF">French Guiana</option>
<option value="PF">French Polynesia</option>
<option value="TF">French Southern Territories</option>
<option value="GA">Gabon</option>
<option value="GM">Gambia</option>
<option value="GE">Georgia</option>
<option value="DE">Germany</option>
<option value="GH">Ghana</option>
<option value="GI">Gibraltar</option>
<option value="GR">Greece</option>
<option value="GL">Greenland</option>
<option value="GD">Grenada</option>
<option value="GP">Guadeloupe</option>
<option value="GU">Guam</option>
<option value="GT">Guatemala</option>
<option value="GG">Guernsey</option>
<option value="GN">Guinea</option>
<option value="GW">Guinea-Bissau</option>
<option value="GY">Guyana</option>
<option value="HT">Haiti</option>
<option value="HM">Heard Island and Mcdonald Islands</option>
<option value="VA">Holy See (Vatican City State)</option>
<option value="HN">Honduras</option>
<option value="HK">Hong Kong</option>
<option value="HU">Hungary</option>
<option value="IS">Iceland</option>
<option value="IN">India</option>
<option value="ID">Indonesia</option>
<option value="IR">Iran, Islamic Republic of</option>
<option value="IQ">Iraq</option>
<option value="IE">Ireland</option>
<option value="IM">Isle of Man</option>
<option value="IL">Israel</option>
<option value="IT">Italy</option>
<option value="JM">Jamaica</option>
<option value="JP">Japan</option>
<option value="JE">Jersey</option>
<option value="JO">Jordan</option>
<option value="KZ">Kazakhstan</option>
<option value="KE">Kenya</option>
<option value="KI">Kiribati</option>
<option value="KP">Korea, Democratic People's Republic of</option>
<option value="KR">Korea, Republic of</option>
<option value="XK">Kosovo</option>
<option value="KW">Kuwait</option>
<option value="KG">Kyrgyzstan</option>
<option value="LA">Lao People's Democratic Republic</option>
<option value="LV">Latvia</option>
<option value="LB">Lebanon</option>
<option value="LS">Lesotho</option>
<option value="LR">Liberia</option>
<option value="LY">Libyan Arab Jamahiriya</option>
<option value="LI">Liechtenstein</option>
<option value="LT">Lithuania</option>
<option value="LU">Luxembourg</option>
<option value="MO">Macao</option>
<option value="MK">Macedonia, the Former Yugoslav Republic of</option>
<option value="MG">Madagascar</option>
<option value="MW">Malawi</option>
<option value="MY">Malaysia</option>
<option value="MV">Maldives</option>
<option value="ML">Mali</option>
<option value="MT">Malta</option>
<option value="MH">Marshall Islands</option>
<option value="MQ">Martinique</option>
<option value="MR">Mauritania</option>
<option value="MU">Mauritius</option>
<option value="YT">Mayotte</option>
<option value="MX">Mexico</option>
<option value="FM">Micronesia, Federated States of</option>
<option value="MD">Moldova, Republic of</option>
<option value="MC">Monaco</option>
<option value="MN">Mongolia</option>
<option value="ME">Montenegro</option>
<option value="MS">Montserrat</option>
<option value="MA">Morocco</option>
<option value="MZ">Mozambique</option>
<option value="MM">Myanmar</option>
<option value="NA">Namibia</option>
<option value="NR">Nauru</option>
<option value="NP">Nepal</option>
<option value="NL">Netherlands</option>
<option value="AN">Netherlands Antilles</option>
<option value="NC">New Caledonia</option>
<option value="NZ">New Zealand</option>
<option value="NI">Nicaragua</option>
<option value="NE">Niger</option>
<option value="NG">Nigeria</option>
<option value="NU">Niue</option>
<option value="NF">Norfolk Island</option>
<option value="MP">Northern Mariana Islands</option>
<option value="NO">Norway</option>
<option value="OM">Oman</option>
<option value="PK">Pakistan</option>
<option value="PW">Palau</option>
<option value="PS">Palestinian Territory, Occupied</option>
<option value="PA">Panama</option>
<option value="PG">Papua New Guinea</option>
<option value="PY">Paraguay</option>
<option value="PE">Peru</option>
<option value="PH">Philippines</option>
<option value="PN">Pitcairn</option>
<option value="PL">Poland</option>
<option value="PT">Portugal</option>
<option value="PR">Puerto Rico</option>
<option value="QA">Qatar</option>
<option value="RE">Reunion</option>
<option value="RO">Romania</option>
<option value="RU">Russian Federation</option>
<option value="RW">Rwanda</option>
<option value="BL">Saint Barthelemy</option>
<option value="SH">Saint Helena</option>
<option value="KN">Saint Kitts and Nevis</option>
<option value="LC">Saint Lucia</option>
<option value="MF">Saint Martin</option>
<option value="PM">Saint Pierre and Miquelon</option>
<option value="VC">Saint Vincent and the Grenadines</option>
<option value="WS">Samoa</option>
<option value="SM">San Marino</option>
<option value="ST">Sao Tome and Principe</option>
<option value="SA">Saudi Arabia</option>
<option value="SN">Senegal</option>
<option value="RS">Serbia</option>
<option value="CS">Serbia and Montenegro</option>
<option value="SC">Seychelles</option>
<option value="SL">Sierra Leone</option>
<option value="SG">Singapore</option>
<option value="SX">Sint Maarten</option>
<option value="SK">Slovakia</option>
<option value="SI">Slovenia</option>
<option value="SB">Solomon Islands</option>
<option value="SO">Somalia</option>
<option value="ZA">South Africa</option>
<option value="GS">South Georgia and the South Sandwich Islands</option>
<option value="SS">South Sudan</option>
<option value="ES">Spain</option>
<option value="LK">Sri Lanka</option>
<option value="SD">Sudan</option>
<option value="SR">Suriname</option>
<option value="SJ">Svalbard and Jan Mayen</option>
<option value="SZ">Swaziland</option>
<option value="SE">Sweden</option>
<option value="CH">Switzerland</option>
<option value="SY">Syrian Arab Republic</option>
<option value="TW">Taiwan, Province of China</option>
<option value="TJ">Tajikistan</option>
<option value="TZ">Tanzania, United Republic of</option>
<option value="TH">Thailand</option>
<option value="TL">Timor-Leste</option>
<option value="TG">Togo</option>
<option value="TK">Tokelau</option>
<option value="TO">Tonga</option>
<option value="TT">Trinidad and Tobago</option>
<option value="TN">Tunisia</option>
<option value="TR">Turkey</option>
<option value="TM">Turkmenistan</option>
<option value="TC">Turks and Caicos Islands</option>
<option value="TV">Tuvalu</option>
<option value="UG">Uganda</option>
<option value="UA">Ukraine</option>
<option value="AE">United Arab Emirates</option>
<option value="GB">United Kingdom</option>
<option value="US">United States</option>
<option value="UM">United States Minor Outlying Islands</option>
<option value="UY">Uruguay</option>
<option value="UZ">Uzbekistan</option>
<option value="VU">Vanuatu</option>
<option value="VE">Venezuela</option>
<option value="VN">Viet Nam</option>
<option value="VG">Virgin Islands, British</option>
<option value="VI">Virgin Islands, U.s.</option>
<option value="WF">Wallis and Futuna</option>
<option value="EH">Western Sahara</option>
<option value="YE">Yemen</option>
<option value="ZM">Zambia</option>
<option value="ZW">Zimbabwe</option>
                                            </select>
                                        </label>
                                        <label class="block pt-5">
                                            <span class=" text-black">city:</span>
                                            <select  v-model="city"
                                                class="form-select block md:w-full w-72 mt-1 focus:outline-none focus:ring-one focus:border-one bg-[#ECECEC] text-one">
                                                <option value="0" label="Select a city ... "  disabled selected="selected">Select a city ... </option>
                                                <option value="Fitness">fitness</option>
                                                <option value="Comedy"> comedy</option>
                                            </select>
                                        </label>

                                    </div>
                                    <div class="flex w-full justify-center mt-4">
                                        <button type="submit"
                                            class="md:w-full w-[290px] md:mr-0 mr-6 text-[#ECECEC]   bg-gradient-to-r from-[#B67B46] to-[#82460A] hover:bg-primary-700 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">save
                                        </button>
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
export default {

    data(){
        return{
            file:null,
          imageFile: null,
          visible: false,
              show: false,
              type:[],
             gender:[],

             year:'',
             country:0,
             city:0,

            name:'',
            msg:''

        }
    },
    methods:{
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
        showform(){

              this.visible=! this.visible
              if(this.show){
                this.show=! this.show

              }




         },
         view(){


              this.show=! this.show
              if(this.visible){
                this.visible=! this.visible

              }



         },
         handleProfile(user){


let formData = new FormData();
       formData.append('file', this.file);
       console.log(formData);
       const data={

           formData,
       }


const info={
type:this.type,
name:this.name,
gender:this.gender,
year:this.year,
country:this.country,
city:this.city,


}

//  const data2={
//   data,
//   info

//  }
console.log(info)

this.$store.dispatch("auth/clientProfile", info) . then(function(){
this.$router.push('post')
})
.catch(function(){
this.msg="Please!Fill all of them,all are required"
});




}


    }
}
</script>

