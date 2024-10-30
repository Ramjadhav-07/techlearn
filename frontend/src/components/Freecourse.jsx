import React from 'react';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';


function Freecourse() {
    const filterData=list.filter((data)=>data.category==="paid")
    var settings = {
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
  return (<> 
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white'>
         <div><h1 className='font-semibold text-xl pb-2'> BESTCOURSES</h1></div>
         
        <div className=' dark:bg-slate-900 dark:text-white'>
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
  )
}

export default Freecourse;