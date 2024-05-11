import React from 'react'
import Logo from '../assets/images/logo-white.png'

export default function Footer() {
    return (
        <div className='bg-[#12354a]'>
            <div className='flex justify-between   p-20 items-start min-h-[400px]'>
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Important Links</h2>
                    <ul className="pl-4 text-white leading-7">
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Home</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> About Us</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Services</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Portfolio</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Contact Us</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Blog</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Careers</li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Top Hospitals</h2>
                    <ul className="pl-4 text-white leading-7">
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Apollo Hospital Delhi</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Medanta Hospital Gurgaon</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Max Hospital Delhi</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Jaslok hospital Mumbai</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Artemis hospital Gurgaon</li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Speciality Treatments</h2>
                    <ul className="pl-4 text-white leading-7">
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Apollo Hospital Delhi</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Medanta Hospital Gurgaon</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Max Hospital Delhi</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Jaslok hospital Mumbai</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Artemis hospital Gurgaon</li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Medical Tourism</h2>
                    <ul className="pl-4 text-white leading-7">
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Apollo Hospital Delhi</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Medanta Hospital Gurgaon</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Max Hospital Delhi</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Jaslok hospital Mumbai</li>
                        <li className='font-sm'><span className='text-[#66c2fb] font-bold'>-</span> Artemis hospital Gurgaon</li>
                        {/* Add more list items as needed */}
                    </ul>
                </div>
            </div>
            <div className='border-2 text-white border-gray-500 w-auto h-0 ms-20 me-20 ' ></div>
            <div className="flex min-h-[200px] justify-between items-center ms-20 me-20 pt-8 pb-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Logo" className="h-24" />
                </div>

                {/* Text with maximum area */}
                <div className="flex-grow text-white p-2">
                    <h1 className='text-xl font-bold'>About Aafiya mediretreats</h1>
                    <p>Aliquip aute ullamco culpa pariatur reprehenderit culpa elit id. Pariatur in sunt ex dolor consequat tempor voluptate mollit ex commodo adipisicing amet consequat enim. Amet et aute dolor nulla sit eu officia ipsum eiusmod tempor nulla Lorem proident.</p>
                    <br></br>
                    <p>Aliquip aute ullamco culpa pariatur reprehenderit culpa elit id. Pariatur in sunt ex dolor consequat tempor voluptate mollit ex commodo adipisicing amet consequat enim. Amet et aute dolor nulla sit eu officia ipsum eiusmod tempor nulla Lorem proident.</p>
                </div>

                {/* Quick links */}
                <div className="flex-shrink-0 min-w-80 flex flex-col items-end justify-end">
                    <h1 className='text-3xl text-white font-white font-bold py-5'>Follow us On</h1>
                    <div className='flex flex-row space-x-5'>
                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </span>

                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </span>

                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ea4335]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </span>

                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path
                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                        </span>
                    </div>
                    <h1 className='text-xl text-white font-white font-bold pt-6'>Customer Service</h1>
                    <h1 className='text-xl text-blue-400 font-white font-bold '>+91 8169 840285</h1>
                </div>
            </div>

            <header className="  text-white bg-[#3db5ff] p-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center ps-8">
                    <p>Copywrite Aafia mediretreats. All Right Reserved. Designed by Ideamagix</p>
                </div>

                {/* Promotional elements */}
                <div className="flex items-center pe-8 space-x-12">
                    <p>Terms And condition</p>
                    <p>Privacy Policy</p>
                    {/* Add other logos here if needed */}
                </div>

            </header>
        </div>
    )
}
