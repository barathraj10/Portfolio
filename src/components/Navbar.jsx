import React, { useState, useRef, useEffect } from 'react';
import { NavLinks } from './constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  
  // Animate mobile menu on open
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [menuOpen]);

  return (
    <nav className="bg-[rgb(33, 33, 112)] fixed top-0 w-full z-50">
      <div className="p-5 flex justify-between items-center">
        <a href="#home" className="text-3xl font-merienda">
          Barath Raj
        </a>

        {/* Hamburger Button (Visible only on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a href={link.id} className="text-xl text-white">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="menu flex flex-col items-center gap-2 rounded-lg m-5 p-5 bg-[rgba(20, 20, 71, 0.3)] bg-opacity-100 md:hidden"
        >
          {NavLinks.map((link) => (
            <li className='bg-blue-600 w-full h-full p-3 flex justify-center' key={link.id}>
              <a
                href={link.id}
                className="text-lg text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
