import React from 'react'
import Logo from '../assets/images/logo.jpg'

export default function Header() {
    return (

        <header className=" text-white p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center ps-8">
                <img src={Logo} alt="Logo" className="h-14" />
                {/* Add other logos here if needed */}
            </div>

            {/* Promotional elements */}
            <div className="flex items-center space-x-4">
                {/* Phone icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 13V9a4 4 0 00-4-4H9a4 4 0 00-4 4v4m8 0h3m-4.373 9C14.585 21.399 12.35 22 12 22c-.35 0-2.585-.601-3.627-1M5.757 14.243c-1.304-1.304-2.071-3.12-2.121-5.025-.046-1.865.595-3.573 1.636-4.615a5.929 5.929 0 014.617-1.635c1.905.05 3.722.817 5.026 2.121l-2.829 2.829a1 1 0 101.414 1.414l2.829-2.829a5.952 5.952 0 001.733-4.243 5.954 5.954 0 00-1.733-4.243A5.954 5.954 0 008.122.05c-1.905-.05-3.722-.817-5.026-2.121L.267.778A1 1 0 101.68 2.192l2.829-2.829C5.902-.208 7.95-.762 9.877.164c2.28.707 3.957 2.384 4.664 4.664.926 2.39.264 5.092-1.604 6.96a8.056 8.056 0 01-6.96 1.604z"
                    />
                </svg>
                {/* Add other promotional elements here if needed */}
            </div>
        </header>
    );
};



