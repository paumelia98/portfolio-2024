


export const Header = () => {
  return (
    <>


    <div className="flex items-center justify-between w-100 px-12 py-4 bg-[#f7f7f9] rounded-xl border-0">
        <div className="flex flex-col">
            <span className=" font-inter_tight text-black text-[16px] font-medium">Pau Melià Altadill</span>
            <span className="font-inter_tight text-[14px]">Frontend Developer</span>
        </div>
        <div>
            <span className="font-inter_tight text-[14px] underline ">Download CV</span>
        </div>

    </div>
    <div className="h-full flex  justify-center pt-28 lg:pt-60">
    <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl  border-0 -z-10"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
        <h1 className=" lg:w-[900px] w-[400px] font-unbounded text-3xl lg:text-6xl text-center font-medium">Quality design & web development synergy</h1>

    </div>



    

    </>
  );
};


