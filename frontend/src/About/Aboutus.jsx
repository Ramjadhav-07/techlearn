import React from 'react'
import Us from '../components/us';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function Aboutus() {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen'> 
        <Us/>
        </div>
         
        <Footer/>
        </>
     )
}

export default Aboutus;
