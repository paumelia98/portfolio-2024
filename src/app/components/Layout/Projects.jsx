import { Project } from "@/app/components/Layout/Project";
import { useTranslations } from 'next-intl';

export const Projects = () => {
    const t = useTranslations('Projects');

    const projects = [
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
        <section className="p-2 lg:px-8 lg:mt-12 mt-6 mx-4 " id="projects">
            <div>
                <h2 className="text-3xl font-medium ">{t('title')}</h2>
               
                <p className="font-extralight mt-3  mb-16">
                    {t('description')}
                </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-2 xl:gap-x-10 gap-x-10 lg:gap-y-20 gap-y-10 grid-rows-2">

                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        stack={project.stack}
                        imageUrl={project.imageUrl}
                        videoUrl={project.videoUrl}
                        link={project.link}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
};
