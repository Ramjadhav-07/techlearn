 import React from 'react'
 import Home from './Home/Home';
 import {Navigate,Routes,Route} from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Aboutus from './About/Aboutus';
import Contactus from './Contact/Contactus';
import Dsacourse from './Dsa/Dsacourse';
import Javacourse from './Java/Javacourse';
import { useAuth } from "./contest/Authprovider";
import Login from './components/Login';
import Pythoncourse from './Python/Pythoncourse';
import Javascprit1 from './Javascript1/Javascprit1';
import Cprogramcourse from './Cprogram/Cprogramcourse';


 function App() {
   const [authUser,setAuthUser]=useAuth();
   console.log(authUser);
   return (
      <>
      
      {/*<Home/>
      <Course/>*/}
      <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="/course"element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
         <Route path="/signup"element={<Signup/>}/>
         <Route path="/us"element={<Aboutus/>}/>
         <Route path="/contact"element={<Contactus/>}/>
         <Route path="/Dsa"element={<Dsacourse/>}/>
         <Route path="/java"element={<Javacourse/>}/>
         <Route path="/login"element={<Login/>}/>
         <Route path="/Python"element={<Pythoncourse/>}/>
        <Route path="/Javascript"element={<Javascprit1/>}/>
        <Route path="/Cprogram"element={<Cprogramcourse/>}/>
      </Routes>
      </>
   )
 }
 
 export default App;
 