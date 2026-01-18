import React from 'react';

const experience = [
  {
    title: 'Software Engineer',
    company: 'Virtual Gaming Worlds (VGW) – Chumba Casino (US market leader)',
    period: 'Jan 2023 – Jan 2024',
    points: [
      'Engineered full-stack features with React/TypeScript frontend and Kotlin/Java/Spring Boot/Node.js/Express backend, following SOLID and clean architecture to support high-engagement gaming platform.',
      'Reduced CI/CD deployment time by 10 minutes via optimized CodeFresh pipelines, enabling faster releases and team velocity.',
      'Achieved 90% code coverage with Jest/Mocha, significantly reducing defects and improving reliability.',
      'Optimized PostgreSQL queries and redesigned event-sourcing architecture, cutting customer response times and boosting performance.',
      'Conducted thorough code reviews and collaborated with product/design/QA to align engineering with business goals—contributing to 20% user engagement increase.',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: '909 IT Solutions',
    period: 'Jan 2023 – Jan 2024',
    points: [
      'Developed full-stack web applications using PHP, JavaScript/jQuery, HTML/CSS, and SQL, with secure third-party API integrations.',
      'Optimized performance by identifying/resolving bottlenecks and improving application efficiency.',
      'Collaborated on debugging, code reviews, and feature development in agile environments.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>

      <div className="w-full max-w-3xl">
        {experience.map((job, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{job.company}</p>
            <p className="text-sm text-gray-500 mb-3">{job.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
