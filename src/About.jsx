import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-4xl font-bold">About Varun Raj</h1>
      </header>
      <main className="p-4 sm:p-8 max-w-4xl mx-auto">
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi, I'm Varun Raj, a passionate web developer dedicated to crafting dynamic and responsive web applications. With a strong foundation in web technologies, I specialize in creating user-friendly and efficient applications using the latest technologies.
          </p>
          <p className="text-lg">
            My journey as a web developer began with a fascination for the web and its capabilities. Over the years, I've honed my skills in various areas, including front-end development, back-end development, and database management. My goal is to continue learning and growing in this field, contributing to impactful projects and making a difference through technology.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold">Responsive Food Delivery App</h3>
              <p className="text-lg">
                A responsive web application built using React, Redux Toolkit, and Firebase for user authentication and secure payment integration with Razorpay. This project showcases my skills in frontend development, state management, and secure payment gateway integration.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold">E-commerce Platform</h3>
              <p className="text-lg">
                Developed a full-stack e-commerce platform using React.js for the frontend and MongoDB for the backend. Implemented features like product listing, shopping cart, and user authentication.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold">Portfolio Website</h3>
              <p className="text-lg">
                Created a personal portfolio website to showcase my projects and skills. The website is built with React.js and Tailwind CSS, and includes a blog section where I share my knowledge and experiences.
              </p>
            </div>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            Feel free to reach out to me for any web development projects or collaboration opportunities. You can contact me at:
          </p>
          <p className="text-lg font-semibold">Email: varunraj1545@gmail.com</p>
          <p className="text-lg font-semibold">LinkedIn: linkedin.com/in/varunraj23</p>
        </section>
      </main>
    </div>
  );
};

export default About;



