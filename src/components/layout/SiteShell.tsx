import { CursorGlow } from "../effects/CursorGlow";
import { GridBackdrop } from "../effects/GridBackdrop";
import "../effects/effects.css";
import { Contact } from "../sections/Contact";
import { ExperienceSection } from "../sections/Experience";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function SiteShell() {
  return (
    <>
      <GridBackdrop />
      <CursorGlow />
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <Nav />
      <main className="site-main">
        <Hero />
        <Projects />
        <ExperienceSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
