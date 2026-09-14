import { siteMeta } from "../portfolio/content";
import "./footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>
          © {year} {siteMeta.name}. Georgia Institute of Technology.
        </p>
        <p className="site-footer-note">
          <a href={siteMeta.links.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          {" · "}
          <a
            href={siteMeta.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a
            href={siteMeta.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
