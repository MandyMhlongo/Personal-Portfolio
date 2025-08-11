
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFIsrd21A59cw/profile-displayphoto-scale_200_200/B4DZiUAWDMH8Ac-/0/1754829778484?e=1757548800&v=beta&t=qTh5oZ5rVjE58K4nxI2p4KUOQdoDeG7qBJEMLcOk05A"
            alt="Portrait"
            className="rounded-full h-48 w-48 md:h-64 md:w-64 object-cover border-4 border-slate-700 shadow-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            I’m an aspiring IT support professional with a background in System Development and Support, currently learning my way through the field by solving technical problems, assisting users, and building my skills every day.
          </p>
          <p className="text-lg text-slate-300 mb-8">
            <strong>Career Objective:</strong> To secure an IT support role where I can apply my technical skills and customer service experience while growing in a team-focused, innovative environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
