"use client"; // Obligatoire car on utilise du state (interactivité)
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gérer l'effet au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ease-in-out ${scrolled ? "pt-2" : "pt-6"}`}>
      <nav className={`w-[95%] md:w-[90%] max-w-7xl glass-nav rounded-2xl px-6 py-4 flex items-center justify-between relative transition-all duration-300 ${scrolled ? "bg-dark-900/80 shadow-neon/10 py-3" : "bg-dark-900/60 py-4"}`}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-400 to-blue-600 flex items-center justify-center text-dark-900 font-bold text-lg group-hover:rotate-12 transition-transform duration-300 shadow-neon">
            M
          </div>
          <span className="text-xl font-bold text-white tracking-wide group-hover:text-neon-400 transition-colors">
            MANOA<span className="text-neon-400">.DEV</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {["Accueil", "À Propos", "Compétences", "Projets"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
            >
              {item}
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          
          <a href="#contact" className="px-6 py-2.5 bg-neon-400 text-dark-900 font-bold rounded-xl text-sm hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-neon">
            Me Contacter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>

        {/* Mobile Dropdown */}
        <div className={`${isOpen ? "flex" : "hidden"} absolute top-full left-0 right-0 mt-3 bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex-col gap-2 transform origin-top transition-all z-50`}>
          {["Accueil", "À Propos", "Compétences", "Projets"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium transition-all"
            >
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 mt-2 text-center rounded-xl bg-neon-400 text-dark-900 font-bold">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;