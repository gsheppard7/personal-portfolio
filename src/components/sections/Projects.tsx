import { projects } from "../portfolio/content";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";
import "../ui/project-card.css";

export function Projects() {
  return (
    <section
      className="section container"
      id="projects"
      aria-labelledby="projects-label"
    >
      <SectionHeading
        id="projects"
        title="Selected work"
        subtitle="Projects that show how I think about product, performance, and polish."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
