export const NavbarPhone = ({ menuOpen, closeMenu }) => {
    return (
    
        <div className={`lg:hidden fixed inset-x-0 bottom-0 bg-white p-4 rounded-t-xl shadow-lg transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-transform transition-opacity duration-300 ease-in-out`}>
          <div className="flex flex-col items-center">
            <button onClick={closeMenu} className="self-end mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#about" className="py-2">About</a>
            <a href="#projects" className="py-2">Projects</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
    );
};


