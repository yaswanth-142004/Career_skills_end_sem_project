import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Import components
import "./index.css";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Company from "./Components/Company";
import { Resources, ProjectDetails } from "./Components/Resources";
import Change from "./Components/Change.jsx";
import Email from "./Components/Email";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

// Layout Component
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Email />
    </>
  );
};

// Specific Route Component for Resources with Role Check
const ResourcesRoute = () => {
  const userRole = localStorage.getItem('userRole');
  
  // Render different components based on user role
  if (userRole === 'admin') {
    return <Change />;
  } else if (userRole === 'guest') {
    return <Resources />;
  } else {
    // Fallback to login if no valid role
    return <Navigate to="/login" replace />;
  }
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Layout Route */}
        <Route element={<ProtectedRoute allowedRoles={['guest', 'admin']} />}>
          <Route element={<Layout />}>
            {/* Nested Protected Routes */}
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Role-Based Resources Route */}
            <Route path="/resources" element={<ResourcesRoute />} />
            
            <Route path="/resources/projects/:projectId" element={<ProjectDetails />} />
          </Route>
        </Route>
        
        {/* Redirect root and handle invalid routes */}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);