import React from 'react'
import Navbar from '../components/navbar';
import Header from '../components/header';
import Hero from '../components/hero';
import OverView from '../components/overview';
import TwoColContent from '../components/twoColContent';
import Eligibility from '../components/eligibility';
import FullCrousal from '../components/fullCrousal'
import Poloroid from '../components/poloroid'
import Hostpitals from '../components/hospitals'
import CTA  from '../components/cta'; 
import Footer  from '../components/footer';

export default function Home() {
  return (
    <div className='overflow:hidden'>
      <Header />
      <Navbar />
      <Hero />
      <OverView />
      <div className=' lg:p-12'>
        <TwoColContent />
        <Eligibility />
      </div>
      <FullCrousal
        images=""
        title="doctors"
        heading="Top Orthopaedic Doctors"
        color="#a1dff7"
        content={<Poloroid />}
      />
      <FullCrousal
        images=""
        title="Hospitals"
        heading="Recommended Hostpitals"
        color="#ffffff"
        content={<Hostpitals />}
      />
      <p className='w-full font-semibold text-sm lg:text-xl py-10 text-center '>Don't Hesitate contact us better <span className='text-red-500 underline'>Explore all Hospitals</span></p>
      <CTA/>
      <Footer/>
    </div>
  )
}
