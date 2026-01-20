import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className={`flex justify-between items-center px-8 py-4 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-brand-bg/80 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          <NavLink
            to="/"
            className="text-2xl font-extrabold font-display tracking-tight hover:scale-105 transition-transform"
          >
            <span className="text-primary-500">Umair Ayub</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link font-medium ${
                      isActive ? "text-white active" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="mailto:umairayub79@gmail.com"
                className="solid-button !py-2 text-sm !px-6"
              >
                Get in touch
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-bg z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-4xl font-extrabold transition-all ${
                      isActive
                        ? "text-primary-400 scale-110"
                        : "text-brand-muted hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="mailto:umairayub79@gmail.com"
                onClick={() => setIsOpen(false)}
                className="solid-button text-2xl px-12 py-4"
              >
                Reach Out
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
