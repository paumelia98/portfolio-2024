"use client";
import Image from "next/image";
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Project = ({ title, imageUrl, videoUrl, stack, subtitle, link, description }) => {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false); 

    return (
        <article className='relative' >
            <span className="absolute lg:right-10 right-2 top-2 bg-white px-2 py-1 rounded-xl text-sm z-10">{stack}</span>
            <a href={link}
            className="relative block hover:scale-105 transition-transform duration-300 rounded-lg shadow-md overflow-hidden"
            onMouseEnter={() => videoUrl && setHovered(true)}
            onMouseLeave={() => videoUrl && setHovered(false)}
            aria-label={`Project: ${title}`}  style={{ paddingBottom: '55%' }} > 
                {!hovered ? (
                    <Image
                        src={imageUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={title}
                         layout="fill"
                        onError={() => setImgError(true)}
                        style={{ display: imgError ? 'none' : 'block' }}
                    />
                ) : (
                    videoUrl && (
                        <video
                            src={videoUrl}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            preload="metadata"
                        />
                    )
                )}
                {imgError && <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100">Image not available</div>}
            </a>
           
            <p className="font-medium text-xl mt-5 mb-1 flex gap-2">
  {title} 
  <span className="text-gray-400 flex items-center"> / {subtitle} 
    <img src="/icons/arrow-project.svg" alt="" className='w-4 ml-2' />
  </span>
</p>

            
            
            <p className="font-light text-base">{description}</p>
        </article>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
    stack: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string,
};

Project.defaultProps = {
    videoUrl: null,
    description: '',
};
