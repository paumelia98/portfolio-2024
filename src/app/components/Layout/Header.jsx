export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-4 lg:px-12 py-4 bg-[#f7f7f9] rounded-t-xl border-0 z-10">
        <div className="flex flex-col">
          <a className="font-inter_tight text-black text-[16px] font-medium">Pau Melià Altadill</a>
          <span className="font-inter_tight text-[12px] text-black">Frontend Developer</span>
        </div>
        
        <div className="flex gap-4">
          <span className="font-inter_tight text-[14px] underline">Download CV</span>
          <span className="font-inter_tight text-[14px]">Contact</span>
        </div>
      </div>
      
      <div className="relative h-full flex justify-center pt-16 lg:pt-52">
        <video
          className="absolute top-0 left-0 w-full h-[50vh] lg:h-full object-cover rounded-b-xl border-0 -z-10  lg:block"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute top-0 left-0 w-full h-[50%] z-0 rounded-b-xl"></div>
        <div className=" z-10 flex flex-col lg:w-[900px] w-[400px] align-center">
        <img src="/signature.svg" alt="" className=" lg:w-44   mx-auto mb-2 w-24" />

          <h1 className="font-unbounded text-3xl lg:text-6xl text-center font-medium masked-text">Quality Frontend Development</h1>
          <h2 className="font-inter_tight text-base lg:text-2xl text-center font-normal mt-4 masked-text mx-2">I specialize in developing dynamic, user-friendly websites and apps that elevate user experience, optimize performance, and drive business growth.</h2>
        </div>
      </div>

    
    </>
  );
};
