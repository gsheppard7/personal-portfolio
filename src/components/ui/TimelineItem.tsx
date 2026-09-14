"use client";

import type { Experience } from "../portfolio/content";
import { useReveal } from "../hooks/useReveal";

type TimelineItemProps = {
  item: Experience;
  index: number;
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="timeline-item glass-panel reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-labelledby={`${item.id}-role`}
    >
      <div className="timeline-meta">
        <time dateTime={item.period.replace(/\s/g, "")}>{item.period}</time>
      </div>
      <div className="timeline-body">
        <h3 className="timeline-role" id={`${item.id}-role`}>
          {item.role}
        </h3>
        <p className="timeline-company">{item.company}</p>
        <p className="timeline-summary">{item.summary}</p>
        <ul className="timeline-bullets">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
