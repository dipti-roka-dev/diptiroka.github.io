import React from 'react';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Wollongong',
    period: 'Dec 2022',
    details: [
      'Dual Major: Software Engineering & Cyber-Security',
      'Projects: Java/Spring Boot scalable apps, PHP/Python/SQL/MongoDB systems',
      'UOWx Award for extracurricular leadership and problem-solving',
    ],
  },
  {
    degree: 'Post Graduate Program in DevOps',
    institution: 'Purdue University',
    period: 'Currently ongoing',
    details: [],
  },
];

const Education = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-8">Education</h1>

      <div className="w-full max-w-3xl">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold">{edu.degree}</h2>
            <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
            {edu.details.length > 0 && (
              <ul className="list-disc list-inside space-y-2">
                {edu.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
