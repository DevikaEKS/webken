import { useState } from "react";
import { Links } from "../../utils/Links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-[#001040] w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-10 py-4">
        
        <div className="w-[200px] sm:w-[296px] h-[40px] sm:h-[52px]">
          <img
            src="./image 66.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

       
        <div className="hidden sm:flex gap-6">
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-white text-[14px] sm:text-[16px] font-normal hover:text-[#FFA200] transition-colors duration-300 montserrat-main"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

     
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 pb-4">
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-white text-[14px] font-normal montserrat-main"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
