import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 relative">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-300">
        {/* Contact Header */}
        <div className="bg-lime-600 text-white p-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">Get in touch with Horizon Financial Solutions</p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 p-6 gap-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-lime-600 inline-block">
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong className="text-lime-700">Address:</strong>
                <p>123 Financial District, Chicago, IL 60601</p>
              </div>
              <div>
                <strong className="text-lime-700">Phone:</strong>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <strong className="text-lime-700">Email:</strong>
                <p>contact@horizonfinancial.com</p>
              </div>
              <div>
                <strong className="text-lime-700">Business Hours:</strong>
                <p>Monday - Friday: 9 AM - 5 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-lime-600 inline-block">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-lime-600 text-white p-3 rounded-lg hover:bg-lime-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact