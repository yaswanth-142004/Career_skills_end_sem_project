import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Company from "./Components/Company";
import { Resources, ProjectDetails } from "./Components/Resources";
import Change from "./Components/Change";
import Email from "./Components/Email";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

const Layout = () => (
  <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<ResourcesRoute />} />
        <Route path="/resources/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </main>
    <Email />
  </div>
);

// Role-Based Resources Route
const ResourcesRoute = () => {
  const userRole = localStorage.getItem("userRole");

  if (userRole === "admin") {
    return <Change />;
  } else if (userRole === "guest") {
    return <Resources />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout Routes */}
        <Route element={<ProtectedRoute allowedRoles={["guest", "admin"]} />}>
          <Route path="*" element={<Layout />} />
        </Route>

        {/* Redirect to login for invalid routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
