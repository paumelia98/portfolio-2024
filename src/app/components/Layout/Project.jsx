"use client";

import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

export const Project = ({
    title, imageUrl, coverTitle, videoUrl, videoControls, stack, subtitle, link, description
}) => {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false);
    const hasMediaLink = link && !videoControls;
    const MediaFrame = hasMediaLink ? "a" : "div";
    const canPreviewVideo = videoUrl && !videoControls;
    const showVideo = videoUrl && (videoControls || hovered);
    const projectName = <>{title} <span className="text-gray-500">/ {subtitle}</span></>;

    return (
        <article className="relative">
            <span className="absolute lg:right-10 right-2 top-2 bg-white px-2 py-1 rounded-xl text-sm z-10 pointer-events-none">{stack}</span>
            <MediaFrame
                href={hasMediaLink ? link : undefined}
                aria-label={hasMediaLink ? title : undefined}
                className={`relative block aspect-[20/11] rounded-lg shadow-md overflow-hidden ${hasMediaLink ? "hover:scale-105 transition-transform duration-300" : ""}`}
                onMouseEnter={() => canPreviewVideo && setHovered(true)}
                onMouseLeave={() => canPreviewVideo && setHovered(false)}
            >
                {showVideo ? (
                    <video
                        src={videoUrl}
                        poster={imageUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-label={title}
                        controls={videoControls}
                        autoPlay={!videoControls}
                        loop={!videoControls}
                        muted
                        playsInline
                        preload={videoControls ? "none" : "metadata"}
                    />
                ) : coverTitle ? (
                    <div
                        className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#4d2331] to-[#170e16] text-[#f6e7d8]"
                        aria-hidden="true"
                    >
                        <span className="font-serif text-5xl tracking-tight sm:text-6xl xl:text-8xl">{coverTitle}</span>
                    </div>
                ) : imgError ? (
                    <div className="absolute inset-0 grid place-items-center bg-gray-100">{title}</div>
                ) : (
                    <Image
                        src={imageUrl}
                        className="object-cover"
                        alt={hasMediaLink ? "" : title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        onError={() => setImgError(true)}
                    />
                )}
            </MediaFrame>

            <h3 className="font-medium text-xl mt-5 mb-1">
                {videoControls && link ? (
                    <a href={link} className="hover:underline underline-offset-4">
                        {projectName}
                        <img src="/icons/arrow-project.svg" alt="" className="inline-block w-4 ml-2" />
                    </a>
                ) : (
                    <>
                        {projectName}
                        {link && <img src="/icons/arrow-project.svg" alt="" className="inline-block w-4 ml-2" />}
                    </>
                )}
            </h3>
            <p className="font-light text-base">{description}</p>
        </article>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    coverTitle: PropTypes.string,
    videoUrl: PropTypes.string,
    videoControls: PropTypes.bool,
    stack: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string,
};
