import React from 'react'

const Signup = () => {
  return (
    <div>
    

<div class="max-w-screen-xl mt-40 px-4 py-16 mx-auto sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto text-left">
    <h1 class="text-2xl font-bold sm:text-3xl">Create an account</h1>

  </div>

  <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter email"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-center">
     
      <button
        type="submit"
        class="inline-block w-72 py-4 ml-3 text-base text-white bg-red-500 rounded-lg font-semibold my-7"
      >
        Get Started
      </button>
    </div>
    <div className='text-gray-400 flex justify-center' >
        <hr className='w-28 inline-flex m-3'/> or <hr className='w-28 inline-flex m-3'/>
    </div>
    <div class="flex items-center justify-center">
     
     <button
       type="submit"
       class="inline-block w-72 py-3 ml-3 text-base text-black bg-gray-200 rounded-lg font-semibold my-7"
     >
        <svg className='inline mr-4' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.8125C8.26942 2.8125 2.8125 8.26942 2.8125 15C2.8125 21.7306 8.26942 27.1875 15 27.1875C21.7306 27.1875 27.1875 21.7306 27.1875 15C27.1875 14.185 27.104 13.3409 26.9508 12.5678C26.8638 12.1288 26.4787 11.8125 26.0312 11.8125H15C14.4822 11.8125 14.0625 12.2322 14.0625 12.75V17.25C14.0625 17.7678 14.4822 18.1875 15 18.1875H19.8535C19.5022 18.7225 19.0655 19.196 18.5627 19.5883C18.5554 19.5929 18.5482 19.5975 18.541 19.6023L18.5393 19.6034L18.5406 19.6054C17.5608 20.3624 16.3331 20.8125 15 20.8125C11.7901 20.8125 9.1875 18.2099 9.1875 15C9.1875 11.7901 11.7901 9.1875 15 9.1875C16.4796 9.1875 17.826 9.74457 18.855 10.6599C19.2259 10.9899 19.7899 10.9734 20.141 10.6223L23.323 7.44029C23.5029 7.26043 23.602 7.0152 23.5975 6.76088C23.593 6.50655 23.4854 6.26497 23.2993 6.09154C21.1254 4.06557 18.2124 2.8125 15 2.8125ZM19.0025 21.5615C17.8381 22.2754 16.4683 22.6875 15 22.6875C12.115 22.6875 9.60092 21.0979 8.28598 18.7469L6.18962 20.3621C8.00024 23.3305 11.2689 25.3125 15 25.3125C17.2765 25.3125 19.3808 24.5747 21.0868 23.3252L19.0025 21.5615ZM22.5068 22.0705C24.2463 20.2243 25.3125 17.7366 25.3125 15C25.3125 14.5656 25.2844 14.1201 25.2316 13.6875H15.9375V16.3125H21.3579C21.6624 16.3125 21.9478 16.4603 22.1235 16.7089C22.2992 16.9575 22.3433 17.276 22.2417 17.5629C21.8661 18.6236 21.2648 19.5784 20.4951 20.3683L22.5068 22.0705ZM6.27448 9.50118C8.10123 6.60875 11.3264 4.6875 15 4.6875C17.3647 4.6875 19.5382 5.48953 21.2786 6.83305L19.4045 8.70713C18.159 7.83149 16.6416 7.3125 15 7.3125C12.1952 7.3125 9.74098 8.81491 8.3984 11.0588L6.27448 9.50118ZM5.41258 11.1943C4.94471 12.3718 4.6875 13.6559 4.6875 15C4.6875 16.2823 4.92158 17.5099 5.34934 18.6425L7.55936 16.9398C7.39824 16.3201 7.3125 15.6701 7.3125 15C7.3125 14.242 7.42221 13.5097 7.62662 12.818L5.41258 11.1943Z" fill="black"/>
</svg>

       Sign up with Google
     </button>
   </div>
  </form>
</div>

    </div>
  )
}

export default Signup