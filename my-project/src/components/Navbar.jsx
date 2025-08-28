import React from "react";

const Navbar = () => {
  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "shop", label: "Shop" },
    { id: "contact", label: "Contact" },
    { id: "cart", label: "Cart" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-purple-500 tracking-wide cursor-pointer"
            onClick={() => scrollToSection("hero")}>
          StreetoGraphs
        </h1>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
