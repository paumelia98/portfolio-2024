

export const Projects = () => {
    return (
      <>
      <div className="p-4 lg:px-12 mt-12 font-inter_tight grid grid-cols-4 gap-20">
      <div >
        <h2 className=" text-3xl font-medium">Projects</h2>
        <p className=" font-extralight mt-3">I have a proven track record of my own product and over 30 projects that have helped clients grow</p>
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-4 grid-rows-2  ">
        <article>
        <img src="/laliga.png" className="rounded-lg" alt="" />
        <p className="font-medium text-xl mt-4">Web App / <span className=" text-gray-400">ReactJS</span></p>
        </article>
        
        <article>
        <img src="/aprobatus.png" className="rounded-lg" alt="" />
        <p className="font-medium text-xl mt-4">Web App / <span className=" text-gray-400">ReactJS</span></p>
        </article>
        <img src="/laliga.png" alt="" />
        <img src="/laliga.png" alt="" />
      </div>
      

      </div>
      </>
    );
};
