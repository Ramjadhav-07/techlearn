import React, { useState } from 'react';
import banner from '../../public/banner3.png';
import { Link } from 'react-router-dom';
 
 
 

function Banner() {
  const [notes, setNotes] = useState('');

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Define your courses array with specific links for each course
  const courses = [
    { name: 'Java', level: 'Beginner', interested: 100, rating: 4.5, image: 'JAVA1.jpg', link: '/java' },
    { name: 'Python', level: 'Intermediate', interested: 200, rating: 4.7, image: 'PYTHON1.jpg', link: '/python' },
    { name: 'C', level: 'Advanced', interested: 150, rating: 4.9, image: 'C1.jpg', link: '/C' },
    // Add more courses as needed
  ];

  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className='text-4xl font-bold'>
              "Unlock Your Potential: Transformative Online Learning<span className='text-pink-500'> at Your Fingertips"</span>
            </h1>
            <p className='text-xl'>
              "Empower Yourself Anytime, Anywhere: Elevate Your Skills and Knowledge with Our Comprehensive Online Learning Platform"
            </p>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2">
          <img src={banner} className="w-full h-auto mt-11" alt="Banner" />
        </div>
      </div>
      {/* Course Section */}
      <div className="max-w-screen-xl mx-auto px-6 my-10 ">
        <h2 className="font-bold text-3xl mb-6">Techlearn Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 card w-96 bg-base-100 shadow-xl mt-3 my-3 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white">
              <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold text-lg">{course.name}</h3>
              <p>Level: {course.level}</p> 
              <p>Interested techies: {course.interested}</p>
              <p>Rating: {course.rating}</p>
              
              {/* Update the Link to use the course-specific link */}
              <Link to={course.link} className='link link-hover'>
                <button className="btn mt-4 btn-primary badge badge-outline hover:bg-pink-500 hover:text-white duration-500 cursor-pointer p-3 dark:bg-slate-900 dark:text-white text-black">
                  View Course
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section  
      <div className="max-w-screen-xl mx-auto px-6 my-10">
        <h2 className="font-bold text-3xl mb-6">Course Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Trending Technologies', 'DSA / Placements', 'Development / Testing', 'Machine Learning / Data Science', 'Programming Languages', 'Cloud / DevOps', 'GATE'].map((category, index) => (
            <div key={index} className="bg-gray-100 text-center p-4 rounded-lg shadow-md">
              {category}
            </div>
          ))}
        </div>
      </div>*/}
    </>
  );
}

export default Banner;
