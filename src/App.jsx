import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router basename="/ArchiDesigns">
      <div className="relative">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
