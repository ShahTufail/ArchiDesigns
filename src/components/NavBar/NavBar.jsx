import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import styles from "./NavBar.module.css";
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
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="ArchiDesigns Logo" className={styles.logo} />
        </Link>
        {/* <div className={styles.brand}>
            <Link to="/" className={styles["home-button"]}>
                ArchiDesigns<sup style={{fontSize:'1rem'}}>KMR</sup>
            </Link>
        </div> */}
        
        <button 
            className={styles["menu-button"]}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? (
                <X className={styles["menu-icon"]} size={24} />
            ) : (
                <Menu className={styles["menu-icon"]} size={24} />
            )}
        </button>

        <ul className={`${styles["nav-links"]} ${isMenuOpen ? styles.active : ''}`}>
            <li><Link to="/" className={styles["nav-link"]}>Home</Link></li>
            <li><Link to="/services" className={styles["nav-link"]}>Services</Link></li>
            <li><Link to="/works" className={styles["nav-link"]}>Gallery</Link></li>
            <li><Link to="/contact" className={styles["nav-link"]}>Contact</Link></li>
        </ul>

        <div className={styles["social-links"]}>
            <a href="https://www.facebook.com/ArchiDesignskashmir/" target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
                <Facebook size={30} />
            </a>
            <a href="https://www.instagram.com/archidesigns_kashmir/" target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
                <Instagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/designer-tabish-geelani-5608bb1a4/" target="_blank" rel="noopener noreferrer" className={styles["social-link"]}>
                <Linkedin size={30} />
            </a>
        </div>
    </nav>
);
};

export default NavBar;
