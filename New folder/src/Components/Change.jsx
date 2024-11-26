import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pencil, Trash2, PlusCircle, Eye, CheckCircle, MoreHorizontal } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ProjectCard Component
const ProjectCard = ({ project, onEdit, onDelete, isRunning = true }) => (
  <div
    className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
      isRunning
        ? "bg-white border-2 border-lime-100 hover:border-lime-300"
        : "bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
    }`}
  >
    {/* Decorative Accent Line */}
    <div
      className={`absolute top-0 left-0 w-full h-1 ${
        isRunning ? "bg-lime-600" : "bg-gray-500"
      }`}
    />
    <div className="p-6">
      {/* Project Header */}
      <div className="flex justify-between items-start mb-4">
        <h2
          className={`text-2xl font-bold ${
            isRunning ? "text-lime-800" : "text-gray-800"
          }`}
        >
          {project.name}
        </h2>
        {/* Action Dropdown */}
        <div className="relative">
          <button
            className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition duration-300 focus:outline-none"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
      {/* Project Description */}
      <p className="text-gray-600 mb-4 truncate">
        {project.description || "No description available"}
      </p>
      {/* Team Members */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Team Members</h3>
        <ul className="space-y-1">
          {project.users && project.users.slice(0, 3).map((user, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="mr-2 text-gray-500">•</span>
              {user.name} - {user.role}
            </li>
          ))}
          {project.users && project.users.length > 3 && (
            <li className="text-sm text-gray-500">
              +{project.users.length - 3} more
            </li>
          )}
        </ul>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        {/* View Details */}
        <Link
          to={`/resources/projects/${project.id}`}
          className={`flex items-center ${
            isRunning
              ? "text-lime-700 hover:text-lime-900"
              : "text-gray-700 hover:text-gray-900"
          } font-semibold transition duration-300`}
        >
          <Eye size={18} className="mr-2" />
          View Details
        </Link>
        {/* Edit and Delete Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(project)}
            className="flex items-center bg-blue-200 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition duration-300 group"
          >
            <Pencil size={16} className="mr-2 text-blue-500 group-hover:scale-110 transition" />
            Edit
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="flex items-center bg-red- text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition duration-300 group"
          >
            <Trash2 size={16} className="mr-2 text-red-500 group-hover:scale-110 transition" />
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Modal Component (remains the same as in previous code)
const Modal = ({ isOpen, onClose, onSubmit, project }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: false,
    users: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      // Reset form when creating a new project
      setFormData({
        name: "",
        description: "",
        status: false,
        users: [],
      });
    }
  }, [project]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Project name is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{project ? "Edit Project" : "Add New Project"}</h2>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Project Name"
            className={`w-full px-4 py-2 border rounded-lg text-black ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            className={`w-full px-4 py-2 border rounded-lg text-black ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
        <div className="mb-3">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Project Completed</span>
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-lime-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-lime-700"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Main Change Component with API interactions
const Change = () => {
  const [projects, setProjects] = useState([]);
  const [runningProjects, setRunningProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // Fetch projects from backend
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Projects");
      const projects = response.data;
      setProjects(projects);
      setRunningProjects(projects.filter((project) => !project.status));
      setCompletedProjects(projects.filter((project) => project.status));
    } catch (error) {
      toast.error("Failed to fetch projects");
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openModal = (project = null) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  // Handle Project Submit (Create/Update)
  const handleProjectSubmit = async (projectData) => {
    try {
      if (projectData.id) {
        // Update existing project
        await axios.put(`http://localhost:3000/Projects/${projectData.id}`, projectData);
        toast.success("Project updated successfully");
      } else {
        // Create new project
        const response = await axios.post("http://localhost:3000/Projects", projectData);
        toast.success("Project created successfully");
      }
      // Refresh projects list
      fetchProjects();
    } catch (error) {
      toast.error("Failed to save project");
      console.error("Error saving project:", error);
    }
  };

  // Delete Project
  const deleteProject = async (projectId) => {
    try {
      // Confirm deletion
      const confirmDelete = window.confirm("Are you sure you want to delete this project?");
      
      if (confirmDelete) {
        await axios.delete(`http://localhost:3000/Projects/${projectId}`);
        toast.success("Project deleted successfully");
        
        // Refresh projects list
        fetchProjects();
      }
    } catch (error) {
      toast.error("Failed to delete project");
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
      <div className="max-w-7xl mx-auto">
        {/* Page Header remains the same */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Company Projects</h1>
            <p className="text-gray-600">Manage and track your ongoing and completed projects</p>
          </div>
          <button
            onClick={() => openModal()}
            className="flex items-center bg-lime-600 text-white px-5 py-3 rounded-lg hover:bg-lime-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            <PlusCircle size={20} className="mr-2" />
            Add New Project
          </button>
        </div>

        {/* Running Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <CheckCircle size={24} className="mr-3 text-lime-600" />
            <h2 className="text-2xl font-bold text-gray-800">Currently Running Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {runningProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={openModal}
                onDelete={deleteProject}
                isRunning={true}
              />
            ))}
          </div>
        </section>

        {/* Completed Projects Section */}
        <section>
          <div className="flex items-center mb-6">
            <CheckCircle size={24} className="mr-3 text-gray-500" />
            <h2 className="text-2xl font-bold text-gray-800">Completed Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={openModal}
                onDelete={deleteProject}
                isRunning={false}
              />
            ))}
          </div>
        </section>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleProjectSubmit}
        project={currentProject}
      />
    </div>
  );
};

export default Change;