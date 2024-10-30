import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dsa() {
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
    toast("", { type: 'info' });
  };

  return (
    <>
      <ToastContainer />
      <div className='max-w-screen-2xl mt-28 container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='text-center'>
            <button onClick={fetchJoke} className='mt-6 mx-2 text-2xl'>click me for 😂 joke and fact</button>
            <p className='mt-4 text-xl'> Time spent: {formatTime(elapsedTime)}</p>
            <button onClick={() => setIsActive(!isActive)} className='mt-4 mx-2 text-2xl'>
              {isActive ? 'Stop Timer' : 'Start Timer'}
            </button>
          </h1>
        </div>
      </div>

      {/* Fixed Position Timer and Joke Section */}
      <div className="fixed top-16 left-0 right-0 bg-blue-500 shadow-lg p-1 rounded-lg z-50 flex justify-center items-center">
        <h2 className="text-xs font-bold text-white mr-2">Timer: {formatTime(elapsedTime)}</h2>
        <button onClick={fetchJoke} className='text-xs text-white bg-blue-700 rounded px-2'>Get a Joke</button>
      </div>
    </>
  );
}

export default Dsa;
