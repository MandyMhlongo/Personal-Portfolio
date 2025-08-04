import React from 'react';

const skillsData = {
  'Capabilities': [
    'Basic programming and web design (HTML, CSS)',
    'Customer service and front-line support',
    'Use of enterprise systems (SAP CRM, admissions platforms)',
  ],
  'Soft Skills': ['Problem Solving', 'Teamwork', 'Communication', 'Time Management'],
  'Strengths': [
    'Detail-oriented and reliable',
    'Team player with a proactive mindset',
    'Fast learner and adaptable',
  ],
};

type SkillCategory = keyof typeof skillsData;

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skills & Competencies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
            <div key={category} className="bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillsData[category].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <svg className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;