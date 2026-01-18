import React from 'react';

const Contact = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Let's connect</h2>
      <p>
        I'm actively exploring US remote/full-time opportunities—especially in gaming, fintech, or
        SaaS with modern stacks.
      </p>
      <p>
        Email:{' '}
        <a href="mailto:dipti.roka.dev@gmail.com" className="text-blue-500">
          dipti.roka.dev@gmail.com
        </a>
      </p>
      <p>
        GitHub:{' '}
        <a href="https://github.com/dipti-roka-dev" className="text-blue-500" target="_blank">
          dipti-roka-dev
        </a>
      </p>
      <p>
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/dipti-roka/" className="text-blue-500" target="_blank">
          linkedin.com/in/dipti-roka
        </a>
      </p>
    </section>
  );
};

export default Contact;
