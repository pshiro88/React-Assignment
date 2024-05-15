import {React , useState} from 'react'
import { SearchIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`text-white bg-[#3DB6FB] flex `}>
      <div className="max-w-7xl mx-auto  hidden lg:flex justify-between items-center">
        {/* Navigation Links */}
        <div className="items-center space-x-8  p-4">
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

        

      </div>

      <div class=" px-4 py-3 flex items-center justify-between md:hidden ">
          <button id="mobileMenuButton" class="text-white focus:outline-none focus:text-white" onClick={toggleMenu}>
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

       {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 absolute bg-[#3DB6FB] pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Treatments</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Destinations</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Hospital</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">FAQs</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</a>
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Request A Quote</a>

          </div>
        </div>
      )}
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
    </nav >
  )
}
