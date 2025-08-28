import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <section className="p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl mb-4">Welcome to StreetoGraphs</h2>
        <p className="text-gray-400">
          Discover stunning street photography from around the world. Each photograph captures a unique story, ready to be part of your collection.
        </p>
      </section>
    </div>
  );
}

export default Home;
