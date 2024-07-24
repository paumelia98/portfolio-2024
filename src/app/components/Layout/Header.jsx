


export const Header = () => {
  return (
    <>


    <div className="flex items-center justify-between w-100 px-12 py-4 bg-[#f7f7f9] rounded-xl border-0">
        <div className="flex flex-col">
            <a className=" font-inter_tight text-black text-[16px] font-medium">Pau Melià Altadill</a>
            <span className="font-inter_tight text-[12px] text-black">Frontend Developer</span>       
        </div>
        <div className="flex gap-4">
            <span className="font-inter_tight text-[14px] underline ">Download CV</span>
            <span className="font-inter_tight text-[14px] ">Contact</span>
        </div>
    </div>
    <div className="h-full flex  justify-center pt-28 lg:pt-60">
      <video
          className="absolute top-0 left-0 w-full h-full  object-cover rounded-xl  border-0 -z-10"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      <div className="flex flex-col lg:w-[900px] w-[400px] align-center">
        <h1 className=" font-unbounded text-3xl lg:text-6xl text-center font-medium"> Quality Frontend Development</h1>
        <h2 className=" font-inter_tight text-xl lg:text-2xl text-center font-normal mt-4">I specialize in developing dynamic, user-friendly websites and apps that elevate user experience, optimize performance, and drive business growth.</h2>
        <div className="text-center mt-4">
        <a className="font-inter_tight" href=""> <span className=" border border-[#8b8b8b] py-1 px-2 rounded-xl text-[#8b8b8b]">Download CV</span> </a>
        <a className="font-inter_tight " href=""> <span className=" border border-[#8b8b8b] py-1 px-2 rounded-xl text-[#8b8b8b]">Contact</span> </a>

        </div>
      </div>
    </div>



    

    </>
  );
};


