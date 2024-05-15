import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Hero() {
    const notify = () => toast("This functionality is not yet implemented!");

    return (

        <div className="flex h-auto w-full text-white backgroundImage">
            {/* Left Content */}
            <div className="flex items-center justify-center py-20 flex-1 ">
                <div className="max-w-lg px-4">
                    <h1 className="text-4xl font-bold mb-4">Total Knee Replacement</h1>
                    <p className="text-lg mb-4">Total knee replacement is a surgery to remove and replace the whole damage knee joint with a artificial joint.</p>
                    <button className="bg-[#3DB6FB] hover-[#0aa6ff] text-white font-bold py-2 px-8 my-4"  onClick={notify}>
                        Enquiry Now
                    </button>
                    <ToastContainer/>
                </div>
            </div>
            {/* Right Content (You can add additional content on the right side if needed) */}
            <div className="hidden lg:block flex-1">
                {/* Right side content */}
            </div>
        </div>

    )
}
