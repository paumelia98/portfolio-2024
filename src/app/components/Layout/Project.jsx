"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Project = ({ title, imageUrl, videoUrl, stack, subtitle, link, description }) => {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false); 

    return (
        <a
            href={link}
            className="relative block hover:scale-105 transition-transform duration-300"
            onMouseEnter={() => videoUrl && setHovered(true)}
            onMouseLeave={() => videoUrl && setHovered(false)}
            aria-label={`Project: ${title}`} 
        >
            <span className="absolute lg:right-10 right-2 top-2 bg-white px-2 py-1 rounded-lg text-sm z-40">{stack}</span>
            <div className="relative rounded-lg shadow-md overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                {!hovered ? (
                    <img
                        src={imageUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={title}
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
            </div>
            <p className="font-medium text-xl mt-4 mb-1">{title} <span className="text-gray-400">/ {subtitle}</span></p>
            <p className="font-light text-base">{description}</p>
        </a>
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
