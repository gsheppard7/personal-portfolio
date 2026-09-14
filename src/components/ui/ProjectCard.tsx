"use client";

import type { Project } from "../portfolio/content";
import { useReveal } from "../hooks/useReveal";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useReveal<HTMLElement>();

  const className = `project-card glass-panel reveal${project.href ? " project-card--link" : ""}`;

  const body = (
    <>
      <div className="project-card-top">
        <h3 className="project-title">{project.title}</h3>
        {project.highlight ? (
          <span className="project-badge">{project.highlight}</span>
        ) : null}
      </div>
      <p className="project-desc">{project.description}</p>
      <ul className="project-tags" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span className="tag">{tag}</span>
          </li>
        ))}
      </ul>
      {project.href ? (
        <span className="project-link-hint" aria-hidden="true">
          View →
        </span>
      ) : null}
    </>
  );

  return (
    <article
      ref={ref}
      className={className}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {project.href ? (
        <a
          href={project.href}
          className="project-card-anchor"
          aria-label={`${project.title}: ${project.description}`}
        >
          {body}
        </a>
      ) : (
        body
      )}
    </article>
  );
}
