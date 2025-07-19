import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import logo from "../../assets/logo_w.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur border-b border-rose-100 transition-shadow ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ArchiDesigns Logo" className="h-12 w-auto rounded-lg shadow" />
        </Link>
        <button
          className="md:hidden p-2 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
        <ul className="hidden md:flex items-center gap-8">
        {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/works", label: "Gallery" },
            { to: "/contact", label: "Contact" }
        ].map(({ to, label }) => (
            <li key={label}>
            <Link
                to={to}
                className="group relative text-[18px] text-rose-700 font-semibold transition-all duration-300 ease-out hover:text-rose-900"
            >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-700 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            </li>
        ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.facebook.com/ArchiDesignskashmir/" target="_blank" rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/archidesigns_kashmir/" target="_blank" rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/designer-tabish-geelani-5608bb1a4/" target="_blank" rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      <ul className={`md:hidden bg-white border-t border-rose-100 px-4 py-4 flex flex-col gap-4 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
        <li><Link to="/" className="text-rose-700 font-semibold hover:text-rose-900 transition">Home</Link></li>
        <li><Link to="/services" className="text-rose-700 font-semibold hover:text-rose-900 transition">Services</Link></li>
        <li><Link to="/works" className="text-rose-700 font-semibold hover:text-rose-900 transition">Gallery</Link></li>
        <li><Link to="/contact" className="text-rose-700 font-semibold hover:text-rose-900 transition">Contact</Link></li>
        <div className="flex items-center gap-4 mt-2">
          <a href="https://www.facebook.com/ArchiDesignskashmir/" target="_blank" rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/archidesigns_kashmir/" target="_blank" rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/designer-tabish-geelani-5608bb1a4/" target="_blank" rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95">
            <Linkedin size={24} />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
