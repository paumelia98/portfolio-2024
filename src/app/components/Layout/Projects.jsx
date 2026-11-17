"use client";

import { Project } from "@/app/components/Layout/Project";
import Image from 'next/image';
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
            title: "Zara",
            subtitle: t('subtitle_zara'),
            stack: "Frontend",
            imageUrl: "/projects/benito-antonio-campaign.jpg",
            videoUrl: "/projects/benito-antonio-campaign.mp4",
            videoLabel: "Benito Antonio (Bad Bunny)",
            inlineAutoplay: true,
            description: t('description_zara'),
            relatedLinks: [
                { title: "Benito Antonio (Bad Bunny)", href: `https://www.zara.com/es/${locale}/benito-antonio-mkt18018.html` },
                { title: "Re{form} (John Galliano)", href: `https://www.zara.com/es/${locale}/zara-reform-l19820.html` },
                { title: t('title_zaraAnniversary'), href: "https://www.youtube.com/watch?v=5IoxGEt9fpg" },
            ]
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
            title: "Portfolio 2022",
            subtitle: "Portfolio",
            stack: "React + Tailwind",
            imageUrl: "/portfoliov2.png",
            link: "https://v2.paumelia.com",
            description: t('description_portfolio2022')
        }
    ];

    const otherProjects = [
        {
            title: "Aprobatus",
            stack: "Wordpress + Bootstrap",
            imageUrl: "/aprobatus.png",
            link: "https://aprobatus.es",
            description: t('description_aprobatus')
        },
        {
            title: "Campus Virtual",
            stack: "Laravel + Bootstrap",
            imageUrl: "/campus.png",
            link: "https://campus.ceasfor.com/public",
            description: t('description_campusVirtual')
        },
        {
            title: "Crossfit",
            stack: "Wordpress",
            imageUrl: "/crossfit.png",
            link: "https://www.crossfittorredembarra.com",
            description: t('description_crossfit')
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

            <section className="mt-16 border-t border-gray-200 pt-6 lg:mt-20" aria-labelledby="other-projects">
                <h3 id="other-projects" className="text-lg font-medium">{t('otherProjects')}</h3>
                <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {otherProjects.map(({ title, stack, imageUrl, link, description }) => (
                        <li key={title}>
                            <a href={link} className="group flex items-center gap-3">
                                <Image
                                    src={imageUrl}
                                    alt=""
                                    width={96}
                                    height={56}
                                    className="h-14 w-24 shrink-0 rounded object-cover"
                                />
                                <div>
                                    <h4 className="font-medium group-hover:underline underline-offset-4">
                                        {title}
                                        <img src="/icons/arrow-project.svg" alt="" className="ml-1 inline-block w-3" />
                                    </h4>
                                    <p className="text-xs text-gray-500">{stack}</p>
                                </div>
                            </a>
                            <p className="mt-2 text-sm font-light text-gray-600">{description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};
