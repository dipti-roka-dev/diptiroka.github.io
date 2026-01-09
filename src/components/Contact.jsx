import React from 'react';

const Contact = () => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
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
        <a
          href="https://www.linkedin.com/in/dipti-roka/"
          className="text-blue-500"
          target="_blank"
        >
          linkedin.com/in/dipti-roka
        </a>
      </p>
    </section>
  );
};

export default Contact;
