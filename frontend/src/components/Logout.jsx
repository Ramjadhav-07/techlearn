import React from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '../contest/Authprovider';
function Logout() {
    const [authUser,setAuthUser]=useAuth();
const handleLoguot=()=>{
    try {
        setAuthUser({

            ...authUser,user:null
        })
        localStorage.removeItem("Users");
        toast.success("Logout succesfull");
        window.location.reload(); 
        setTimeout(()=>{
          
          

        },3000)
         
    } catch (error) {
        toast.error("Error:"+error.message);
        window.location.reload();
    }
}


  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLoguot}>Logout</button>
    </div>
  )
}

export default Logout
