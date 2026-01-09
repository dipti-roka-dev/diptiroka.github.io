import React from 'react';

const skills = ['React ', 'Node.js ', 'Java ', 'Spring Boot ', 'AWS ', 'Docker ', 'Vite ', 'Git '];

const Skills = () => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-200 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
