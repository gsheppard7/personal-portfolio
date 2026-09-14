"use client";

import { useEffect, useState } from "react";
import { navItems, siteMeta } from "../portfolio/content";
import "./nav.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="container site-nav-inner">
        <a className="site-logo" href="#top" onClick={() => setOpen(false)}>
          <span className="site-logo-mark" aria-hidden="true" />
          <span>
            {siteMeta.name}
            <small>{siteMeta.role}</small>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="nav-toggle-bars" />
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav-links${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
