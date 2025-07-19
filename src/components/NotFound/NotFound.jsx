import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Ruler, HardHat } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Building2 className="absolute left-10 top-10 text-rose-200 opacity-30 animate-spin-slow" size={120} style={{ transform: 'rotate(-15deg)' }} />
        <Ruler className="absolute right-10 top-32 text-rose-200 opacity-30 animate-spin-slow" size={100} style={{ transform: 'rotate(15deg)' }} />
        <HardHat className="absolute left-1/4 bottom-20 text-rose-200 opacity-30 animate-spin-slow" size={80} style={{ transform: 'rotate(30deg)' }} />
        <Building2 className="absolute right-1/4 bottom-10 text-rose-200 opacity-30 animate-spin-slow" size={90} style={{ transform: 'rotate(-30deg)' }} />
      </div>
      <div className="relative z-10 flex flex-col items-center px-4 py-12">
        <div className="text-7xl md:text-9xl font-extrabold text-rose-400 mb-4 drop-shadow-lg">404</div>
        <h1 className="text-3xl md:text-5xl font-bold text-rose-700 mb-4">Page Not Found</h1>
        <p className="text-lg text-rose-500 mb-8 text-center max-w-xl">
          Oops! The page you're looking for seems to have been misplaced in our architectural plans.<br />
          Let's get you back to the main blueprint.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-700 focus:ring-2 focus:ring-rose-400 transition">
          <Home size={20} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
