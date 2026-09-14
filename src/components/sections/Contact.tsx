"use client";

import { siteMeta } from "../portfolio/content";
import { useReveal } from "../hooks/useReveal";
import "./contact.css";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      className="section container"
      id="contact"
      aria-labelledby="contact-label"
    >
      <div ref={ref} className="contact-panel glass-panel reveal">
        <div className="contact-copy">
          <p className="section-kicker" id="contact-label">
            // contact
          </p>
          <h2 className="section-heading">Let&apos;s build what&apos;s next</h2>
          <p className="contact-text">
            Recruiters and hiring managers: I&apos;d love to walk through my projects,
            stack depth, and what I&apos;m looking for in my next role.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${siteMeta.email}`}>
            Email {siteMeta.name}
          </a>
          <a
            className="btn btn-ghost"
            href={siteMeta.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-ghost"
            href={siteMeta.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
