import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-[500px]">
      <img src="/Hero.jpg" alt="Hero" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40">
        <h1 className="text-5xl font-bold mb-4">Capture the Streets</h1>
        <p className="text-lg max-w-xl">Explore unique street photography and bring the charm of the streets to your walls.</p>
      </div>
    </section>
  );
}

export default Hero;
