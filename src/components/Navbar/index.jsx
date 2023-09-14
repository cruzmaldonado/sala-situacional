import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar= () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black' }`}>
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
          {/* <span className="sr-only">Open main menu</span> */}
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </Link>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium"
              
            >
              Home
            </Link>
            <Link
              to="/vista-pdf"
              className="px-3 py-2 rounded-md text-sm font-medium"
              
            >
              Vista PDF
            </Link>
            <Link
              to="/ficha"
              className="px-3 py-2 rounded-md text-sm font-medium"
              
            >
              Ficha
            </Link> 
            <Link
              to="/mapa-venezuela"
              className="px-3 py-2 rounded-md text-sm font-medium"
              
            >
              Mapa de Venezuela
            </Link>
            <Link
              to="/mi-cuenta"
              className="px-3 py-2 rounded-md text-sm font-medium"
              
            >
              Mi cuenta
            </Link>
          </div>
        </div>
      </div>
      <div className=" sm:block sm:ml-6">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <IoSunny className="h-6 w-6" />
          ) : (
            <IoMoon className="h-6 w-6" />
          )}
          {/* <span className="only">Toggle dark mode</span> */}
        </button>
      </div>
    </div>
  </div>
  {/* Mobile menu */}
  <div
    className={`${
      isMobileMenuOpen ? 'block' : 'hidden'
    } sm:hidden`}
    id="mobile-menu"
  >
    <div className="px-2 pt-2 pb-3 space-y-1">
      <Link
        to="/"
        className="block px-3 py-2 rounded-md text-base font-medium"
        
      >
        Home
      </Link>
      <Link
        to="/vista-pdf"
        className="block px-3 py-2 rounded-md text-base font-medium"
        
      >
        Vista PDF
      </Link>
      <Link
        to="/ficha"
        className="block px-3 py-2 rounded-md text-base font-medium"
        
      >
        Ficha
      </Link>
      <Link
        to="/mapa-venezuela"
        className="block px-3 py-2 rounded-md text-base font-medium"
       
      >
        Mapa de Venezuela
      </Link>
      <Link
        to="/mi-cuenta"
        className="block px-3 py-2 rounded-md text-base font-medium"
        
      >
        Mi cuenta
      </Link>
    </div>
    
  </div>
</nav>
  )
}

export default Navbar