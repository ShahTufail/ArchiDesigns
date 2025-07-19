import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav/MobileNav";
import Home from "./components/Home";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/ArchiDesigns">
      <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
