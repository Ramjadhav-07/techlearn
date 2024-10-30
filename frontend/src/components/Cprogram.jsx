import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cprogram() {
  const [isActive, setIsActive] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const alarmTime = 10;

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
    const alarmAudio = new Audio('/path/to/your/alarm/sound.mp3');
    alarmAudio.play().catch(err => console.error("Audio playback failed:", err));
    
  };

  return (
    <>
      <ToastContainer />
      <div className='max-w-screen-2xl mt-10 container mx-auto md:px-20 px-4 bg-white shadow-md rounded-lg'>
        <h1 className='text-center text-2xl font-bold mb-4 text-blue-600'>C Language Learning Timer</h1>
        <div className='flex justify-center mb-4'>
          <button onClick={fetchJoke} className='mt-6 mx-2 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>Get a 😂 Joke</button>
          <p className='mt-6 mx-2 text-lg'>Time spent: {formatTime(elapsedTime)}</p>
          <button onClick={() => setIsActive(!isActive)} className='mt-6 mx-2 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>
            {isActive ? 'Stop Timer' : 'Start Timer'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 bg-white shadow-md rounded-lg mt-6">
        <h1 className="text-3xl font-bold mb-4">What is C?</h1>
        <p className="text-lg mb-4">
          C is a general-purpose programming language created by Dennis Ritchie at Bell Laboratories in 1972.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Why Learn C?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Popular and versatile language, foundational in computer science.</li>
          <li>Fast execution, essential for operating systems and embedded systems.</li>
          <li>Syntax similarity to many other languages, such as Java and C++.</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">Getting Started with C</h2>
        <p>Start using C with a text editor and a compiler, such as GCC. IDEs like Code::Blocks, Eclipse, and Visual Studio offer additional features for editing and debugging.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">C Example Code</h2>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            #include {'<stdio.h>'}<br />
            int main() {'{'}<br />
            {'  '}printf("Hello World!");<br />
            {'  '}return 0;<br />
            {'}'}
          </code>
        </pre>

        <p>Save the code above as <strong>myfirstprogram.c</strong> and run it using your IDE or terminal.</p>
      </div>

      <div className="fixed top-16 left-0 right-0 bg-blue-500 shadow-lg p-2 rounded-lg z-50 flex justify-center items-center">
        <h2 className="text-xs font-bold text-white mr-2">Timer: {formatTime(elapsedTime)}</h2>
        <button onClick={fetchJoke} className='text-xs text-white bg-blue-700 rounded px-2'>Get a Joke</button>
      </div>
    </>
  );
}

export default Cprogram;
