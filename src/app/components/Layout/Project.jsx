"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Project = ({
    title, imageUrl, videoUrl, videoLabel, inlineAutoplay, stack, subtitle, link, description, relatedLinks
}) => {
    const [hovered, setHovered] = useState(false);
    const [imgError, setImgError] = useState(false);
    const inlineVideoRef = useRef(null);
    const MediaFrame = link ? "a" : "div";
    const canPreviewVideo = videoUrl && !inlineAutoplay;
    const showVideo = videoUrl && (inlineAutoplay || hovered);

    useEffect(() => {
        const video = inlineVideoRef.current;
        if (!video) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let inView = false;
        const syncPlayback = () => {
            if (inView && !reducedMotion.matches) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        };
        const observer = new IntersectionObserver(([entry]) => {
            inView = entry.intersectionRatio >= 0.25;
            syncPlayback();
        }, { threshold: 0.25 });

        observer.observe(video);
        reducedMotion.addEventListener("change", syncPlayback);
        return () => {
            observer.disconnect();
            reducedMotion.removeEventListener("change", syncPlayback);
            video.pause();
        };
    }, [inlineAutoplay, videoUrl]);

    return (
        <article className="relative">
            <span className="absolute lg:right-10 right-2 top-2 bg-white px-2 py-1 rounded-xl text-sm z-10 pointer-events-none">{stack}</span>
            <MediaFrame
                href={link}
                aria-label={link ? title : undefined}
                className={`relative block aspect-[20/11] rounded-lg shadow-md overflow-hidden ${link ? "hover:scale-105 transition-transform duration-300" : ""}`}
                onMouseEnter={() => canPreviewVideo && setHovered(true)}
                onMouseLeave={() => canPreviewVideo && setHovered(false)}
            >
                {showVideo ? (
                    <video
                        ref={inlineAutoplay ? inlineVideoRef : undefined}
                        src={videoUrl}
                        poster={imageUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-label={videoLabel || title}
                        autoPlay={!inlineAutoplay}
                        loop
                        muted
                        playsInline
                        preload={inlineAutoplay ? "none" : "metadata"}
                    />
                ) : imgError ? (
                    <div className="absolute inset-0 grid place-items-center bg-gray-100">{title}</div>
                ) : (
                    <Image
                        src={imageUrl}
                        className="object-cover"
                        alt={link ? "" : title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        onError={() => setImgError(true)}
                    />
                )}
            </MediaFrame>

            <h3 className="font-medium text-xl mt-5 mb-1">
                {title} <span className="text-gray-500">/ {subtitle}</span>
                {link && <img src="/icons/arrow-project.svg" alt="" className="inline-block w-4 ml-2" />}
            </h3>
            <p className="font-light text-base">{description}</p>
            {relatedLinks && (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {relatedLinks.map(({ title: linkTitle, href }) => (
                        <li key={href}>
                            <a href={href} className="inline-flex items-center gap-1 underline decoration-gray-300 underline-offset-4 hover:decoration-current">
                                {linkTitle}
                                <img src="/icons/arrow-project.svg" alt="" className="w-3 shrink-0" />
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string,
    videoLabel: PropTypes.string,
    inlineAutoplay: PropTypes.bool,
    stack: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string,
    relatedLinks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    })),
};
