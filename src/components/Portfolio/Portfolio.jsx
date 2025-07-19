import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg">
          I'm a passionate civil engineer with over 7 years of experience in structural design,
          site supervision, and project coordination. I specialize in sustainable and cost-efficient
          solutions for residential and infrastructure projects. My work bridges the gap between 
          creativity and precision.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-4">Expertise</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Structural Design & Analysis (ETABS, STAAD.Pro)</li>
          <li>AutoCAD Drafting & BIM Modeling</li>
          <li>Site Supervision & Construction Management</li>
          <li>Soil Mechanics & Foundation Engineering</li>
          <li>Urban Drainage & Planning</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-4">Highlighted Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-bold text-rose-700 mb-2">Hilltop Eco Villas</h3>
            <p className="text-gray-600">Led the structural design and site execution for a sustainable residential complex in hilly terrain.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-bold text-rose-700 mb-2">Smart Bridge Retrofit</h3>
            <p className="text-gray-600">Managed a retrofitting project involving traffic optimization and seismic resilience upgrades.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;