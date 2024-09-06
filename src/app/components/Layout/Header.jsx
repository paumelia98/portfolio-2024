"use client";
import { useState } from 'react';

import {NavbarPhone} from "@/app/components/Layout/Header/NavbarPhone"
import {NavbarPc} from "@/app/components/Layout/Header/NavbarPc"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full p-4 lg:px-12 bg-[#f7f7f9] rounded-t-xl border-0 z-10">
        <header className="flex flex-col">
          <a href='' className=" text-black text-[16px] font-medium ">Pau Melià Altadill</a>
          <span className=" text-[12px] text-black font-light ">Frontend Developer</span>
        </header>
       
     
        <div className="flex gap-4 items-center">
          <a 
            href="docus/2024_PauMelià.pdf" 
            download 
            className="text-[14px] underline lg:block hidden"
          >
            Download CV
          </a>
          <a href='mailto:paumelia98@gmail.com' className=" text-[14px] lg:block hidden">Contact</a>
          <div className='flex gap-2'>
          <a href="/es"><img src="/flags/es-flag.svg" alt="" className='w-4 hover:scale-110' /></a>
         <a href="/en"> <img src="/flags/uk-flag.svg" alt="" className='w-4 hover:scale-110' /></a>
        </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hidden lg:block" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${menuOpen ? 'backdrop-blur-sm transition-opacity duration-300 opacity-100' : 'opacity-0 pointer-events-none'}`}>
       
      <NavbarPhone menuOpen={menuOpen} closeMenu={closeMenu} />
      <NavbarPc menuOpen={menuOpen} closeMenu={closeMenu} />
      </div>
    </>
  );
};
