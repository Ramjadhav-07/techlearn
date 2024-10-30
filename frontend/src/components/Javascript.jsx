import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Javascript() {
  const [isActive, setIsActive] = useState(true); // Auto-start the timer
  const [elapsedTime, setElapsedTime] = useState(0);
  const alarmTime = 10; // Set your alarm time in seconds

  const fetchJoke = () => {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
      "What did one wall say to the other wall? I'll meet you at the corner!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don’t skeletons fight each other? They don’t have the guts!",
      "Bananas are berries, but strawberries aren’t!",
      "Why did the math book look sad? Because it had too many problems!",
      "A group of flamingos is called a 'flamboyance'!",
      "What do you call fake spaghetti? An impasta!",
      "Did you know that octopuses have three hearts? Two pump blood to the gills, while one pumps it to the rest of the body!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "The longest wedding veil was longer than 63 football fields!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    toast(randomJoke, { autoClose: false });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isActive) {
        setElapsedTime(prevTime => {
          const newTime = prevTime + 1;
          if (newTime === alarmTime) {
            playAlarm();
          }
          return newTime;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, alarmTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const playAlarm = () => {
    const alarmAudio = new Audio('/path/to/your/alarm/sound.mp3'); // Ensure this path is correct
    alarmAudio.play().catch(err => console.error("Audio playback failed:", err));
  };

  return (
    <>
      <ToastContainer />
      <div className='max-w-screen-2xl mt-10 container mx-auto md:px-20 px-4 bg-white shadow-md rounded-lg'>
        <h1 className='text-center text-2xl font-bold mb-4 text-blue-600'>JavaScript Learning Timer</h1>
        <div className='flex justify-center mb-4'>
          <button onClick={fetchJoke} className='mt-6 mx-2 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>Get a 😂 Joke</button>
          <p className='mt-6 mx-2 text-lg'>Time spent: {formatTime(elapsedTime)}</p>
          <button onClick={() => setIsActive(!isActive)} className='mt-6 mx-2 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>
            {isActive ? 'Stop Timer' : 'Start Timer'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 bg-white shadow-md rounded-lg mt-6">
        <h1 className="text-3xl font-bold mb-4">Why Learn JavaScript?</h1>
        <p className="text-lg mb-4">
          JavaScript is a versatile programming language that powers dynamic and interactive elements in web applications. It is essential for students and professionals aiming to excel in web development.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Benefits of JavaScript</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Popular language with applications in both frontend and backend</li>
          <li>Supports multiple frameworks, from Node.js to React and Vue</li>
          <li>Used for game development, mobile apps, and IoT devices</li>
        </ul>

        <p className="text-lg mb-4">
          JavaScript is the most popular programming language in the world, making it a great choice for programmers. Once you learn JavaScript, it helps you develop frontend and backend software using various frameworks like jQuery, Node.js, etc.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Applications of JavaScript Programming</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Client-side validation – verifies user input before server submission</li>
          <li>HTML Manipulation – dynamically adds/deletes HTML elements</li>
          <li>User Notifications – raises pop-ups for visitor notifications</li>
          <li>Back-end Data Loading – allows real-time data loading via Ajax</li>
          <li>Presentations – supports web-based presentations with RevealJS/BespokeJS</li>
          <li>Server Applications – enables fast network applications with Node.js</li>
          <li>Machine Learning – supports ML tasks via ML5.js</li>
          <li>Game Development – enables game graphics with libraries and npm packages</li>
          <li>Mobile Applications – builds mobile apps using React Native</li>
          <li>IoT – adds device functionality (e.g., smartwatches)</li>
          <li>Data Visualization – visualizes data using D3.js</li>
          <li>Cloud Computing – supports serverless platforms like AWS Lambda</li>
        </ul>

        <p className="text-lg">
          JavaScript's versatility has led to widespread usage in client validation, server applications, and beyond. With JavaScript skills, developers gain access to job growth, high pay, and an active community for support.
        </p>
      </div>

      <div className="fixed top-16 left-0 right-0 bg-blue-500 shadow-lg p-2 rounded-lg z-50 flex justify-center items-center">
        <h2 className="text-xs font-bold text-white mr-2">Timer: {formatTime(elapsedTime)}</h2>
        <button onClick={fetchJoke} className='text-xs text-white bg-blue-700 rounded px-2 hover:bg-blue-600 transition'>Get a Joke</button>
      </div>
    </>
  );
}

export default Javascript;
