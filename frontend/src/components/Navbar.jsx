import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../contest/Authprovider';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a href="/" className='dark:bg-slate-900 dark:text-white'>Home</a></li>
      <li><a href="/course" className='dark:bg-slate-900 dark:text-white'>Course</a></li>
      <li><a href="/contact" className='dark:bg-slate-900 dark:text-white'>Contact</a></li>
      <li><a href="/us" className='dark:bg-slate-900 dark:text-white'>About</a></li>
    </>
  );

  // Notebox state
  const [notes, setNotes] = useState('');
  const [isNoteboxOpen, setNoteboxOpen] = useState(false);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNotes = () => {
    const blob = new Blob([notes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'userNotes.txt'; // Name of the file to be downloaded
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("Notes saved to your desktop!");
  };

  const toggleNotebox = () => {
    setNoteboxOpen(!isNoteboxOpen);
  };

  return (
    <>
      <div className={`max-w-screen-2xl container max-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-300 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-7 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <a className="text-3xl font-bold cursor-pointer">techlearn</a>
          </div>
          <div className="navbar-end space-x-3 flex items-center">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>
            {/*<div className="hidden md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="px-3 py-2 border rounded-md flex items-center gap-2 grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
              </label>
            </div>*/}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller dark:bg-slate-900 dark:text-white" />
              <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2 0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-7,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,7.05,7.05,0,0,1-3.37.73A8.15,7.15,0,0,1,7.08,5.49a8.59,7.59,0,0,1,.25-2A1,1,0,0,0,7,2.36,7.14,7.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-7.5,6.69A8.14,7.14,0,0,1,7.08,5.22v.27A10.15,7.15,0,0,0,17.22,15.63a9.79,7.79,0,0,0,2.1-.22A8.11,7.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className="flex items-center">
              <button onClick={toggleNotebox} className="btn btn-secondary border-black bg-black mx-2">
                {isNoteboxOpen ? "Hide Notebox" : "Show Notebox"}
              </button>
              {
                authUser ? (
                  <Logout />
                ) : (
                  <><a className="bg-black text-white px-3 py-2 rounded-md hover:bg-pink-600 duration-300 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a><Login /></>
                )
              }
            </div>
          </div>
        </div>
      </div>

      {/* Notebox Overlay */}
      {isNoteboxOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="border border-gray-300 rounded-md p-4 bg-gray-800 text-white shadow-lg">
            <h2 className="font-bold text-lg mb-2">Practice and Note Making</h2>
            <textarea
              value={notes}
              onChange={handleNotesChange}
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-900 text-white"
              placeholder="Write your notes or practice here..."
            />
            <button className="btn mt-2 btn-primary" onClick={saveNotes}>Save Notes</button>
            <button className="btn mt-2 btn-secondary" onClick={toggleNotebox}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
