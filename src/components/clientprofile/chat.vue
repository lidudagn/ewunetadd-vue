Lidu, [11/15/2022 3:02 PM]
<template>
  <div class="flex gap-x-20 md:px-80">
    <div class="flex flex-col w-76 border-[0.5px] ">
      <!-- search compt -->
      <form class="p-3 border-b-[0.25px]">
        <label class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
              viewBox="0 0 30 30">
              <path
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
              </path>
            </svg>
          </span>
          <input
            class="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none"
            placeholder=" search" type="text" />
        </label>
      </form>
      <!-- end search compt -->
      <!-- user list -->
      <div class=" overflow-y-auto  ">
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
          <div class="w-1/4">
            <img src="./assets/logo1.jpg" class="object-cover h-12 w-12 rounded-full" alt="" />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">hayat hospital</div>
            <span class="text-gray-500">yes that is good</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img src="./assets/logo2.jpg" class="object-cover h-12 w-12 rounded-full" alt="" />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">selam events</div>
            <span class="text-gray-500">Hi , can we talk</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-one rounded">
          <div class="w-1/4">
            <img src="./assets/logo1.jpg" class="object-cover h-12 w-12 rounded-full" alt="" />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">coca cola</div>
            <span class="text-gray-500">i am good</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img src="./assets/kea3.jpg" class="object-cover h-12 w-12 rounded-full" alt="" />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">eva decor</div>
            <span class="text-gray-500"> okay</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img src="./assets/logo4.jpg" class="object-cover h-12 w-12 rounded-full" alt="" />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">ehio cafe</div>
            <span class="text-gray-500">i will call you</span>
          </div>
        </div>

        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img src="./assets/logo1.jpg" class="object-cover h-12 w-12 rounded-full" alt="" />
          </div>

Lidu, [11/15/2022 3:02 PM]
</div>
      </div>
      <!-- end user list -->
    </div>
    <div class="w-6/12 `">
      <div class="w-screen mx-auto">
        <div class="max-w-2xl border-two rounded">
          <div>
            <div class="w-full">
              <div class="relative flex items-center p-3 border-b border-one">
                <img class="object-cover w-10 h-10 rounded-full" src="./assets/logo2.jpg" alt="username" />
                <span class="block ml-2 font-bold text-gray-600">cocacola</span>
                <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                </span>
              </div>
              <div class="relative w-full p-6 overflow-y-auto h-screen">

                <ul class="space-y-2">
                  <li class="flex justify-start">
                    <div class="relative max-w-xl px-4 py-2 text-one rounded shadow">
                      <span class="block">1000 birr for package 3</span>
                    </div>
                  </li>
                  <li class="flex justify-center">
                    <div class="relative max-w-xl px-4 py-2 text-one bg-gray-100 rounded shadow">
                      <span class="block">2000?</span>
                    </div>
                  </li>
                  <!-- <li class="flex justify-end">
                    <div class="relative max-w-xl px-4 py-2 text-one bg-gray-100 rounded shadow">
                      <span class="block">accept</span>
                    </div>
                  </li> -->
                  <li class="flex justify-start">
                    <div class="relative max-w-xl px-4 py-2 text-one rounded shadow">
                      <span class="block">accept
                      </span>
                    </div>
                  </li>
                </ul>

              </div>

              <div class="flex items-center justify-between w-full p-3 border-t border-gry-200">


                <input type="text" placeholder="Message"
                  class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message" required />

                <button type="submit">
                  <svg class="w-5 h-5 text-one  origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>