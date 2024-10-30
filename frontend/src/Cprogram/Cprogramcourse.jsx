import React from 'react'
import Navbar from '../components/Navbar'
import Cprogram from '../components/Cprogram'
import Footer from '../components/Footer'

function Cprogramcourse() {
  return (
    <>
      <Navbar/>
    <div  className='min-h-screen max-w-screen-2xl mt-28 container max-auto md:px-20 px-4 top-0 left-0 right-0 z-50'> 
    <Cprogram/>
    </div>
    <Footer/>
    </>
  )
}

export default Cprogramcourse
