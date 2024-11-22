import React from 'react'
import backgroundImage from '../assets/financial-bg.jpg' 

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          About Horizon Financial Solutions
        </h1>

        {/* Our Story Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold mb-4 text-lime-700 border-b-2 border-lime-600 inline-block">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg">
            Founded in 2012, Horizon Financial Solutions emerged from a vision to transform financial services 
            through innovative technology and personalized client experiences. What started as a small team 
            of passionate financial experts in downtown Chicago has grown into a national leader in 
            comprehensive financial strategy and wealth management.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold mb-4 text-lime-700 border-b-2 border-lime-600 inline-block">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            At Horizon, we believe that financial wellness is more than just numbers—it's about empowering 
            individuals and businesses to achieve their most ambitious goals. Our mission is to provide 
            cutting-edge financial solutions that are tailored, transparent, and transformative.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold mb-4 text-lime-700 border-b-2 border-lime-600 inline-block">
            Our Core Values
          </h2>
          <ul className="text-gray-700 text-lg list-disc pl-5 space-y-3">
            <li>
              <strong className="text-lime-700">Integrity:</strong> We maintain the highest ethical standards in all our interactions.
            </li>
            <li>
              <strong className="text-lime-700">Innovation:</strong> We continuously evolve our strategies and technologies to stay ahead.
            </li>
            <li>
              <strong className="text-lime-700">Client-Centricity:</strong> Every solution is designed with our clients' unique needs in mind.
            </li>
            <li>
              <strong className="text-lime-700">Transparency:</strong> We believe in clear, honest communication about financial opportunities and risks.
            </li>
          </ul>
        </div>

        {/* Expertise Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold mb-4 text-lime-700 border-b-2 border-lime-600 inline-block">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Wealth Management',
              'Investment Strategy',
              'Retirement Planning',
              'Corporate Financial Advisory',
              'Risk Management',
              'Digital Financial Technologies'
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-3 rounded-lg text-gray-700 hover:bg-lime-100 transition-colors"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About