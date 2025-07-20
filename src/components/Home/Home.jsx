import React from "react";
import { Link } from "react-router-dom";
import BgLogo from "../BackgroundLogo"
import {
  Home as HomeIcon,
  Building,
  Coffee,
  Award,
} from "lucide-react";
import Portfolio from "../Portfolio";

const Module = ({ name, role, bio, Icon }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col items-center gap-3 border border-white/30 hover:scale-[1.04] hover:shadow-rose-200 transition-all duration-300 cursor-pointer group">
    <div className="mb-2">
      <Icon size={64} className="text-rose-400 opacity-30 group-hover:opacity-80 transition duration-300 ease-in-out" />
    </div>
    <h3 className="text-lg font-bold text-rose-700 group-hover:text-rose-900 transition duration-300 ease-in-out">{name}</h3>
    <div className="text-sm font-semibold text-rose-500 mb-1 group-hover:text-rose-600 transition duration-300 ease-in-out">{role}</div>
    <p className="text-gray-700 text-center group-hover:text-gray-900 transition duration-300 ease-in-out">{bio}</p>
  </div>
);

const Home = () => (
  <div className="relative min-h-screen max-w-7xl mx-auto px-4 py-16">
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 overflow-hidden">
      <BgLogo />
      <HomeIcon
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-100 z-0"
        style={{
          opacity: 0.08,
          width: "800px",
          height: "900px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-rose-700 mb-4 drop-shadow-lg">
          Building Dreams with Precision
        </h1>
        <p className="text-lg md:text-xl text-rose-500 mb-8 max-w-2xl">
          We are a team of experienced civil engineers delivering quality and sustainable structures with innovation and integrity.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-rose-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-rose-700 focus:ring-2 focus:ring-rose-400 focus:outline-none transition"
        >
          Start Your Project
        </Link>
      </div>
    </section>

    <section className="py-12">
      <Portfolio />
    </section>

    <section className="py-16 bg-rose-50 p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-10">
        Visualize your dream home
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
        <Module
          Icon={Building}
          name="Fusion"
          role="Principal Architect"
          bio="With over 15 years of experience in architectural design and project management, ArchiDesigns leads our team with expertise and innovation."
        />
        <Module
          Icon={Award}
          name="Passion"
          role="Structural Engineer"
          bio="Specializing in sustainable design and structural optimization, Sarah ensures our projects are both elegant and resilient."
        />
        <Module
          Icon={Coffee}
          name="Creativity"
          role="Project Manager"
          bio="David's attention to detail and client-focused approach helps deliver projects that exceed expectations, on time and within budget."
        />
      </div>
    </section>
  </div>
);

export default Home;