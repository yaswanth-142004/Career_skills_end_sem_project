import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import ProjectModal from "./ProjectModal";

const Change = () => {
  const [runningProjects, setRunningProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/Projects")
      .then((response) => {
        const projects = response.data;
        setRunningProjects(projects.filter((project) => project.status));
        setCompletedProjects(projects.filter((project) => !project.status));
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const openModal = (project = null) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const deleteProject = (projectId) => {
    axios.delete(`http://localhost:3000/Projects/${projectId}`)
      .then(() => {
        setRunningProjects(runningProjects.filter((project) => project.id !== projectId));
        setCompletedProjects(completedProjects.filter((project) => project.id !== projectId));
      })
      .catch((error) => console.error(`Error deleting project with ID ${projectId}:`, error));
  };

  const saveProject = (updatedProject) => {
    if (updatedProject.id) {
      // Update an existing project
      axios
        .put(`http://localhost:3000/Projects/${updatedProject.id}`, updatedProject)
        .then(() => {
          setRunningProjects((prev) =>
            prev.map((project) =>
              project.id === updatedProject.id ? updatedProject : project
            )
          );
          setCompletedProjects((prev) =>
            prev.map((project) =>
              project.id === updatedProject.id ? updatedProject : project
            )
          );
        })
        .catch((error) => console.error("Error updating project:", error));
    } else {
      // Add a new project
      const newProject = { ...updatedProject, id: Date.now().toString(), status: false };
      axios
        .post("http://localhost:3000/Projects", newProject)
        .then(() => {
          setRunningProjects((prev) => [...prev, newProject]);
        })
        .catch((error) => console.error("Error adding project:", error));
    }
    setIsModalOpen(false);
  };
  

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Company Projects</h1>
            <p className="text-gray-600">Manage and track your ongoing and completed projects</p>
          </div>
          <button
            onClick={() => openModal()}
            className="flex items-center bg-lime-600 text-white px-5 py-3 rounded-lg hover:bg-lime-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Add New Project
          </button>
        </header>

        <ProjectList
          title="Currently Running Projects"
          projects={runningProjects}
          onEdit={openModal}
          onDelete={deleteProject}
          isRunning
        />

        <ProjectList
          title="Completed Projects"
          projects={completedProjects}
          onEdit={openModal}
          onDelete={deleteProject}
          isRunning={false}
        />

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={currentProject}
          onSave={saveProject}
        />
      </div>
    </div>
  );
};

export default Change;
