"use client";

import { Project } from "@/app/components/Layout/Project";
import { useLocale, useTranslations } from 'next-intl';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const t = useTranslations('Projects');
    const locale = useLocale();
    const projectsRef = useRef([]);

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {  
            projectsRef.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none none",
                        }
                    });
            });
        }
    }, []);

    const projects = [
        {
            title: "Zara × Bad Bunny",
            subtitle: "Benito Antonio",
            stack: "Frontend · Zara",
            imageUrl: "/projects/benito-antonio.jpg",
            videoUrl: "/projects/benito-antonio.mp4",
            videoControls: true,
            link: `https://www.zara.com/es/${locale}/benito-antonio-mkt18018.html`,
            description: t('description_benitoAntonio')
        },
        {
            title: "Zara × John Galliano",
            subtitle: "Re{form}",
            stack: "Frontend · Zara",
            coverTitle: "Re{form}",
            link: `https://www.zara.com/es/${locale}/zara-reform-l19820.html`,
            description: t('description_reform')
        },
        {
            title: "HistoricalMap",
            subtitle: t('subtitle_historicalMap'),
            stack: "React · MapLibre GL",
            imageUrl: "/projects/historicalmap.jpg",
            description: t('description_historicalMap')
        },
        {
            title: "Portfolio 2024",
            subtitle: "Portfolio",
            stack: "Next JS + Tailwind",
            imageUrl: "/prueba.png",
            videoUrl: "/portfolio.mp4",
            link: "/",
            description: t('description_portfolio2024')
        },
        {
            title: "La Liga",
            subtitle: "Web",
            stack: "React JS + Tailwind",
            imageUrl: "/laliga.png",
            videoUrl: "/laliga.mp4",
            link: "https://la-liga-pau.vercel.app/",
            description: t('description_laLiga')
        },
        {
            title: "Aprobatus",
            subtitle: "Web",
            stack: "Wordpress + Bootstrap",
            imageUrl: "/aprobatus.png",
            videoUrl: "/aprobatus.mp4",
            link: "https://aprobatus.es",
            description: t('description_aprobatus')
        },
        {
            title: "Campus Virtual",
            subtitle: "Web",
            stack: "Laravel + Bootstrap",
            imageUrl: "/campus.png",
            link: "https://campus.ceasfor.com/public",
            description: t('description_campusVirtual')
        },
        {
            title: "Crossfit",
            subtitle: "Web",
            stack: "Wordpress",
            imageUrl: "/crossfit.png",
            link: "https://www.crossfittorredembarra.com",
            description: t('description_crossfit')
        },
        {
            title: "Portfolio 2022",
            subtitle: "Portfolio",
            stack: "React + Tailwind",
            imageUrl: "/portfoliov2.png",
            link: "https://v2.paumelia.com",
            description: t('description_portfolio2022')
        }
    ];

    return (
        <section className="p-2 lg:px-8 lg:mt-12 mt-6 mx-4" id="projects">
            <div>
                <h2 className="text-3xl font-medium">{t('title')}</h2>
                <p className="font-extralight mt-3 mb-16">
                    {t('description')}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 lg:gap-y-20 gap-y-10">
                {projects.map((project, index) => (
                    <div
                        ref={(el) => projectsRef.current[index] = el}
                        key={project.title}
                    >
                        <Project {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
};
