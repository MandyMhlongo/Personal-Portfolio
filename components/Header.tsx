
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a 
                href="#hero"
                onClick={handleNavClick}
                className="text-2xl font-bold text-cyan-400"
                aria-label="Scroll to top"
              >
                Mandy Mhlongo
              </a>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="pt-28 pb-8 px-4">
            <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                    {link.name}
                </a>
                ))}
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
