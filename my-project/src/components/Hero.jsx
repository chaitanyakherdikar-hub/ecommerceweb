import React from "react";

const Hero = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/ecommerceweb/Hero.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-purple-400">Chaitanya</h1>
        <p className="text-lg text-gray-300">
          Capturing the raw beauty of the streets — one shot at a time.
        </p>
      </div>
    </div>
  );
};

export default Hero;
