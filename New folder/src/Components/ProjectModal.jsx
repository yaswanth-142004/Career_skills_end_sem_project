import React, { useState } from "react";

const ProjectModal = ({ isOpen, onClose, project, onSave }) => {
    const [localProject, setLocalProject] = useState({
      id: project?.id || "",
      name: project?.name || "",
      description: project?.description || "",
      users: project?.users || [],
    });
  
    const handleUserChange = (index, field, value) => {
      const updatedUsers = [...localProject.users];
      updatedUsers[index] = { ...updatedUsers[index], [field]: value };
      setLocalProject({ ...localProject, users: updatedUsers });
    };
  
    const addUser = () => {
      setLocalProject({
        ...localProject,
        users: [...localProject.users, { id: Date.now().toString(), name: "", role: "" }],
      });
    };
  
    const removeUser = (index) => {
      const updatedUsers = [...localProject.users];
      updatedUsers.splice(index, 1);
      setLocalProject({ ...localProject, users: updatedUsers });
    };
  
    return isOpen ? (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">
            {project ? "Edit Project" : "Add New Project"}
          </h2>
          {/* Project Name */}
          <input
            type="text"
            placeholder="Project Name"
            className="w-full mb-4 p-2 border rounded"
            value={localProject.name}
            onChange={(e) => setLocalProject({ ...localProject, name: e.target.value })}
          />
  
          {/* Project Description */}
          <textarea
            placeholder="Project Description"
            className="w-full mb-4 p-2 border rounded"
            value={localProject.description}
            onChange={(e) => setLocalProject({ ...localProject, description: e.target.value })}
          ></textarea>
  
          {/* Users */}
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Team Members</h3>
          {localProject.users.map((user, index) => (
            <div key={user.id} className="mb-4">
              <input
                type="text"
                placeholder="User Name"
                className="w-full mb-2 p-2 border rounded"
                value={user.name}
                onChange={(e) => handleUserChange(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Role"
                className="w-full mb-2 p-2 border rounded"
                value={user.role}
                onChange={(e) => handleUserChange(index, "role", e.target.value)}
              />
              <button
                onClick={() => removeUser(index)}
                className="text-red-600 text-sm underline"
              >
                Remove User
              </button>
            </div>
          ))}
          <button
            onClick={addUser}
            className="bg-lime-600 text-white px-4 py-2 rounded mb-4"
          >
            Add User
          </button>
  
          {/* Modal Actions */}
          <div className="flex justify-end space-x-2">
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
              Cancel
            </button>
            <button
              onClick={() => onSave(localProject)}
              className="px-4 py-2 bg-lime-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };
  
  export default ProjectModal;