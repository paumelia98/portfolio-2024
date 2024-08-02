"use client";

import { useEffect } from "react";
import "@/app/globals.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const enlargeCursor = () => {
      cursor.classList.add('link-hover');
    };

    const shrinkCursor = () => {
      cursor.classList.remove('link-hover');
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', enlargeCursor);
      link.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a').forEach(link => {
        link.removeEventListener('mouseenter', enlargeCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
