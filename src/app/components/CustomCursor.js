"use client";
import { useEffect, useRef } from "react";
import "@/app/globals.css";

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return; // Solo ejecutar en el cliente
    }

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9998'; // Justo por debajo del cursor visual

    let points = []; // Almacena los puntos por los que pasa el cursor

    const moveCursor = (e) => {
      // Mueve el cursor centrado
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 3}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 3}px`;
      points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let currentTime = Date.now();
      points = points.filter(p => currentTime - p.time < 150);

      if (points.length) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)'; 
        points.forEach((point, index) => {
          if (index > 0) {
            let prevPoint = points[index - 1];
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.stroke();
      }

      requestRef.current = requestAnimationFrame(draw);
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

    requestRef.current = requestAnimationFrame(draw);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a').forEach(link => {
        link.removeEventListener('mouseenter', enlargeCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CustomCursor;
