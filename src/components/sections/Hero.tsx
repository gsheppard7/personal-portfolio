"use client";

import { heroAbout, heroStats, siteMeta } from "../portfolio/content";
import { useReveal } from "../hooks/useReveal";
import "./hero.css";

export function Hero() {
  const panelRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero section" id="top" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div ref={panelRef} className="hero-copy glass-panel reveal">
          <p className="hero-availability">{siteMeta.availability}</p>
          <h1 className="hero-title" id="hero-heading">
            Hi, I&apos;m <span className="gradient-text">{siteMeta.name}</span>
            <span className="hero-title-sub"> — {siteMeta.role}</span>
          </h1>
          <p className="hero-tagline">{siteMeta.tagline}</p>
          <p className="hero-about">{heroAbout}</p>
          <p className="hero-location">{siteMeta.location}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See projects
            </a>
            <a
              className="btn btn-ghost"
              href={siteMeta.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <aside className="hero-stats" aria-label="Interests and focus areas">
          {heroStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </aside>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  index,
}: {
  label: string;
  value: string;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="hero-stat glass-panel reveal"
      style={{ transitionDelay: `${120 + index * 90}ms` }}
    >
      <p className="hero-stat-value">{value}</p>
      <p className="hero-stat-label">{label}</p>
    </div>
  );
}
