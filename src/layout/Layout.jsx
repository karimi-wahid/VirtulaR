import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import WorkFlow from '../components/WorkFlow'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero />
      <Feature />
      <WorkFlow />
      <Pricing />
      <Testimonials />
    </div>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Footer />
    </div>
    </>
  )
}

export default Layout