import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";


const Resources = () => {
  const [projects, setProjects] = useState([]);
  const [runningProjects, setRunningProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);

  // Fetch projects data
  useEffect(() => {
    axios
      .get("http://localhost:3000/Projects") // Fetch projects from JSON-server
      .then((response) => {
        const allProjects = response.data;
        // Divide projects
        setRunningProjects(allProjects.filter((allProjects)=>allProjects.status)); // First 3 as running
        setCompletedProjects(allProjects.filter((allProjects)=>allProjects.status)); // Remaining 7 as completed
        setProjects(allProjects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Company Projects
      </h1>

      {/* Currently Running Projects */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700 border-b-2 border-lime-600 inline-block">
          Currently Running Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {runningProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-300 shadow-lg rounded-xl p-5 bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-xl font-semibold mb-2 text-lime-700">
                {project.name}
              </h2>
              <ul className="text-gray-600 mb-4 list-disc ml-4">
                {project.users.map((user) => (
                  <li key={user.id}>
                    {user.role} - {user.name}
                  </li>
                ))}
              </ul>
              <Link
                to={`/resources/projects/${project.id}`}
                className="text-lime-600 font-medium hover:underline block mt-4"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Already Completed Projects */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700 border-b-2 border-gray-500 inline-block">
          Already Completed Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-300 shadow-md rounded-xl p-5 bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {project.name}
              </h2>
              <ul className="text-gray-600 mb-4 list-disc ml-4">
                {project.users.map((user) => (
                  <li key={user.id}>
                    {user.role} - {user.name}
                  </li>
                ))}
              </ul>
              <Link
                to={`/resources/projects/${project.id}`}
                className="text-gray-700 font-medium hover:underline block mt-4"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;



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

  if (!project)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-lg">Loading project details...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Project Header */}
        <div className="bg-lime-600 text-white p-6">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="text-lg mt-2">{project.description}</p>
        </div>

        {/* Project Team Members */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Team Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.users.map((user) => (
              <div
                key={user.id}
                className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-100"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lime-200 flex justify-center items-center font-bold text-lime-700">
                  {user.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-gray-600">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="p-6 border-t border-gray-200">
          <Link
            to="/resources"
            className="text-lime-600 font-medium hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};




export { Resources, ProjectDetails };
