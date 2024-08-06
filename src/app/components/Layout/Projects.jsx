
import {Project} from "@/app/components/Layout/Project"
export const Projects = () => {
    return (
      <>
      <div className="p-4 lg:px-12 lg:mt-12 mt-6 font-inter_tight grid lg:grid-cols-4 grid-cols-1 lg:gap-20 gap-6">
      <div >
        <h2 className=" text-3xl font-medium">Projects</h2>
        <p className=" font-extralight mt-3">I have a proven track record of my own product and over 30 projects that have helped clients grow</p>
      </div>
      <div className="lg:col-span-3 grid lg:grid-cols-2 lg:gap-20 gap-14 grid-rows-2  ">

      <Project 
      title="Portfolio 2024" 
      subtitle="Web" 
      stack="Next JS + Tailwind" 
      imageUrl="/prueba.png"
      videoUrl="/portfolio.mp4"
      link="/"/>

      <Project 
      title="La Liga" 
      subtitle="Web" 
      stack="React JS + Tailwind" 
      imageUrl="/laliga.png" 
      videoUrl="/laliga.mp4"
      link="https://la-liga-pau.vercel.app/"/>

      <Project 
      title="Aprobatus" 
      subtitle="Web" 
      stack="Wordpress + Bootstrap" 
      videoUrl="/aprobatus.mp4"
      imageUrl="/aprobatus.png" 
      link="https://aprobatus.es"/>

      <Project 
      title="Campus Virtual" 
      subtitle="Web" 
      stack="Laravel + Bootstrap" 
      imageUrl="/campus.png" 
      link="https://campus.ceasfor.com/public"/>

      <Project 
      title="Crossfit" 
      subtitle="Web" 
      stack="Wordpress" 
      imageUrl="/crossfit.png" 
      link="https://www.crossfittorredembarra.com"/>


  
      </div>
      

      </div>
      </>
    );
};
