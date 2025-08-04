import React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
            <a href="https://github.com/MandyMhlongo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/mandy-mhlongo-9a048991/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-6 w-6" />
            </a>
        </div>
        <p className="mt-8 text-center text-base text-slate-400">
          &copy; {new Date().getFullYear()} Mandy Mhlongo. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs text-slate-500">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
