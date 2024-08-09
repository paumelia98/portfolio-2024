import { Project } from "@/app/components/Layout/Project";
import { useTranslations } from 'next-intl';

export const Projects = () => {
    const t = useTranslations('Projects');

    const projects = [
        {
            title: "Portfolio 2024",
            subtitle: "Web",
            stack: "Next JS + Tailwind",
            imageUrl: "/prueba.png",
            videoUrl: "/portfolio.mp4",
            link: "/",
            description: "Pues aqui iria una descripcion que aun tengo que pensar mas profundamente pero vaya algo asi tampoco muy largo ni muy corto."
        },
        {
            title: "La Liga",
            subtitle: "Web",
            stack: "React JS + Tailwind",
            imageUrl: "/laliga.png",
            videoUrl: "/laliga.mp4",
            link: "https://la-liga-pau.vercel.app/"
        },
        {
            title: "Aprobatus",
            subtitle: "Web",
            stack: "Wordpress + Bootstrap",
            imageUrl: "/aprobatus.png",
            videoUrl: "/aprobatus.mp4",
            link: "https://aprobatus.es"
        },
        {
            title: "Campus Virtual",
            subtitle: "Web",
            stack: "Laravel + Bootstrap",
            imageUrl: "/campus.png",
            link: "https://campus.ceasfor.com/public"
        },
        {
            title: "Crossfit",
            subtitle: "Web",
            stack: "Wordpress",
            imageUrl: "/crossfit.png",
            link: "https://www.crossfittorredembarra.com"
        }
    ];

    return (
        <div className="p-4 lg:px-12 lg:mt-12 mt-6 font-inter_tight grid lg:grid-cols-4 grid-cols-1 mx-4 ">
            <div>
                <h2 className="text-3xl font-medium">{t('title')}</h2>
                <p className="font-extralight mt-3">
                    {t('description')}
                </p>
            </div>
            <div className="lg:col-span-3 grid lg:grid-cols-2 xl:gap-10 gap-10 grid-rows-2">
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
        </div>
    );
};
