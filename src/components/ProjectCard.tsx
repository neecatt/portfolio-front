import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { TProject } from "../types/project.type";

interface IProjectCardProps { project: TProject; }

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <article className="project-card">
      {project.thumbnail && <img src={project.thumbnail} alt="" loading="lazy" className="project-card-image" />}
      <div className="project-card-content">
        <div>
          <h2 className="project-card-title">{project.title}</h2>
          <p className="project-card-description">{project.description}</p>
          {(project.role || project.featured) && <p className="eyebrow">{project.role || "Featured build"}</p>}
        </div>
        <div>
          <RouterLink className="project-card-case-study" to={`/projects/${project.slug || project.id}`}>Read case study →</RouterLink>
          <div className="project-card-links">
            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>GitHub ↗</a>}
            {project.websiteLink && <a href={project.websiteLink} target="_blank" rel="noreferrer" aria-label={`${project.title} live website`}>Live ↗</a>}
          </div>
          <div className="project-card-tags">
            {project.techStack.map((tech, index) => <span className="project-card-tag" key={index}>{typeof tech === "object" && tech !== null ? tech.name : tech}</span>)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
