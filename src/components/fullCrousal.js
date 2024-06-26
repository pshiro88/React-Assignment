import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function FullCrousal({ images, title, heading, content, color }) {
    return (
        <div className={`flex flex-col bg-[${color}] h-auto w-full justify-center items-center py-16`}>
            <h1 className='italic font-semibold text-xl text-red-500'>{title}</h1>
            <h1 className='italic font-semibold text-3xl '>{heading}</h1>
            <OwlCarousel className='owl-theme px-2 md:px-20 mt-10' loop margin={50} items={3} nav responsive={{
                0: {
                    items: 1 // Display one item on smaller screens
                },
                1024: {
                    items: 3 // Display two items on screens larger than or equal to 768px
                }
            }}>
                {content}
            </OwlCarousel>
        </div>
    )
}
