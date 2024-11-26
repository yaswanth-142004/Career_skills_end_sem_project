import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  // If not logged in, don't render navbar
  if (!userRole) return null;

  return (
    <div className="text-white flex justify-between h-24 mx-auto px-4 max-h-[1240px] items-center">
      <div className="flex items-center">
        <h1 className="w-full text-3xl font-bold text-lime-600">React</h1>
        <span className="ml-4 text-sm text-gray-300 ">
          {userRole === 'admin' ? 'Admin' : 'Guest'}
        </span>
      </div>
      
      <ul className='hidden md:flex '>
        <li className="p-4 border-b border-b-lime-700">
          <Link to='/resources'>
            {userRole === 'admin' ? 'Projects' : 'Projects'}
          </Link>
        </li>
        <li className="p-4 border-b border-b-lime-700">
          <Link to='/company'>Company</Link>
        </li>
        <li className="p-4 border-b border-b-lime-700">
          <Link to='/home'>Home</Link>
        </li>
        <li className="p-4 border-b border-b-lime-700">
          <Link to='/about'>About</Link>
        </li>
        <li className="p-4 border-b border-b-lime-700">
          <Link to='/contact'>Contact</Link>
        </li>
        <li className="p-4 border-b border-b-lime-700">
          <button 
            onClick={handleLogout} 
            className="text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </li>
      </ul>
      
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <div
        className={
          nav
            ? "left-0 top-0 fixed h-full w-[60%] bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center">
          <h1 className="w-full text-3xl m-4 font-bold text-lime-600">React</h1>
          <span className="text-sm text-gray-300 mr-4">
            {userRole === 'admin' ? 'Admin' : 'Guest'}
          </span>
        </div>
        
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-lime-700">
            <Link to='/resources'>
              {userRole === 'admin' ? 'Change' : 'Resources'}
            </Link>
          </li>
          <li className="p-4 border-b border-b-lime-700">
            <Link to='/company'>Company</Link>
          </li>
          <li className="p-4 border-b border-b-lime-700">
            <Link to='/home'>Home</Link>
          </li>
          <li className="p-4 border-b border-b-lime-700">
            <Link to='/about'>About</Link>
          </li>
          <li className="p-4 border-b border-b-lime-700">
            <Link to='/contact'>Contact</Link>
          </li>
          <li className="p-4 border-b border-b-lime-700">
            <button 
              onClick={handleLogout} 
              className="text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;