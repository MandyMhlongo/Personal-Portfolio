
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;
