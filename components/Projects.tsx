
import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'Sentiment Analysis API',
    description: 'Sentiment analysis detects if text is positive, negative, or neutral.',
    imageUrl: 'https://mondfx.com/wp-content/uploads/2024/11/1688232996-1.png',
    tags: [],
    liveDemoUrl: 'https://sentimental-analysis-kdtjyt8f7gm7ni4yqufbex.streamlit.app/',
    githubUrl: 'https://github.com/MandyMhlongo',
  },
  {
    title: 'AI Concept Chatbot',
    description: 'An interactive AI educational chatbot that serves as a knowledge assistant for AI fundamentals.',
    imageUrl: 'data:image/png;base64,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',
    tags: [],
    liveDemoUrl: 'https://landbot.online/v3/H-2940542-BMFIZK3JPWO9T9L4/index.html',
    githubUrl: 'https://github.com/MandyMhlongo',
  },
  {
    title: 'Resume AI Builder',
    description: 'A resume AI builder helps you quickly create a professional resume by guiding you step-by-step and generating content automatically based on your experience, skills, and career goals.',
    imageUrl: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdW1lfGVufDB8fDB8fHww',
    tags: [],
    liveDemoUrl: 'https://resume-2-0-taupe.vercel.app/',
    githubUrl: 'https://github.com/MandyMhlongo',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            A selection of my work demonstrating practical skills and problem-solving abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
