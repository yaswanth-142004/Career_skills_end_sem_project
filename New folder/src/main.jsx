import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Company from "./Components/Company";
import { Resources, ProjectDetails } from "./Components/Resources";
import Email from "./Components/Email";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Email />
    </BrowserRouter>
  </React.StrictMode>
);
