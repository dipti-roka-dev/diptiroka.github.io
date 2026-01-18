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
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>
      <div className="p-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#e5e7eb', // gray-200
                    borderRadius: '9999px', // rounded-full
                    display: 'inline-block', // ensures spacing works
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
