import React, { useState,useEffect } from "react";

const ProjectModal = ({ isOpen, onClose, project, onSave }) => {
 





  const [localProject, setLocalProject] = useState({
    id: project?.id || "", // Ensure id is properly handled
    name: project?.name || "",
    description: project?.description || "",
    users: project?.users || [],
  });
  
  useEffect(() => {
    console.log("Project received by modal: ", project);
  }, [project]);
  

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
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-96 transition-all ${
          project ? "border-lime-600 border-l-4" : "border-blue-600 border-l-4"
        }`}
      >
        <h2
          className={`text-xl font-bold mb-4 ${
            project ? "text-lime-600" : "text-blue-600"
          }`}
        >
          {project ? "Edit Project" : "Add New Project"}
        </h2>
        {/* Project Name */}
<input
  type="text"
  placeholder="Project Name"
  className="w-full mb-4 p-2 border rounded text-gray-900 focus:ring-2 focus:ring-lime-600"
  value={localProject.name}
  onChange={(e) => setLocalProject({ ...localProject, name: e.target.value })}
/>

{/* Project Description */}
<textarea
  placeholder="Project Description"
  className="w-full mb-4 p-2 border rounded text-gray-900 focus:ring-2 focus:ring-lime-600"
  value={localProject.description}
  onChange={(e) => setLocalProject({ ...localProject, description: e.target.value })}
/>


        {/* Users */}
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Team Members</h3>
        {localProject.users.map((user, index) => (
          <div key={user.id} className="mb-4">
            <input
              type="text"
              placeholder="User Name"
              className="w-full mb-2 p-2 border rounded focus:ring-2 focus:ring-lime-600"
              value={user.name}
              onChange={(e) => handleUserChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full mb-2 p-2 border rounded focus:ring-2 focus:ring-lime-600"
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
          className="bg-lime-600 text-black px-4 py-2 rounded mb-4"
        >
          Add User
        </button>

        {/* Modal Actions */}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-red- rounded">
            Cancel
          </button>
          <button
            onClick={() => onSave(localProject)}
            className="px-4 py-2 bg-lime-600 text-red rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
