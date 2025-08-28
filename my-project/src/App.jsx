import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex-grow">
        <section id="hero"><Hero /></section>
        <section id="about" className="py-12"><About /></section>
        <section id="shop" className="py-12"><Shop /></section>
        <section id="contact" className="py-12"><Contact /></section>
        <section id="cart" className="py-12"><Cart /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
