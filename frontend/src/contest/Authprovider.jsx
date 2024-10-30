{/*import React, { useContext, useState } from 'react'
import  { createContext } from 'react';

export const AuthContext=createContext();
export default function Authprovider(children) {
   
  const initialAuthUser=localStorage.getItem("Users");
  const [authUser,setAuthUser]=useState(
    initialAuthUser ? json.parse(initialAuthUser) :undefined
  )
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>{children}</AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext);*/}


import React, { useContext, useState, createContext } from 'react';

export const AuthContext = createContext();

export default function Authprovider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
