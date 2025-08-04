import React from 'react';
import { EmailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from './Icons';

const contactInfo = [
  {
    name: 'Email Address',
    value: 'mhlongomandy@gmail.com',
    href: 'mailto:mhlongomandy@gmail.com',
    icon: EmailIcon,
  },
  {
    name: 'Phone Number',
    value: '0748541665',
    href: 'tel:0748541665',
    icon: PhoneIcon,
  },
  {
    name: 'LinkedIn',
    value: 'Mandy Mhlongo',
    href: 'https://www.linkedin.com/in/mandy-mhlongo-9a048991/',
    icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    value: 'MandyMhlongo',
    href: 'https://github.com/MandyMhlongo',
    icon: GitHubIcon,
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            I'm open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((item) => {
            const isExternal = item.href.startsWith('http');
            return (
              <a
                key={item.name}
                href={item.href}
                className="group bg-slate-900 rounded-lg p-6 shadow-lg text-center transition-all duration-300 hover:bg-slate-700 hover:shadow-cyan-500/20"
                aria-label={`Contact by ${item.name}`}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-slate-300 group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
