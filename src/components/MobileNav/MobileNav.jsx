import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-rose-50 border-t border-rose-200 z-50 flex justify-center py-2 shadow-lg">
      <div className="flex gap-6">
        <a
          href="https://www.facebook.com/ArchiDesignskashmir/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/archidesigns_kashmir/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/designer-tabish-geelani-5608bb1a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:archidesignskmr@gmail.com"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
