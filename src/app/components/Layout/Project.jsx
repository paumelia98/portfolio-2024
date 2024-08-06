"use client";
import { useState, useEffect } from 'react';

export const Project = ({ title, imageUrl, videoUrl, stack, subtitle, link }) => {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHovered(false); // Reset hovered state on scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a
            href={link}
            className="relative hover:scale-105"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)} // Handle touch start
        >
            <span className="absolute lg:right-10 right-2 top-2 bg-white px-2 py-1 rounded-lg text-sm">{stack}</span>
            {!hovered ? (
                <img src={imageUrl} className="rounded-lg shadow-md lg:w-[720px] lg:h-[405px] object-cover " alt="" />
            ) : (
                <video
                    src={videoUrl}
                    className="rounded-lg shadow-md w-[680px] h-[382px] object-cover"
                    autoPlay
                    loop
                    muted
                />
            )}
            <p className="font-medium text-xl mt-4">{title} <span className="text-gray-400">/ {subtitle}</span></p>
        </a>
    );
};
