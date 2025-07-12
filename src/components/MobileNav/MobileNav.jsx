import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import styles from './MobileNav.module.css';

const MobileNav = () => {
  return (
    <div className={styles['mobile-bottom-bar']}>
      <div className={styles['mobile-social-links']}>
        <a href="https://www.facebook.com/ArchiDesignskashmir/" target="_blank" rel="noopener noreferrer" className={styles['mobile-social-link']}>
          <Facebook size={24} />
        </a>
        <a href="https://www.instagram.com/archidesigns_kashmir/" target="_blank" rel="noopener noreferrer" className={styles['mobile-social-link']}>
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/designer-tabish-geelani-5608bb1a4/" target="_blank" rel="noopener noreferrer" className={styles['mobile-social-link']}>
          <Linkedin size={24} />
        </a>
        <a href="mailto:archidesignskmr@gmail.com" className={styles['mobile-social-link']}>
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
