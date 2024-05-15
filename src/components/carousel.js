import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import quotes from "../assets/images/quotes.png"
import doctor2 from "../assets/images/doctor-2.jpg"
import doctor3 from "../assets/images/doctor-3.jpg"

export default function Carousel() {

    return (
        <div className='h-1/5  container mx-auto py-8 '>
            <h1 className="text-2xl font-bold mb-8 text-left">Patient Stories & Videos</h1>
            <OwlCarousel className='owl-theme ' loop margin={10} items={2} nav responsive={{
                0: {
                    items: 1 // Display one item on smaller screens
                },
                1024: {
                    items: 2 // Display two items on screens larger than or equal to 768px
                }
            }}>
                <div class='w-full min-h-[220px] border-2 p-4 '>
                    <div style={{ display: 'flex', width: '100%' }}>
                        {/* First column (80%) */}
                        <div style={{ flex: '0 0 80%' }}>
                            <h1 className='text-xl font-bold mb-8'>Underwent procedurer for retinal detachment</h1>
                        </div>

                        <div style={{ flex: '0 0 20%' }}>
                            <img src={quotes}></img>
                        </div>
                    </div>
                    <img src={doctor2}></img>

                    <div className='flex pt-8  overflow-hidden'>
                        {/* Avatar */}
                        <div className='h-[50px] w-[50px] mr-4'>
                            <img class="inline-block  rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                        </div>

                        {/* Name */}
                        <div >
                            <h1 className='text-xl font-semibold'>James Alfrad</h1>
                            <h2 className='text-sm text-gray-500'>New York, USA</h2>
                        </div>
                    </div>
                </div>
                <div class='w-full min-h-[220px] border-2 p-4 '>
                    <div style={{ display: 'flex', width: '100%' }}>
                        {/* First column (80%) */}
                        <div style={{ flex: '0 0 80%' }}>
                            <h1 className='text-xl font-bold mb-8'>Underwent procedurer for retinal detachment</h1>
                        </div>

                        <div style={{ flex: '0 0 20%' }}>
                            <img src={quotes}></img>
                        </div>
                    </div>
                    <div className='min-h-[210px]'>

                        <p >Irure velit velit ullamco tempor reprehenderit est adipisicing aute duis. Duis in exercitation pariatur tempor commodo qui voluptate occaecat dolore commodo culpa Lorem. Adipisicing voluptate laboris irure nulla.</p>
                    </div>

                    <div className='flex pt-8  overflow-hidden'>
                        {/* Avatar */}
                        <div className='h-[50px] w-[50px] mr-4'>
                            <img class="inline-block  rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                        </div>

                        {/* Name */}
                        <div >
                            <h1 className='text-xl font-semibold'>James Alfrad</h1>
                            <h2 className='text-sm text-gray-500'>New York, USA</h2>
                        </div>
                    </div>
                </div>
                <div class='w-full min-h-[220px] border-2 p-4 '>
                    <div style={{ display: 'flex', width: '100%' }}>
                        {/* First column (80%) */}
                        <div style={{ flex: '0 0 80%' }}>
                            <h1 className='text-xl font-bold mb-8'>Underwent procedurer for retinal detachment</h1>
                        </div>

                        <div style={{ flex: '0 0 20%' }}>
                            <img src={quotes}></img>
                        </div>
                    </div>
                    <img src={doctor2}></img>

                    <div className='flex pt-8  overflow-hidden'>
                        {/* Avatar */}
                        <div className='h-[50px] w-[50px] mr-4'>
                            <img class="inline-block  rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                        </div>

                        {/* Name */}
                        <div >
                            <h1 className='text-xl font-semibold'>James Alfrad</h1>
                            <h2 className='text-sm text-gray-500'>New York, USA</h2>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </div>
    );
};

