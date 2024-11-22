import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ title, projects, onEdit, onDelete, isRunning }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={onEdit}
            onDelete={onDelete}
            isRunning={isRunning}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
