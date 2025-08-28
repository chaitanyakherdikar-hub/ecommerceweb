import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6 text-white">
      <img
        src="/ecommerceweb/About.jpg"
        alt="About"
        className="w-full md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
      />
      <div className="md:ml-8">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am passionate about freezing moments from the streets into timeless photographs. 
          Every picture tells a story — raw, authentic, and powerful. 
          StreetoGraphs is more than a gallery; it’s my perspective on the world.
        </p>
      </div>
    </div>
  );
};

export default About;
