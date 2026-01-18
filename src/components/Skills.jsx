import React from 'react';

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript'],
  Backend: ['Java', 'Kotlin', 'Spring Boot', 'Node.js', 'Express.js'],
  Databases: ['PostgreSQL', 'SQL', 'NoSQL (MongoDB)'],
  Practices: ['TDD', 'BDD', 'SOLID', 'CQRS', 'Event Sourcing', 'Code Reviews', 'Agile'],
  Tools: ['Git/GitHub', 'CodeFresh (CI/CD)', 'Jest', 'Mocha', 'Docker'],
  Other: ['AWS (exploring)', 'Performance Optimization', 'API Integration'],
};

const Skills = () => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="text-left">
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
