import { Header } from '@/app/components/Layout/Header';

export const Hero = () => {
    return (
      <>
        <div className="lg:h-[calc(100vh-3rem)] relative overflow-hidden  rounded-xl">
          <Header />
          <div className="relative h-full flex justify-center pt-4 xl:pt-40">
        <video
          className="absolute top-0 left-0 w-full h-[50vh] lg:h-full object-cover rounded-b-xl border-0 -z-10 lg:opacity-100"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute top-0 left-0 w-full h-[50%] z-0 rounded-b-xl"></div>
        <div className="z-10 flex flex-col lg:w-[900px] w-[400px] align-center">
          <img src="/signature.svg" alt="" className="lg:w-44 mx-auto mb-2 w-24" />
          <h1 className="font-unbounded text-3xl lg:text-6xl text-center font-medium masked-text">Quality Frontend Development</h1>
          <h2 className=" font-inter_tight text-base lg:text-2xl text-center font-normal mt-4 masked-text mx-2 text-black">I specialize in developing dynamic, user-friendly websites and apps that elevate user experience, optimize performance, and drive business growth.</h2>
          <div className="mx-auto lg:pb-0 pb-4 lg:hidden">
            <a href="paumelia.com" className="bg-white text-black px-4 py-2 mx-auto mt-4 rounded-3xl font-semibold font-inter_tight hover:scale-105 mb-4 flex items-center gap-2"> <img src="/icons/gmail-color.svg" alt="" className=" w-4 h-4" />Contact me</a>
          </div>

          <div className="absolute bottom-20 left-0 p-4 lg:px-12 flex-col hidden lg:block">
        
            <div className="flex gap-4">
              <a href="">
                <img src="/icons/linkedin.svg" alt="Logo Linkedin" className="w-8 h-8 hover:scale-125 icons" />
              </a>
              <a href="">
                <img src="/icons/github.svg" alt="Logo Github" className="w-8 h-8 hover:scale-125 icons" />
              </a>
              <a href="">
                <img src="/icons/gmail.svg" alt="Logo Gmail" className="w-8 h-8 hover:scale-125 icons" />
              </a>
            </div>
          </div>

          <nav className='lg:flex justify-center items-center  absolute bottom-[4.5rem] right-0 px-4 bg-white rounded-tl-xl list-none gap-4 font-inter_tight text-sm hidden py-3'>
          
          <a href="#projects" className="hover:bg-[#f7f7f9] text-black px-2 py-1 rounded-3xl hover:scale-105  flex items-center gap-2">Projects</a>
            <a href="#about" className="hover:bg-[#f7f7f9] text-black px-2 py-1 rounded-3xl hover:scale-105  flex items-center gap-2">About me</a>
            <a href="#experience" className="hover:bg-[#f7f7f9] text-black px-2 py-1 rounded-3xl hover:scale-105  flex items-center gap-2">Experience</a>
            <a href="mail:paumelia98@gmail.com" className="bg-black text-white px-2 py-1 rounded-3xl hover:scale-105  flex items-center gap-2"> <img src="/icons/gmail-color.svg" alt="" className=" w-4 h-4" />Contact me</a>

      
        
        </nav>

        
          <a href="#projects" className="absolute lg:bottom-20 bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center lg:pt-0 pt-4">
          <svg className="bounce-animation" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
          </svg>
          </a>
        </div>
      </div>
        </div>
      </>
    );
};
