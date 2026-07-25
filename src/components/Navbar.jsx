import { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-blue-600/30">
            <img
              src={logo}
              alt="NorthPeak Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-white font-bold text-xl tracking-wide">
              NorthPeak
            </h2>
            <p className="text-xs text-slate-400">Digital Agency</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-slate-300 hover:text-blue-500 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-blue-600/20"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-blue-500 transition"
            >
              {item.name}
            </a>
          ))}

          <div className="p-6">
            <a
              href="#contact"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
