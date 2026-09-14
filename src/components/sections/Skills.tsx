"use client";

import { skillGroups } from "../portfolio/content";
import { SectionHeading } from "../ui/SectionHeading";
import { useReveal } from "../hooks/useReveal";
import "./skills.css";

export function Skills() {
  return (
    <section
      className="section container"
      id="skills"
      aria-labelledby="skills-label"
    >
      <SectionHeading
        id="skills"
        title="Capabilities"
        subtitle="Technologies and practices I reach for when shipping recruiter-ready work."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <SkillPanel key={group.id} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}

function SkillPanel({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="skill-panel glass-panel reveal"
      style={{ transitionDelay: `${index * 90}ms` }}
      aria-labelledby={`${group.id}-title`}
    >
      <h3 className="skill-panel-title" id={`${group.id}-title`}>
        {group.label}
      </h3>
      <ul className="skill-list">
        {group.items.map((item) => (
          <li key={item}>
            <span className="skill-node" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
