import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='shadow w-full fixed top-0 left-0'>
      <nav className='md:flex items-center justify-between bg-white py-3 md:px-10 px-7'>
        <NavLink to="/" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left font-bold text-2xl cursor-pointer  items-center gap-1">
          Umair Ayub
        </NavLink>

        <div onClick={() => setIsOpen(!isOpen)} className='absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7'>
          <button
            className=""
            onClick={toggleMenu}
          >
            {isOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
        <ul className={`md:flex md:gap-4 gap-y-10 md:items-center md:pb-0 pb-5 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in  bg-white md:shadow-none ${isOpen ? 'top-16 shadow-md' : 'top-[-490px]'}`}>
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition-all duration-300 hover:translate-y-1 hover:text-blue-600">
            <NavLink
              to="/"
              exact
              className={({ isActive, isPending }) =>
                isPending ? "relative text-black text-xl cursor-pointer hover:text-blue-600" : isActive ? "relative text-xl cursor-pointer text-blue-600" : "relative text-xl cursor-pointer hover:text-blue-600"
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition-all duration-300 hover:translate-y-1 hover:text-blue-600">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "relative text-black text-xl cursor-pointer hover:text-blue-600" : isActive ? "relative text-xl cursor-pointer text-blue-600" : "relative text-xl cursor-pointer hover:text-blue-600"
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition-all duration-300 hover:translate-y-1 hover:text-blue-600">
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "relative text-black text-xl cursor-pointer hover:text-blue-600" : isActive ? "relative text-xl cursor-pointer text-blue-600" : "relative text-xl cursor-pointer hover:text-blue-600"
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
