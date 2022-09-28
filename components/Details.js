import React from 'react'
import EmergencyContact from './EmergencyContact'

const Details = () => {

return (
    <div className='pt-6 text-center'>
        <h1 className='text-3xl text-red-500'>Welcome to SupaSafety</h1>
    

<section>
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

      <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Age</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Age"
                type="number"
                id="age"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Gender</label>
              <select className="w-full p-3 text-sm border-gray-200 rounded-lg"
                name="Gender"
                id="Gender">
            <option value="" disabled selected>Gender</option>

                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='others'>Others</option>
                <option value='rather'>Rather not say</option>
              </select>
           
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          
<div className='mt-6 text-left'>
<h2>Emergency Contact 1</h2>
<EmergencyContact/>
<h2>Emergency Contact 2</h2>
<EmergencyContact/>
</div>
          <div className="mt-4">
         
            <button
              type="submit"
              className="inline-flex items-center justify-center w-1/3 px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
            >
              

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Details
