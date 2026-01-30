import React, { useEffect, useRef, useState } from 'react';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${isScroll ? 'bg-black/50 backdrop-blur-lg border-b border-[var(--color-border)]' : ''}`}
      >
        <a
          href="#top"
          className="text-2xl font-semibold tracking-tight text-[var(--color-header)]"
        >
          Gabriel Rodrigues
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-black/40 backdrop-blur`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 bg-white border border-[var(--color-border)] text-black rounded-full ml-4 hover:bg-black hover:text-white duration-500"
          >
            Contact <TfiAngleDoubleRight />
          </a>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <RiMenu3Line size={28} />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[var(--color-card-bg)] transition duration-500"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <RxCross2 size={28} />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
