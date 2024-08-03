

export const Projects = () => {
    return (
      <>
      <div className="p-4 lg:px-12 mt-12 font-inter_tight grid lg:grid-cols-4 grid-cols-1 gap-20">
      <div >
        <h2 className=" text-3xl font-medium">Projects</h2>
        <p className=" font-extralight mt-3">I have a proven track record of my own product and over 30 projects that have helped clients grow</p>
      </div>
      <div className="lg:col-span-3 grid lg:grid-cols-2 gap-4 grid-rows-2  ">
        <article>
        <img src="/laliga.png" className="rounded-lg shadow-md w-[600px] h-auto" alt="" />
        <p className="font-medium text-xl mt-4">Web App / <span className=" text-gray-400">ReactJS</span></p>
        </article>
        
        <article>
        <img src="/aprobatus.png" className="rounded-lg shadow-md w-[600px] h-auto" alt="" />
        <p className="font-medium text-xl mt-4">Education Web / <span className=" text-gray-400">Wordpress</span></p>
        </article>
        <article>
        <img src="/aprobatus.png" className="rounded-lg shadow-md w-[600px] h-auto" alt="" />
        <p className="font-medium text-xl mt-4">Education Web / <span className=" text-gray-400">Wordpress</span></p>
        </article>
        <article>
        <img src="/aprobatus.png" className="rounded-lg shadow-md w-[600px] h-auto" alt="" />
        <p className="font-medium text-xl mt-4">Education Web / <span className=" text-gray-400">Wordpress</span></p>
        </article>
  
      </div>
      

      </div>
      </>
    );
};
