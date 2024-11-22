import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

const Resources = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects data
  useEffect(() => {
    axios
      .get("http://localhost:3000/Projects") // Fetch projects from json-server
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="bg-white p-4">
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 shadow-md rounded-lg p-4 bg-gray-100"
          >
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
            <Link
              to={`/resources/projects/${project.id}`}
              className="text-lime-600 font-medium hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get project ID from URL
  const [project, setProject] = useState(null);

  // Fetch project details based on ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
      });
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="text-gray-700">{project.description}</p>
      {project.users && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Team Members:</h2>
          <ul className="list-disc pl-6">
            {project.users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.role}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/resources" className="text-lime-600 font-medium hover:underline mt-4 block">
        Back to Projects
      </Link>
    </div>
  );
};

export { Resources, ProjectDetails };
