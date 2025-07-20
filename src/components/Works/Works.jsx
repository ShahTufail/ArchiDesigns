import React from "react";
import { Building, Building2, Factory, School } from "lucide-react";
import BgLogo from "../BackgroundLogo";

const WorkCard = ({ icon: Icon, title, category, description, variant }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 border border-white/30 hover:scale-[1.04] hover:shadow-rose-200 transition-all duration-300 cursor-pointer group">
    <div className="mb-2">
      <Icon size={48} className="text-rose-400 opacity-30 group-hover:opacity-80 transition duration-300 ease-in-out" />
    </div>
    <div className="text-xs font-semibold uppercase text-rose-500 mb-1 group-hover:text-rose-600 transition duration-300">{category}</div>
    <h3 className="text-lg font-bold text-rose-700 group-hover:text-rose-900 transition duration-300">{title}</h3>
    <p className="text-gray-700 text-center group-hover:text-gray-900 transition duration-300">{description}</p>
  </div>
);

const Works = () => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <BgLogo />
    <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mt-10 mb-6">Our Portfolio</h2>
    <p className="text-lg text-rose-500 mb-10 text-center max-w-2xl mx-auto">
      Explore our diverse portfolio of successful projects across residential, commercial, industrial, and institutional sectors.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <WorkCard
        icon={Building}
        category="Residential"
        title="Modern Living Spaces"
        description="Contemporary residential projects featuring innovative designs, sustainable materials, and optimal space utilization."
        variant="residential"
      />
      <WorkCard
        icon={Building2}
        category="Commercial"
        title="Business Complexes"
        description="State-of-the-art commercial buildings designed for efficiency, accessibility, and modern business needs."
        variant="commercial"
      />
      <WorkCard
        icon={Factory}
        category="Industrial"
        title="Industrial Facilities"
        description="Robust industrial structures engineered for functionality, safety, and seamless operational flow."
        variant="industrial"
      />
      <WorkCard
        icon={School}
        category="Institutional"
        title="Educational Campuses"
        description="Purpose-built educational facilities that foster learning through thoughtful design and space planning."
        variant="institutional"
      />
    </div>
  </div>
);

export default Works;