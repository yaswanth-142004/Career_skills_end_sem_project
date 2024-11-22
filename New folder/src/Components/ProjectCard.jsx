import React from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Eye, MoreHorizontal } from "lucide-react";

const ProjectCard = ({ project, onEdit, onDelete, isRunning }) => (
  <div
    className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
      isRunning
        ? "bg-white border-2 border-lime-100 hover:border-lime-300"
        : "bg-gray-50 border-2 border-gray-200 hover:border-gray-300"
    }`}
  >
    <div
      className={`absolute top-0 left-0 w-full h-1 ${isRunning ? "bg-lime-600" : "bg-gray-500"}`}
    />
    <div className="p-6">
      <header className="flex justify-between items-start mb-4">
        <h2 className={`text-2xl font-bold ${isRunning ? "text-lime-800" : "text-gray-800"}`}>
          {project.name}
        </h2>
        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition duration-300">
          <MoreHorizontal size={20} />
        </button>
      </header>
      <p className="text-gray-600 mb-4 truncate">{project.description || "No description available"}</p>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Team Members</h3>
        <ul className="space-y-1">
          {project.users.slice(0, 3).map((user) => (
            <li key={user.id} className="flex items-center text-sm text-gray-700">
              <span className="mr-2 text-gray-500">•</span>
              {user.name} - {user.role}
            </li>
          ))}
          {project.users.length > 3 && (
            <li className="text-sm text-gray-500">+{project.users.length - 3} more</li>
          )}
        </ul>
      </div>
      <footer className="flex justify-between items-center mt-6">
        <Link
          to={`/resources/projects/${project.id}`}
          className={`flex items-center font-semibold transition ${
            isRunning ? "text-lime-700 hover:text-lime-900" : "text-gray-700 hover:text-gray-900"
          }`}
        >
          <Eye size={18} className="mr-2" />
          View Details
        </Link>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(project)}
            className="flex items-center bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition group"
          >
            <Pencil size={16} className="mr-2 text-blue-500 group-hover:scale-110 transition" />
            Edit
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="flex items-center bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition group"
          >
            <Trash2 size={16} className="mr-2 text-red-500 group-hover:scale-110 transition" />
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
);

export default ProjectCard;
