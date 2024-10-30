import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Java() { 
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
    toast("", { type: 'info' });
  };

  return (
    <>
      <ToastContainer />
      <div className='max-w-screen-2xl mt-10 container mx-auto md:px-20 px-4 bg-white shadow-md rounded-lg'>
        <h1 className='text-center text-2xl font-bold mb-4 text-blue-600'>Java Learning Timer</h1>
        <div className='flex justify-center mb-4'>
          <button onClick={fetchJoke} className='mt-6 mx-2 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>Get a 😂 Joke</button>
          <p className='mt-6 mx-2 text-lg'>Time spent: {formatTime(elapsedTime)}</p>
          <button onClick={() => setIsActive(!isActive)} className='mt-6 mx-2 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>
            {isActive ? 'Stop Timer' : 'Start Timer'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 bg-white shadow-md rounded-lg mt-6">
        <h1 className="text-3xl font-bold mb-4">What is Java?</h1>
        <p className="text-lg mb-4">
          Java is a popular programming language, created in 1995. It is owned by Oracle, and more than 3 billion devices run Java.
        </p>

        <h2 className="text-2xl font-semibold mb-2">It is used for:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Mobile applications (especially Android apps)</li>
          <li>Desktop applications</li>
          <li>Web applications</li>
          <li>Web servers and application servers</li>
          <li>Games</li>
          <li>Database connection</li>
        </ul>
        <p>And much, much more!</p>

        <h2 className="text-2xl font-bold mt-6 mb-2">Why Use Java?</h2>
        <p className="mb-2">
          Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.). It is one of the most popular programming languages in the world.
        </p>
        <p className="mb-2">Here are some reasons to use Java:</p>
        <ul className="list-disc list-inside mb-4">
          <li>It has a large demand in the current job market.</li>
          <li>It is easy to learn and simple to use.</li>
          <li>It is open-source and free.</li>
          <li>It is secure, fast, and powerful.</li>
          <li>It has huge community support (tens of millions of developers).</li>
          <li>Java is an object-oriented language, which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
          <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">Java Installation</h2>
        <p>Some PCs might have Java already installed. To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):</p>
        <code className="bg-gray-100 p-2 rounded">C:\Users\Your Name{'>'}java -version</code>
        <p>If Java is installed, you will see something like this (depending on version):</p>
        <code className="bg-gray-100 p-2 rounded">java version "22.0.0" 2024-08-21 LTS</code>
        <p>If you do not have Java installed on your computer, you can download it for free at oracle.com.</p>
        <p>Note: In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, NetBeans, or Eclipse, which are particularly useful when managing larger collections of Java files.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Java Quickstart</h2>
        <p>In Java, every application begins with a class name, and that class must match the filename.</p>
        <p>Let's create our first Java file, called Main.java:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            public class Main {'{'}<br />
            {'  '}public static void main(String[] args) {'{'}<br />
            {'    '}System.out.println("Hello World");<br />
            {'  }'}<br />
            {'}'}
          </code>
        </pre>
        <p>Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code above.</p>
        <p>Save the code in Notepad as "Main.java". Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type "javac Main.java":</p>
        <code className="bg-gray-100 p-2 rounded">C:\Users\Your Name{'>'}javac Main.java</code>
        <p>This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type "java Main" to run the file:</p>
        <code className="bg-gray-100 p-2 rounded">C:\Users\Your Name{'>'}java Main</code>
        <p>The output should read:</p>
        <code className="bg-gray-100 p-2 rounded">Hello World</code>
        <p>Congratulations! You have written and executed your first Java program.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Techlearn's Java Editor</h2>
        <p>When learning Java at techlearn.com, you can use our "Try it Yourself" tool, which shows both the code and the result. It is used to write, run, and test code right in your browser:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            public class Main {'{'}<br />
            {'  '}public static void main(String[] args) {'{'}<br />
            {'    '}System.out.println("Hello World");<br />
            {'  }'}<br />
            {'}'}
          </code>
        </pre>
        <p>This editor will be used in the entire tutorial to demonstrate the different aspects of Java.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Java Syntax</h2>
        <p>In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            public class Main {'{'}<br />
            {'  '}public static void main(String[] args) {'{'}<br />
            {'    '}System.out.println("Hello World");<br />
            {'  }'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className="text-xl font-bold mt-6 mb-2">Example Explained</h2>
        <p>Every line of code that runs in Java must be inside a class. And the class name should always start with an uppercase first letter. In our example, we named the class Main.</p>
        <p><strong>Note:</strong> Java is case-sensitive: "MyClass" and "myclass" have different meanings.</p>
        <p>The name of the Java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. To run the example above on your computer, make sure that Java is properly installed.</p>
        <p>The output should be:</p>
        <code className="bg-gray-100 p-2 rounded">Hello World</code>

        <h2 className="text-xl font-bold mt-6 mb-2">The Main Method</h2>
        <p>The main() method is required and you will see it in every Java program:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            public static void main(String[] args) {'{'}<br />
            {'  '}System.out.println("Hello World");<br />
            {'}'}
          </code>
        </pre>

        <p>Any code inside the main() method will be executed. Don't worry about the keywords before and after it. You will get to know them bit by bit while reading this tutorial.</p>
        <p>For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">System.out.println()</h2>
        <p>Inside the main() method, we can use the println() method to print a line of text to the screen:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            public static void main(String[] args) {'{'}<br />
            {'  '}System.out.println("Hello World");<br />
            {'}'}
          </code>
        </pre>

        <p>Note: The curly braces {} mark the beginning and the end of a block of code.</p>
        <p>System is a built-in Java class that contains useful members, such as out, which is short for "output". The println() method, short for "print line", is used to print a value to the screen (or a file).</p>
        <p>Don't worry too much about how System, out and println() works. Just know that you need them together to print stuff to the screen.</p>
        <p>You should also note that each code statement must end with a semicolon (;).</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Exercise</h2>
        <p>A file containing a class called MyClass should be saved as:</p>
        <ul className="list-disc list-inside mb-4">
          <li>MyClass.jv</li>
          <li>MyClass.java</li>
          <li>MyClass.js</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">Video: Java Syntax</h2>
        <p className="mb-2">Java Tutorial on YouTube</p>
        <div className="flex justify-center mb-4">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline">Watch Java Tutorials on YouTube</a>
        </div>
      </div>

      <div className="fixed top-16 left-0 right-0 bg-blue-500 shadow-lg p-2 rounded-lg z-50 flex justify-center items-center">
        <h2 className="text-xs font-bold text-white mr-2">Timer: {formatTime(elapsedTime)}</h2>
        <button onClick={fetchJoke} className='text-xs text-white bg-blue-700 rounded px-2 hover:bg-blue-600 transition'>Get a Joke</button>
      </div>
    </>
  );
}

export default Java;
