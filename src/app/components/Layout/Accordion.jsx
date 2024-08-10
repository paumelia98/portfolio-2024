"use client";
import React, { useState } from 'react';

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" pb-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className="text-lg font-medium ">{title}</span>
        <svg
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } w-5 h-5 text-gray-500`}
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="mt-4 text-gray-600">{children}</div>
      </div>
    </div>
  );
};



