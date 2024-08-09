"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Project = ({ title, imageUrl, videoUrl, stack, subtitle, link, description }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={link}
            className="relative block hover:scale-105"
            onMouseEnter={() => videoUrl && setHovered(true)}
            onMouseLeave={() => videoUrl && setHovered(false)}
        >
            <span className="absolute lg:right-10 right-2 top-2 bg-white px-2 py-1 rounded-lg text-sm">{stack}</span>
            <div className="relative rounded-lg shadow-md overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                {!hovered ? (
                    <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover" alt={title} />
                ) : (
                    videoUrl && (
                        <video
                            src={videoUrl}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                        />
                    )
                )}
            </div>
            <p className="font-medium text-xl mt-4">{title} <span className="text-gray-400">/ {subtitle}</span></p>
            <p className="font-light text-sm">{description}</p>
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
