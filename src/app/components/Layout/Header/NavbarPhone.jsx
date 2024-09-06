export const NavbarPhone = ({ menuOpen, closeMenu }) => {
    return (
    
        <div className={`lg:hidden z-20 fixed inset-x-0 bottom-0 bg-white p-8 rounded-t-xl shadow-lg transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-transform  duration-300 ease-in-out`}>
          
          <div className="mx-auto flex flex-col">
            
              <a className="font-inter_tight text-black text-[16px] font-medium  ">Pau Melià Altadill</a>
              <span className="font-inter_tight text-[12px] text-black font-light ">paumelia98@gmail.com</span>
          </div>

          <div className=" flex flex-col gap-4 mt-6">
       
              <ul className="space-y-2">
                <li><a href="">Projects</a> </li>
                <li><a href="">About Me</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Projects</a></li>

              </ul>
            
          </div>

          <div className=" flex items-center justify-between">
              
              <div className="flex flex-col mt-6">
          
       
                <img src="/signature.svg" alt="" className=" w-24" />
                <span className="font-inter_tight text-[12px] text-black font-light ">© 2024 Pau Melià.</span>
              </div>
              <div className="flex gap-2 ">
                <a href="https://www.linkedin.com/in/pau-melia-altadill/">
                <img src="icons/linkedin-color.svg" alt="" className="w-6" />
                </a>
              <a href="https://github.com/paumelia98/portfolio-2024">
                  <img src="icons/github-color.svg" alt="" className="w-6" />
                  </a>
              </div>
            

          </div>
          
          <button onClick={closeMenu} className="right-4 top-4 absolute mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
    );
};


