import React, { useState, useEffect } from 'react';
import list from "../../public/list.json";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Course() {
  // For backend
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/course");
        console.log(res.data);
        setCourse(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCourse();
  }, []);

  const filterData = list.filter(data => data.category === "paid");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Fetch joke
  const fetchJoke = () => {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
      "What did one wall say to the other wall? I'll meet you at the corner!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    toast(randomJoke, { autoClose: false });
  };

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <ToastContainer />
      <div className='max-w-screen-2xl mt-28 container max-auto md:px-20 px-4 top-0 left-0 right-0 z-50'>
        <div>
          <h1 className='text-center'>
            <span className='text-red-500 text-4xl text-bold'>tech</span><span className='text-blue-500'>learn</span>
            <p className='text-pink-500'>Interactive Live & Self-Paced Courses</p>
            <button onClick={fetchJoke} className='mt-6 mx-2 text-2xl'>click me for 😂 joke and fact</button>
          </h1>
        </div>

        {/* Video Display Section */}
<div className='text-center max-w-screen-2xl mt-10 container mx-auto md:px-10 px-2 flex justify-center items-center'>
  <div>
    <h2 className='text-2xl font-bold mb-4'> </h2>
    <video width="560" height="315" controls autoPlay  muted loop>
      <source src="video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


        <div className='text-center max-w-screen-2xl mt-10 container max-auto md:px-20 px-4'>
          <span className='text-green-500 text-4xl text-bold'>Get hands-on with in-demand tech skills.</span>
          <span className='text-blue-500 text-4xl text-bold'> Achieve your career goals with our comprehensive course!</span>
        </div>

        <div className='text-center max-w-screen-2xl mt-10 container mx-auto md:px-10 px-2'>
          <h1 className='text-2xl font-bold'>Available Courses:</h1>
          <ul className='list-disc list-inside mt-4' style={{ paddingLeft: '1.5rem' }}>
            <Link to='/java'><li className='text-lg text-blue-500 mb-2 hover:underline hover:text-blue-700'>Java</li></Link>
            <Link to='/python'><li className='text-lg text-blue-500 mb-2 hover:underline hover:text-blue-700'>Python</li></Link>
            <Link to='/Cprogram'><li className='text-lg text-blue-500 mb-2 hover:underline hover:text-blue-700'>C</li></Link>
            <Link to='/javascript'><li className='text-lg text-blue-500 mb-2 hover:underline hover:text-blue-700'>JavaScript</li></Link>
          </ul>
        </div>

        <div className='max-w-screen-2xl mt-28 container max-auto md:px-20 px-4'> 
             


        <Slider {...settings}>
         
         <div className="card w-96 bg-base-100 shadow-xl mt-3 my-3 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
    <figure><img src=" https://tse1.mm.bing.net/th?id=OIP.hykhjUR6lZXEz_C7cot3dwHaEo&pid=Api&P=0&h=180" alt="java" /></figure>
    <div className="card-body">
      <h2 className="card-title">
      java
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>its best Course grabit now!</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white ">FREE</div> 
      <Link to='/java'>   <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white">VIEW</div> </Link>
      </div>
    </div>
  </div>
  <div className="card w-96 bg-base-100  shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
    <figure><img src=" https://tse2.mm.bing.net/th?id=OIP.w_C5b8sg6KbxD2f0SIOSnQHaE-&pid=Api&P=0&h=180" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        python
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>its best Course grabit now! </p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white">FREE</div> 
        <Link to='/python'> <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white">VIEW</div></Link> 
      </div>
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
    <figure><img src="C1.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        c
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p> its best Course grabit now!</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white">FREE</div> 
        <Link to='/c'> <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white">VIEW</div></Link > 
      </div>
    </div>
  </div>
  <div className="card w-96  p-3bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
    <figure><img src=" https://tse4.mm.bing.net/th?id=OIP.Oag0dh4MINdG_qxOzJMoiwHaIB&pid=Api&P=0&h=180" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        javascript
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p> its best Course grabit now!</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white dark:border">FREE</div> 
        <Link to='/javascript'>  <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3  dark:bg-slate-900 dark:text-white dark:border">VIEW</div></Link> 
      </div>
    </div>
    </div>
        </Slider>
        </div>
      </div>
    </>
  );
}

export default Course;
