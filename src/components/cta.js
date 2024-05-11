import React from 'react'

export default function CTA() {
    return (
        <div className='flex flex-col bg-[#48b9fb] p-10 items-center min-h-[300px]'>
            <h1 className='text-white text-xl font-semibold '>Stay healthy and strong to enjoy life</h1>
            <h1 className='text-white text-5xl font-bold py-5'>We have a team of healthcare experts</h1>
            <div className='flex justify-center items-center'>
                <button className="bg-[#25719d] hover-[#0aa6ff] text-white font-bold py-2 px-8 my-4">
                    Enquiry Now
                </button>
                <h1 className='text-white text-5xl px-10'>|</h1>
                <h1 className='text-white text-2xl font-semibold  py-2 px-8 my-4'>+91 816 984 0285</h1>
            </div>

        </div>
    )
}
