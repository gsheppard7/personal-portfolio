import { experience } from "../portfolio/content";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineItem } from "../ui/TimelineItem";
import "../ui/timeline.css";

export function ExperienceSection() {
  return (
    <section
      className="section container"
      id="experience"
      aria-labelledby="experience-label"
    >
      <SectionHeading
        id="experience"
        title="Experience"
        subtitle="Roles and outcomes pulled from my resume — swap in your real copy in content.ts."
      />
      <div className="timeline-list">
        {experience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
