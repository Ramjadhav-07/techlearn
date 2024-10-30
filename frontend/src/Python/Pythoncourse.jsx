import React from 'react'
import Navbar from '../components/Navbar'
import Python from '../components/Python'
import Footer from '../components/Footer'
function Pythoncourse() {
  return (
    <>
      <Navbar/>
    <div  className='min-h-screen max-w-screen-2xl mt-28 container max-auto md:px-20 px-4 top-0 left-0 right-0 z-50'> 
    <Python/>
    </div>
    <Footer/>
    </>
  )
}

export default Pythoncourse
