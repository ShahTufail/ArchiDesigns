import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const facebookUrl = import.meta.env.VITE_REACT_APP_FACEBOOK_URL;
const instagramUrl = import.meta.env.VITE_REACT_APP_INSTAGRAM_URL;
const linkedinUrl = import.meta.env.VITE_REACT_APP_LINKEDIN_URL;
const emailAddress = import.meta.env.VITE_REACT_APP_EMAIL_ADDRESS;
const phoneNumber = import.meta.env.VITE_REACT_APP_PHONE_NUMBER;

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-rose-50 border-t border-rose-200 z-50 flex justify-center py-2 shadow-lg">
      <div className="flex gap-6">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Facebook size={24} />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Instagram size={24} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Linkedin size={24} />
        </a>
        <a
          href={`mailto:${emailAddress}`}
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Mail size={24} />
        </a>
        <a
          href={`tel:${phoneNumber}`}
          className="text-rose-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-full bg-white shadow hover:scale-110 active:scale-95"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
