import React from 'react';

function Contact() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-28 px-6">
        <h1 className="font-bold text-blue-600 text-4xl mb-8">Contact Us</h1>
        <h2 className="text-xl text-gray-800 mb-4">tecklearn</h2>

        <form className="bg-gray-100 p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-lg font-semibold mb-4">Feedback and Queries</h3>

          <label className="block mb-2" htmlFor="issue">
            Select Issue*
            <select id="issue" className="w-full p-2 border border-gray-300 rounded-md mb-4">
              <option value="">-- Select an issue --</option>
              <option value="general">General Inquiry</option>
              <option value="course">Course Related</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="block mb-2" htmlFor="email">
            Email Address*
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
          </label>

          <label className="block mb-2" htmlFor="contact-number">
            Contact Number
            <input
              type="tel"
              id="contact-number"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
          </label>

          <label className="block mb-2" htmlFor="feedback">
            Drop your feedback/query*
            <textarea
              id="feedback"
              required
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              rows="4"
            ></textarea>
          </label>

          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>

        <h3 className="text-lg font-semibold mb-4">Corporate Address (For Communications):</h3>
        <p className="mb-2">
          Techlearn<br />
          A-143, 9th Floor, <br />
          hyderabad  (201305)<br />
          Phone: 6304184583 (Course related Queries)
        </p>

         

        
      </div>
    </>
  );
}

export default Contact;
