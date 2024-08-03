"use client";
import { useEffect, useRef } from "react";
import "@/app/globals.css";

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const requestRef = useRef(); // Define la referencia para manejar el requestAnimationFrame

  useEffect(() => {
    if (typeof window === "undefined") {
      return; // Solo ejecutar en el cliente
    }

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9997'; // Asegúrate de que está por debajo del cursor visual

    let points = []; // Almacena los puntos por los que pasa el cursor

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let currentTime = Date.now();
      points = points.filter(p => currentTime - p.time < 100);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)'; // Hace el rastro totalmente negro
        for (let i = 1; i < points.length - 1; i++) {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.quadraticCurveTo(points[points.length - 1].x, points[points.length - 1].y, points[points.length - 1].x, points[points.length - 1].y);
        ctx.stroke();
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', () => cursor.classList.add('link-hover'));
      link.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
    });

    requestRef.current = requestAnimationFrame(draw);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CustomCursor;
