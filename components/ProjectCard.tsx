
import React from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-slate-700 text-cyan-300 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-slate-400 mb-6 text-sm h-20">{project.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-cyan-400 transition-colors"
          >
            <ExternalLinkIcon className="h-5 w-5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-cyan-400 transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
