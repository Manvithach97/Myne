import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";

// Components
import Header from "./pages/Header/Header";

// Pages
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
 // ✅ Make sure the path is correct

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle between OnePage and Route mode

  return (
    <>
      <Header />

      {isOnePage ? (
        // ✅ One-Page Mode
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          {/* <ExtraCurricular /> */}
          <Projects />
          <Contact />
        </>
      ) : (
        // ✅ Routing Mode
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          {/* <Route path="/extra-curricular" element={<ExtraCurricular />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}
