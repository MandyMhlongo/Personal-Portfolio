
import React, { useState } from 'react';

const Capstone: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section id="capstone" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Capstone Showcase
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            My culminating project: a deep dive into applying AI to solve a real-world problem.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="aspect-video bg-slate-800 rounded-lg shadow-xl overflow-hidden relative">
              {isPlaying ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/eRsGyueVLvQ?autoplay=1&rel=0"
                  title="Capstone Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img src="https://picsum.photos/seed/capstone/800/450" alt="Capstone Video Thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={handlePlayClick}
                      aria-label="Play video"
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">AI-Powered Recommendation Engine</h3>
            <p className="text-slate-300 mb-4">
              This project involved building a content recommendation system from the ground up. Using collaborative filtering and matrix factorization techniques on a large dataset, the system provides personalized suggestions to users in real-time.
            </p>
            <p className="text-slate-300">
              The tech stack includes Python, Pandas, and Scikit-learn for the model, a Node.js/Express API to serve predictions, and a React frontend for the user interface. It demonstrates a full-cycle development process from data processing to a live, interactive demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capstone;
