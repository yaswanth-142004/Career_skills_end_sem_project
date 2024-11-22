import React, { useState } from "react";
import axios from "axios";

const Email = () => {
  const [email, setEmail] = useState(""); // State to store user input
  const [message, setMessage] = useState(""); // State to display success or error message

  // Handle email submission
  const handleNotifyMe = () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Post the email to the database
    axios
      .post("http://localhost:3000/Emails", { email }) // POST request
      .then(() => {
        setMessage("You have been successfully subscribed!");
        setEmail(""); // Clear the input field
      })
      .catch((error) => {
        console.error("Error adding email:", error);
        setMessage("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 pl-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
            Want to know more about our future news?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <input
              className="p-3 text-black rounded-md w-full"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
            />
            <button
              className="bg-lime-600 text-black mx-auto px-6 py-3 my-6 ml-4 font-medium w-[200px] rounded-md"
              onClick={handleNotifyMe} // Trigger email submission
            >
              Notify me
            </button>
          </div>
          {message && <p className="text-lime-500 mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Email;
