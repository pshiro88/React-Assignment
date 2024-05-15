import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CTA() {
    const notify = () => toast("This functionality is not yet implemented!");

    return (
        <div className='flex flex-col bg-[#48b9fb] p-10 items-center min-h-[300px]'>
            <h1 className='text-white text-md lg:text-xl font-semibold '>Stay healthy and strong to enjoy life</h1>
            <h1 className='text-white text-3xl lg:text-5xl font-bold py-5 text-center'>We have a team of healthcare experts</h1>
            <div className='flex justify-center items-center flex-col lg:flex-row'>
                <button className="bg-[#3DB6FB] hover-[#0aa6ff] text-white font-bold py-2 px-8 my-4" onClick={notify}>
                    Enquiry Now
                </button>
                <ToastContainer />
                <h1 className='text-white text-5xl px-10 hidden lg:block'>|</h1>
                <h1 className='text-white  text-xl lg:text-2xl font-semibold  py-2 px-8 my-4'>+91 816 984 0285</h1>
            </div>

        </div>
    )
}
