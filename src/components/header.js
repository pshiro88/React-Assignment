import React from 'react'
import Logo from '../assets/images/logo.jpg'
import DoctorsLogo from '../assets/images/doctor-logo.png'
import MedicalOpinion from '../assets/images/medical-opinion.png'
import CallUs from '../assets/images/call-us.png'
import EmailUs from '../assets/images/email.png'
import Flag from '../assets/images/flag.png'

export default function Header() {
    return (

        <header className=" text-white p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center ps-8">
                <img src={Logo} alt="Logo" className="h-14" />
                {/* Add other logos here if needed */}
            </div>

            {/* Promotional elements */}
            <div className="flex items-center ps-8 space-x-12">
                <img src={DoctorsLogo} alt="Logo" className="h-14" />
                <img src={MedicalOpinion} alt="Logo" className="h-14" />
                <img src={CallUs} alt="Logo" className="h-14" />
                <img src={EmailUs} alt="Logo" className="h-14" />
                <img src={Flag} alt="Logo" className="h-14" />

                {/* Add other logos here if needed */}
            </div>

        </header>
    );
};



