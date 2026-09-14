import { siteMeta } from "../portfolio/content";
import "./footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>
          © {year} {siteMeta.name}. Crafted for recruiters &amp; hiring teams.
        </p>
        <p className="site-footer-note">
          Update copy in <code>src/components/portfolio/content.ts</code>
        </p>
      </div>
    </footer>
  );
}
