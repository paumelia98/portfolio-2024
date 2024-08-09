export const NavbarPc = ({ menuOpen, closeMenu }) => {
    return (
    
        <div className={`hidden lg:flex flex-col font-inter_tight  justify-between fixed top-4 right-4 w-1/5 h-[calc(100%-2rem)] bg-white p-10 rounded-lg shadow-lg transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}  duration-300 ease-in-out`}>
          
          
          <div className="mx-auto flex flex-col">
            
              <a className="font-inter_tight text-black text-[16px] font-medium ">Pau Melià Altadill</a>
              <span className="font-inter_tight text-[12px] text-black font-light ">paumelia98@gmail.com</span>
          </div>

          <div className=" flex flex-col gap-4">
              <a className=" text-black text-2xl font-semibold ">Pau Melià Altadill</a>
              <ul className="space-y-2">
                <li><a href="">Projects</a> </li>
                <li><a href="">About Me</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Projects</a></li>

              </ul>
            
          </div>

          <div className="mx-auto flex flex-col">
          <img src="/signature.svg" alt="" className=" mx-auto mb-2 w-24" />
              <div className="flex gap-2 mb-3 mx-auto">
                  <img src="icons/linkedin-color.svg" alt="" className="w-6" />
                  <img src="icons/github-color.svg" alt="" className="w-6" />
            
              </div>
              
              <span className="font-inter_tight text-[12px] text-black font-light ">© 2024 Pau Melià.</span>
              <span className="font-inter_tight text-[12px] text-black font-light "> </span>

          </div>
          
          <button onClick={closeMenu} className="right-4 top-4 absolute mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        
        </div>
        
    );
};


