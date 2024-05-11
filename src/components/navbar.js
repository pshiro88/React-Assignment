import React from 'react'
import {SearchIcon} from '@heroicons/react/outline';

export default function Navbar() {
  return (
    <nav className={`text-white bg-[#3DB6FB]`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex items-center space-x-8  p-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About Us</a>
          <a href="#" className="text-white hover:text-gray-300">Treatments +</a>
          <a href="#" className="text-white hover:text-gray-300">Destinations +</a>
          <a href="#" className="text-white hover:text-gray-300">Hospitals</a>
          <a href="#" className="text-white hover:text-gray-300">FAQs</a>
          <a href="#" className="text-white hover:text-gray-300">Blogs</a>
          <a href="#" className="text-white hover:text-gray-300">Request A Quote</a>
          {/* Add more navigation links as needed */}
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-grow justify-end">
          <div className='bg-[#107DF7] h-full p-4'>
            <div className="flex items-center">
              {/* Search icon */}
              <SearchIcon className="w-6 h-6 text-white" />
              {/* Input field */}
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 ml-2 w-full rounded-lg focus:outline-none bg-transparent placeholder-white"
              />
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
