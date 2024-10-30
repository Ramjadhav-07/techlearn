 import React from 'react'
import Navbar from '../components/Navbar';
import Dsa from '../components/Dsa';
import Footer from '../components/Footer';
 
 function Dsacourse() {
   return (
     <>
     <Navbar/>
     <div  className='min-h-screen max-w-screen-2xl mt-28 container max-auto md:px-20 px-4 top-0 left-0 right-0 z-50'> 
     <Dsa/>
     </div>
     <Footer/>
     </> 
   )
 }
 
 export default Dsacourse;
 