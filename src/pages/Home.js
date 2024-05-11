import React from 'react'
import Navbar from '../components/navbar';
import Header from '../components/header';
import Hero from '../components/hero';
import OverView from '../components/overview';
import TwoColContent from '../components/twoColContent';
import Eligibility from '../components/eligibility';


export default function Home() {
  return (
    <>
    <Header />
    <Navbar/>
    <Hero />
    <OverView/>
    <div className='p-12'>
    <TwoColContent/>
    <Eligibility/>
    
    </div>
  </>
  )
}
