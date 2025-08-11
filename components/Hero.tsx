import React from 'react';

const Hero: React.FC = () => {
  const statement = 'Reliable IT support learner with a passion for problem-solving and helping users.';

  return (
    <section id="hero" className="py-20 md:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-500">
          Mandy Mhlongo
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-slate-300 h-20 flex items-center justify-center">
            {statement}
        </p>
      </div>
    </section>
  );
};

export default Hero;