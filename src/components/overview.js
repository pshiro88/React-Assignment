import React from 'react'

export default function OverView() {
    return (
        <nav className={`text-white border-b  border-gray-300`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Navigation Links */}
                <div className="flex items-center space-x-8  p-4">
                    <a href="#" className="text-sm text-black hover:text-gray-500">Overview</a>
                    <a href="#" className="text-sm text-black hover:text-gray-500">Eligibilty</a>
                    <a href="#" className="text-sm text-black hover:text-gray-500">Preparation</a>
                    <a href="#" className="text-sm text-black hover:text-gray-500">About Treatment</a>
                    <a href="#" className="text-sm text-black hover:text-gray-500">Post Treatment Care</a>
                    <a href="#Rec" className="text-sm text-black hover:text-gray-500">Recovery Tips</a>
                    <a href="#FAQs" className="text-sm text-black hover:text-gray-500">FAQs</a>
                    <a href="#" className="text-sm text-black hover:text-gray-500">Patient Stories</a>
                    {/* Add more navigation links as needed */}
                </div>

                {/* Search Bar */}
                <div className="flex items-center flex-grow justify-end">
                    

                </div>
            </div>
        </nav>
    
  )
}
