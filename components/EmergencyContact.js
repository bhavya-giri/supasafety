import React from 'react'

const EmergencyContact = () => {
  return (
    <div>
        <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>
          <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
            <div>
              <label class="sr-only" for="phone">Your Relation</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Your Relation"
                type="text"
                id="relation"
              />
            </div>
    </div>
  )
}

export default EmergencyContact